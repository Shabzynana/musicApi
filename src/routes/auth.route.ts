import { Router } from "express";
import { signUp, login, verifyEmail, currentUser } from "../controllers";
import { authMiddleware } from "../middlewares";

const authRouter = Router();

authRouter.post("/auth/register", signUp);
authRouter.post("/auth/login", login);
authRouter.get("/auth/verify_email", verifyEmail);
authRouter.get("/auth/current_user", authMiddleware, currentUser);

export { authRouter };
