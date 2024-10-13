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
 *                   additionalProperties: true
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
