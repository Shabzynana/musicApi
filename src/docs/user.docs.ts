export const userDocs = `
/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     description: Retrieves a list of all users in the system.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully retrieved all users
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: All users fetched successfully
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
 *                         format: uuid
 *                         example: d7636d3d-b06e-4847-9072-9a376382ba22
 *                       email:
 *                         type: string
 *                         format: email
 *                         example: johndoe@example.com
 *                       first_name:
 *                         type: string
 *                         example: John
 *                       last_name:
 *                         type: string
 *                         example: Doe
 *                       username:
 *                         type: string
 *                         example: johndoe
 *       401:
 *         description: Unauthorized - no valid token provided
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