import AppDataSource from "../data-source";
import { User } from "../models";
import { comparePassword, hashPassword } from "../utils";
import { HttpError } from "../middlewares";
import { formatUser } from "../utils/responsebody";

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
            throw new Error("Username already exists");
        }
        
        const hashedPassword = await hashPassword(password);
        const user = new User()
        user.first_name = first_name;
        user.last_name = last_name;
        user.username = username;
        user.email = email;
        user.password = hashedPassword;
        
        const userCreated = await AppDataSource.manager.save(user);
        const userResponse = formatUser(userCreated);
        return {
            message: "User created successfully",
            user: userResponse,
        }
    }



}    