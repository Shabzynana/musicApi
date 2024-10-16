export const likPlaylist = `
/**
 * @swagger
 * /api/v1/playlist/like:
 *   post:
 *     summary: Like a new playlist
 *     tags: [Playlist]
 *     description: Allows a user to like a new playlist by providing the playlist ID.
 *     security:
 *       - bearerAuth: [] # Assuming JWT authentication is used
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               playlistId:
 *                 type: interger
 *                 description: Unique identifier for the playlist
 *                 example: 123456789
 *     responses:
 *       201:
 *         description: Playlist created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Playlist created successfully
 *                 status_code:
 *                   type: integer
 *                   example: 201
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "abcd1234-efgh-5678-ijkl-9012mnop3456"
 *                     playlistId:
 *                       type: interger
 *                       example: 123456789
 *       400:
 *         description: Bad Request - Playlist ID is required
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Playlist ID is required
 *                 status_code:
 *                   type: integer
 *                   example: 400
 *       401:
 *         description: Unauthorized - Authentication token missing or invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 *                 status_code:
 *                   type: integer
 *                   example: 401
 */
`;


export const getUserLikedPlaylist = `
/**
 * @swagger
 * /api/v1/user/liked-playlists:
 *   get:
 *     summary: Get user liked playlists
 *     tags: [Playlist]
 *     description: Retrieves a list of playlists that the authenticated user has liked.
 *     security:
 *       - bearerAuth: [] # Assuming JWT authentication is used
 *     responses:
 *       200:
 *         description: A list of a user liked playlists
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Liked playlists fetched successfully
 *                 status_code:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: string
 *                         example: "abcd1234-efgh-5678-ijkl-9012mnop3456"
 *                       playlistId:
 *                         type: interrger
 *                         example: 123456789
 *       401:
 *         description: Unauthorized - Authentication token missing or invalid
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Unauthorized
 *                 status_code:
 *                   type: integer
 *                   example: 401
 */
`;
