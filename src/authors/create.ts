import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.authors.create({
    data: {
      name: "Monteiro Lobato 2",
      Books: {
        createMany: {
          data: [{ name: "Sito do pica pau" }, { name: "Lago azul" }],
        },
      },
    },
  });
}

main();
