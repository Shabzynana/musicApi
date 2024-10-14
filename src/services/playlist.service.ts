import AppDataSource from "../data-source";
import { UserPlaylist, User } from "../models";
import { ResourceNotFound } from "../middlewares";
import { formatLikedPlaylist } from "../utils/responsebody";
import { LikedPlaylistResponse } from "../types";

export class PlaylistService {

    public userRepository = AppDataSource.getRepository(User);
    public userPlaylistRepository = AppDataSource.getRepository(UserPlaylist);

    public async likePlaylist(userId: string, playlistId: string): Promise<{message: string, data: LikedPlaylistResponse}> {

        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            throw new ResourceNotFound("User not found");
        }
        
        const playlist = new UserPlaylist();
        playlist.playlistId = playlistId.toString();
        playlist.user = user;

        const playlistCreated = await this.userPlaylistRepository.save(playlist);
        return {
            message: "Playlist created successfully",
            data: formatLikedPlaylist(playlistCreated)
        };
    }

    public async getUserLikedPlaylist(userId: string): Promise<{message: string, data: LikedPlaylistResponse[]}> {

        const user = await this.userRepository.findOne({
            where: { id: userId },
        });
        if (!user) {
            throw new ResourceNotFound("User not found");
        }
        const likedPlaylist = await this.userPlaylistRepository.find({
            where: { user: { id: userId } },
        });

        const formattedLikedPlaylist = likedPlaylist.map(playlist => formatLikedPlaylist(playlist));
        return {
            message: "Liked playlists retrieved successfully",
            data: formattedLikedPlaylist
        };
    }    




}
