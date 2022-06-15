import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.books.create({
    data: {
      name: "Arquitetura Lima",
      author_id: "d75c08ca-cf16-404f-bee1-230866f3c5b5",
    },
  });

  console.log(result);
}

main();
