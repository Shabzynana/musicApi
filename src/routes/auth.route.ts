import { Router } from "express";
import { signUp, login, verifyEmail } from "../controllers";

const authRouter = Router();

authRouter.post("/auth/register", signUp);
authRouter.post("/auth/login", login);
authRouter.get("/auth/verify_email", verifyEmail);

export { authRouter };
