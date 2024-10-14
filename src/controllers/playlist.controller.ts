import { Request, Response, NextFunction } from "express";
import { PlaylistService } from "../services";
import { asyncHandler, sendJsonResponse } from "../helpers";


const playlistService = new PlaylistService();

export const likePlaylist = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {

    const userId  = req.user.user_id;
    const { playlistId } = req.body;
    const { message, data } = await playlistService.likePlaylist(userId, playlistId);
    sendJsonResponse(res, 201, message, data);

})