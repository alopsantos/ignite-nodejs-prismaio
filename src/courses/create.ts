import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Nodejs",
      duration: 180,
      description: "Descrição curso de Nodejs",
      teacher: {
        connectOrCreate: {
          where: {
            name: "Alison",
          },
          create: {
            name: "Alison",
          },
        },
      },
    },
  });

  console.log(result);
}

main();
