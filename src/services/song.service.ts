import AppDataSource from "../data-source";
import { UserSong, User } from "../models";
import { ResourceNotFound } from "../middlewares";


export class SongService {

    public userRepository = AppDataSource.getRepository(User);
    public userSongRepository = AppDataSource.getRepository(UserSong);

    public async likeSong(userId: string, songId: string): Promise<{message: string, data: Partial<UserSong>}> {

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
            data: likedsong
        };
    }
   
}    

