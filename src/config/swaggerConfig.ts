import swaggerJsdoc, { SwaggerDefinition } from "swagger-jsdoc";
import config from ".";
import { version } from "../../package.json";

const swaggerDefinition: SwaggerDefinition = {
  openapi: "3.1.0",
  info: {
    title: "MusicApp API with Swagger",
    version: version,
    description: "OpenApi documentaiton for the MusicApp project",
  },
  servers: [
    {
      url: `http://localhost:${config.port}/`,
      description: "Local server",
    },
    {
      url: `https://marco-pzbx.onrender.com/`,
      description: "Production server",
    }
  ],
  tags: [
    {
      name: "default",
      description: "A list of all default routes",
    },
    // {
    //   name: "Authentication",
    //   description: "A list of routes for Authentication",
    // },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  externalDocs: {
    url: config.SWAGGER_JSON_URL,
  },
};

const options = {
  swaggerDefinition,
  apis: [
    "./src/routes/*.ts",
    "./src/controllers/*.ts",
    "./src/services/*.ts",
    "./src/schema/*.ts",
    "./src/docs/*.ts",
  ],
};

const specs = swaggerJsdoc(options);

export default specs;
