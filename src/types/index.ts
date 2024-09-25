export type UserResponsePayload = {
    id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
  };

export interface JwtPayload {
  user_id: string;
}

export interface EmailData {
  from: string;
  to: string;
  subject: string;
  html: string;
}