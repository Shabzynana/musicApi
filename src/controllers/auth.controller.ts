import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services";
import { asyncHandler, sendJsonResponse } from "../helpers";


const authService = new AuthService();


export const signUp = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { message, user } = await authService.signUp(req.body);
    sendJsonResponse(res, 201, message, user);
});


export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { message, user, access_token } = await authService.login(req.body);
    sendJsonResponse(res, 200, message, { user, access_token });
});


export const verifyEmail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.query.token as string;
    if (!token) {
        return sendJsonResponse(res, 400, "Token is required");
    }

    const { message, user } = await authService.verifyEmail(token);
    sendJsonResponse(res, 200, message, user );
})

export const currentUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.user.user_id
    const { message, data } = await authService.currentUser(id);
    sendJsonResponse(res, 200, message, data);
})
