import { PrismaClient, Students } from "@prisma/client";

const prisma = new PrismaClient();

const createStudent = async (data: Students): Promise<Students> => {
  const result = await prisma.students.create({
    data,
  });

  return result;
};

export const StudentService = {
  createStudent,
};
