import AppDataSource from "../data-source";
import { User } from "../models";
import { ResourceNotFound } from "../middlewares";
import { formatUser } from "../utils/responsebody";
import { UserResponsePayload } from "../types";

export class UserService {
    public userRepository = AppDataSource.getRepository(User);

    public async allUser(): Promise<{message: string; data: UserResponsePayload[]}> { 

        const users = await this.userRepository.find({
            withDeleted: true,
        });
        if (!users.length) {
            throw new ResourceNotFound("No user found");
            
        }
        const userResponse = users.map((user) => formatUser(user));
        return {message: "All users fetched successfully", data: userResponse};

    }


}

