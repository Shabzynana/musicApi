import { Router } from "express";
import { allUser } from "../controllers";
import { authMiddleware } from "../middlewares";

const userRouter = Router();

userRouter.use(authMiddleware);

userRouter.get(
    "/users",
    allUser);

export { userRouter };    

