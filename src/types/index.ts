export type UserResponsePayload = {
    id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
  };

export type LikedSongsResponsePayload = {

    id: string;
    songId: number;
}  

export type LikedSongResponse = {

  id: string;
  songId: number;
  user: UserResponsePayload;
} 

export interface JwtPayload {
  user_id: string;
}

export interface EmailData {
  from: string;
  to: string;
  subject: string;
  html: string;
}