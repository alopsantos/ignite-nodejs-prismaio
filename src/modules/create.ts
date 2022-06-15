import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.modules.create({
    data: {
      name: "Modulo 01 - Start",
      description: "Faribase do zero",
      CoursesModules: {
        create: {
          course: {
            connect: {
              id: "a7b71b9c-d378-4d9d-ba28-39907814ebea",
            },
          },
        },
      },
    },
  });

  console.log(result);
}

main();
