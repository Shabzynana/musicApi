export const signUp = `
/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Sign up a new user
 *     tags: [Authentication]
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
 *                 data:
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


export const login = `
/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Sign up a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 example: strongpassword123
 *
 *     responses:
 *       200:
 *         description: The user was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login Successfull,
 *                 status_code:
 *                   type: number
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                         first_name:
 *                           type: string
 *                         last_name:
 *                           type: string
 *                         email:
 *                           type: string
 *                         created_at:
 *                           type: string
 *                         image_url:
 *                           type: string
 *                         role:
 *                           type: string
 *                 access_token:
 *                   type: string
 *       401:
 *         description: Invalid credeentials
 *       404:
 *         description: User not found
 *       500:
 *         description: Some server error
 */
`;

