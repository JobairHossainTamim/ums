import express from "express";
import { courseController } from "./course.controller";

const router = express.Router();

router.post("/", courseController.Created);

export const courseRouter = router;
