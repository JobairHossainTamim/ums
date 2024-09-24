import express, { Application } from "express";
import cors from "cors";
import { studentRouter } from "./modules/students/students.router";
import { courseRouter } from "./modules/course/course.router";
import { enrollRouter } from "./modules/enrollment/enrollment.router";

const port = process.env.PORT || 3000;

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// All App router
app.use("/api/v1/student", studentRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/enroll", enrollRouter);

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});
