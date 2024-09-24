import { Enrollment, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createEnrollment = async (data: Enrollment): Promise<Enrollment> => {
  const result = await prisma.enrollment.create({
    data,
  });

  return result;
};

export const enrollmentService = {
  createEnrollment,
};
