import { User } from "../models";
import { UserResponsePayload } from "../types";


export const formatUser = (user: User): UserResponsePayload => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
  };
};



