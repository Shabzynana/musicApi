import { User, UserSong } from "../models";
import { UserResponsePayload, LikedSongsResponsePayload, LikedSongResponse } from "../types";


export const formatUser = (user: User): UserResponsePayload => {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
  };
};

export const formatLikedSong = (likedSong: UserSong): LikedSongsResponsePayload => {
  return {
      id: likedSong.id,
      songId: Number(likedSong.songId)
  }
}

export const formatLikedSongResponse = (likedSong: UserSong): LikedSongResponse => {
  return {
      user: formatUser(likedSong.user),
      id: likedSong.id,
      songId: Number(likedSong.songId),
  }
}



