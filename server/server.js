import express from "express";
import { corsOptions, envVars } from "./configs/config.js";
import { connection } from "./configs/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import taskRouter from "./routes/Tasks.routes.js";
(function () {
  const app = express();

  app.use(cors(corsOptions));
  app.use(bodyParser.json()); 
  app.use(bodyParser.urlencoded({ extended: true }));
  connection();

  app.use("/api", taskRouter);
  app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });
  app.listen(envVars.APP_PORT, () => {
    console.log(`⚡️[server]: Server is running on port ${envVars.APP_PORT}`);
  });
})();
