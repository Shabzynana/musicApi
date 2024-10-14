export const likeSong = `
/**
 * @swagger
 * /api/v1/song/like:
 *   post:
 *     summary: Like a song
 *     tags: [Song]
 *     description: Allows a user to like a song by providing the song ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               songId:
 *                 type: interger
 *                 example: 123456789
 *     responses:
 *       201:
 *         description: Song liked successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Song liked successfully
 *                 status_code:
 *                   type: integer
 *                   example: 201
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "abcd1234-efgh-5678-ijkl-9012mnop3456"
 *                     songId:
 *                       type: interger
 *                       example: 123456789
 *       400:
 *         description: Bad Request - Song ID is required
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Song ID is required
 *                 status_code:
 *                   type: integer
 *                   example: 400
 */
`;


export const getLikedSongs = `
/**
 * @swagger
 * /api/v1/user/liked-songs:
 *   get:
 *     summary: Get a user liked songs
 *     tags: [Song]
 *     description: Fetches a list of songs liked by the authenticated user.
 *     security:
 *       - bearerAuth: [] # Assuming JWT authentication is used
 *     responses:
 *       200:
 *         description: List of liked songs
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Liked songs fetched successfully
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
 *                       songId:
 *                         type: number
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

