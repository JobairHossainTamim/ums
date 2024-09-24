import { Request, Response } from "express";
import { StudentService } from "./student.service";

const CreatedStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentService.createStudent(req.body);

    res.send({
      success: true,
      message: "Student Create Success",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const studentController = {
  CreatedStudent,
};
