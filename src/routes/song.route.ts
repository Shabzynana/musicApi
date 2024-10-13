import { Router } from "express";
import { likeSong } from "../controllers";
import { authMiddleware } from "../middlewares";

const songRouter = Router();

songRouter.use(authMiddleware);

songRouter.post(
    "/song/like",
    likeSong
)

export { songRouter }