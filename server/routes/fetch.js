import express from "express";
import { getData, getDatas } from "../controllers/fetchApi.js";
const router = express.Router();

// *   get full movie list  *//
router.get("/", getDatas);

// * get single movie  detail*//
router.get("/movie/:id", getData);

export default router;
