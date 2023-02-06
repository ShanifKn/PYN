import express from "express";
import cors from "cors";
import helmet from "helmet";
import fetchRoute from "../server/routes/fetch.js";
import * as dotenv from "dotenv";
dotenv.config();

//*  CONFIGURATION *//
const app = express();
app.use(helmet({ crossOriginResourcePolicy: true }));
app.use(cors());

//*  ROUTES   *//
app.use("/api", fetchRoute);

// * HTTP SERVER *//
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
