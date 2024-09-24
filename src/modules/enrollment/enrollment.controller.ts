import { Request, Response } from "express";
import { enrollmentService } from "./enrollment.service";

const Created = async (req: Request, res: Response) => {
  try {
    const result = await enrollmentService.createEnrollment(req.body);
    res.send({
      success: true,
      message: "Student Enrollment Success",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const enrollmentController = {
  Created,
};
