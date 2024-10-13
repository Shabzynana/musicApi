import { Router } from "express";
import { likeSong, getLikedSongs } from "../controllers";
import { authMiddleware } from "../middlewares";

const songRouter = Router();

songRouter.use(authMiddleware);

songRouter.post(
    "/song/like",
    likeSong
)

songRouter.get(
    "/user/liked-songs",
    getLikedSongs
)


export { songRouter }