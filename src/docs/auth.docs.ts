export const signUp = `
/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Sign up a new user
 *     description: Registers a new user with their details and returns the created user object
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - first_name
 *               - last_name
 *               - username
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: The user's email address
 *                 example: johndoe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The user's password
 *                 example: password123
 *               first_name:
 *                 type: string
 *                 description: The user's first name
 *                 example: John
 *               last_name:
 *                 type: string
 *                 description: The user's last name
 *                 example: Doe
 *               username:
 *                 type: string
 *                 description: The user's username
 *                 example: johndoe
 *     responses:
 *       201:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created successfully
 *                 status_code:
 *                   type: integer
 *                   example: 201
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       format: uuid
 *                       example: d7636d3d-b06e-4847-9072-9a376382ba22
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: johndoe@example.com
 *                     firstName:
 *                       type: string
 *                       example: John
 *                     lastName:
 *                       type: string
 *                       example: Doe
 *                     username:
 *                       type: string
 *                       example: johndoe
 *       400:
 *         description: Bad request - invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Invalid input data
 *                 status_code:
 *                   type: integer
 *                   example: 400
 */
`;
