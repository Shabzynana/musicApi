import { Router } from "express";
import { likePlaylist } from "../controllers";
import { authMiddleware } from "../middlewares";

const playlistRouter = Router();

playlistRouter.use(authMiddleware);

playlistRouter.post(
    "/playlist/like",
    likePlaylist
)

export { playlistRouter }