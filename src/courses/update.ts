import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.courses.update({
    where: { id: "c10d07d7-5f30-438a-8ea2-61f91b44267d" },
    data: {
      name: "Curso de REACT",
      description: "Descrição curso de REACT",
    },
  });
}

main();
