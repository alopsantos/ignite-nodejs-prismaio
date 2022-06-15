import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.create({
    data: {
      name: "Curso de Nodejs",
      duration: 180,
      description: "Descrição curso de Nodejs",
      teacher: {
        connect: {
          id: "2e413a38-e004-428e-acb7-ec6cab9460e6",
        },
      },
    },
  });

  console.log(result);
}

main();
