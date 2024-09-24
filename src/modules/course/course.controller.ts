import { Request, Response } from "express";

import { courseService } from "./course.service";

const Created = async (req: Request, res: Response) => {
  try {
    const result = await courseService.createCourse(req.body);

    res.send({
      success: true,
      message: "Student Create Success",
      data: result,
    });
  } catch (error) {
    res.send(error);
  }
};

export const courseController = {
  Created,
};
