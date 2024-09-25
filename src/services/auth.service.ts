import AppDataSource from "../data-source";
import { User } from "../models";
import { comparePassword, hashPassword } from "../utils";
import { HttpError, ResourceNotFound } from "../middlewares";
import { formatUser } from "../utils/responsebody";
import jwt from "jsonwebtoken";
import config from "../config";
import sendEmailTemplate from "../views/email/sendEmailTemplate";

export class AuthService {

    public userRepository = AppDataSource.getRepository(User);

    public async signUp(payload: any): Promise<{ message: string; user: Partial<User>; }> {

        const { first_name, last_name, username, email, password } = payload;

        const userExist = await this.userRepository.findOne({
            where: { email },
            withDeleted: true,
        });

        if (userExist) {
            if (userExist.is_deleted) {
                throw new HttpError(
                  403,
                  "Account associated with these email has been deleted. Please contact support for assistance.",
                );
              }
            throw new Error("User already exists");
        }

        const usernameExist = await this.userRepository.findOne({
            where: { username },
        });
        if (usernameExist) {
            throw new Error("Username already exist");
        }
        
        const hashedPassword = await hashPassword(password);
        const user = new User()
        user.first_name = first_name;
        user.last_name = last_name;
        user.username = username;
        user.email = email;
        user.password = hashedPassword;
        
        const userCreated = await AppDataSource.manager.save(user);

        const sendToken = jwt.sign({ user_id: user.id }, config.TOKEN_SECRET, {expiresIn: "1h" });
        const verifyUrl = `${config.BASE_URL}/api/v1/auth/verify_account?token=${sendToken}`;
        await sendEmailTemplate({
            to: email,
            subject: "Verify your Email",
            templateName: "verify_email",
            variables: {
              name: user?.last_name,
              verifyUrl,
            },
          });
        const userResponse = formatUser(userCreated);
        return {
            message: "User created successfully",
            user: userResponse,
        }
    }

    

    public async login(payload: any ): Promise<{ message: string; user: Partial<User>; access_token: string; }> {

        const { email, password } = payload;

        const user = await this.userRepository.findOne({
            where: { email },
        });
        if (!user) {
            throw new ResourceNotFound("User not found" );
        }

        if (user.google_id && user.password === null) {
            throw new HttpError(401, "User Created with Google");
        }

        const isPasswordValid = await comparePassword(password, user.password);
        if (!isPasswordValid) {
            throw new HttpError(401, "Invalid credentials");
        }

        const access_token = jwt.sign({ user_id: user.id },  config.TOKEN_SECRET, {
            expiresIn: "1d" });
        const userResponse = formatUser(user);
        return {
            message: "login successfull",
            user: userResponse,
            access_token
        };
    }
    



}    