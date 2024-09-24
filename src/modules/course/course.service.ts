import { Course, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCourse = async (data: Course): Promise<Course> => {
  const result = await prisma.course.create({
    data,
  });

  return result;
};

export const courseService = {
  createCourse,
};
