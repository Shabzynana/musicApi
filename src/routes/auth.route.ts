import { Router } from "express";
import { signUp, login, verifyEmail, currentUser, forgotPassword, resetPassword, resendVerificationEmail } from "../controllers";
import { authMiddleware } from "../middlewares";

const authRouter = Router();

authRouter.post(
    "/auth/register", 
    signUp);

authRouter.post(
    "/auth/login", 
    login);

authRouter.get(
    "/auth/verify-email", 
    verifyEmail);

authRouter.get(
    "/auth/current-user", 
    authMiddleware, 
    currentUser);

authRouter.post(
    "/auth/forgot-password",
    forgotPassword
)    

authRouter.post(
    "/auth/reset-password",
    resetPassword
)

authRouter.post(
    "/auth/resend-verification-email",
    authMiddleware,
    resendVerificationEmail
)


export { authRouter };
