import cors from "cors";
import express, { Express, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./config/swaggerConfig";
import { errorHandler, routeNotFound } from "./middlewares";
import { authRouter, userRouter, songRouter, playlistRouter } from "./routes";


const app: Express = express();
app.options("*", cors());
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Authorization",
    ],
  }),
);


// app.use(Limiter);
app.use(express.json({ limit: "15mb" }));
app.use(express.urlencoded({ limit: "15mb", extended: true }));
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "I am the express API responding for MusicApi",
  });
});

app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", songRouter);
app.use("/api/v1", playlistRouter);

app.use("/openapi.json", (_req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});


app.use(errorHandler);
app.use(routeNotFound);
export default app;
