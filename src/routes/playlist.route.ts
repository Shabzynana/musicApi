import { Router } from "express";
import { likePlaylist, getUserLikedPlaylist } from "../controllers";
import { authMiddleware } from "../middlewares";

const playlistRouter = Router();

playlistRouter.use(authMiddleware);

playlistRouter.post(
    "/playlist/like",
    likePlaylist
)

playlistRouter.get(
    "/user/liked-playlists",
    getUserLikedPlaylist
)

export { playlistRouter }