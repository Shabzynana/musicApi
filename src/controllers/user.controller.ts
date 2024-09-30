import { Request, Response, NextFunction } from "express";
import { UserService } from "../services";
import { asyncHandler, sendJsonResponse } from "../helpers";


const userService = new UserService();

export const allUser = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const { message, data } = await userService.allUser();
    sendJsonResponse(res, 200, message, data);
})