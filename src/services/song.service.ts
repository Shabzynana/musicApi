import AppDataSource from "../data-source";
import { UserSong, User } from "../models";
import { ResourceNotFound } from "../middlewares";
import { formatLikedSong, formatLikedSongResponse } from "../utils/responsebody";
import { LikedSongsResponsePayload, LikedSongResponse } from "../types";


export class SongService {

    public userRepository = AppDataSource.getRepository(User);
    public userSongRepository = AppDataSource.getRepository(UserSong);

    public async likeSong(userId: string, songId: string): Promise<{message: string, data: LikedSongResponse}> {

        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            throw new ResourceNotFound("User not found");
        }

        const song = new UserSong();
        song.songId = songId.toString();
        song.user = user;

        const likedsong = await this.userSongRepository.save(song);
        return {
            message: "Song liked successfully",
            data: formatLikedSongResponse(likedsong)
        };
    }


    public async getLikedSongs(userId: string): Promise<{message: string, data: LikedSongsResponsePayload[]}> {

        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            throw new ResourceNotFound("User not found");
        }

        const likedSongs = await this.userSongRepository.find({
            where: { user: { id: userId } },
        });
    
        const formattedLikedSongs = likedSongs.map(song => formatLikedSong(song));
        return {
            message: "Liked songs retrieved successfully",
            data: formattedLikedSongs
        };
    }
   
}    

