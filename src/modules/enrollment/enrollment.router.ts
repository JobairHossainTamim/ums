import express from "express";
import { enrollmentController } from "./enrollment.controller";

const router = express.Router();

router.post("/", enrollmentController.Created);

export const enrollRouter = router;
