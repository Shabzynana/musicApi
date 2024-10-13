import { Request, Response, NextFunction } from "express";
import { SongService } from "../services";
import { asyncHandler, sendJsonResponse } from "../helpers";

const songService =  new SongService();

export const likeSong = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    
    const userId  = req.user.user_id;
    const { songId } = req.body;
    const { message, data } = await songService.likeSong(userId, songId);
    sendJsonResponse(res, 201, message, data);
})

export const getLikedSongs = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    
    const userId  = req.user.user_id;
    const { message, data } = await songService.getLikedSongs(userId);
    sendJsonResponse(res, 200, message, data);
})