import { Router } from "express";
import { signUp, login } from "../controllers";

const authRouter = Router();

authRouter.post("/auth/register", signUp);
authRouter.post("/auth/login", login);

export { authRouter };
