import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services";
import { asyncHandler, sendJsonResponse } from "../helpers";


const authService = new AuthService();


export const signUp = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { message, user } = await authService.signUp(req.body);
    sendJsonResponse(res, 201, message, user);
});
