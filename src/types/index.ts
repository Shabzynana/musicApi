export type UserResponsePayload = {
    id: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
  };

export type LikedSongResponse = {

    id: string;
    songId: number;
}  


export type LikedPlaylistResponse = {

  id: string;
  playlistId: number;
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