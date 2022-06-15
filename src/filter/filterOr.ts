import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.courses.findMany({
    where: {
      OR: [
        {
          name: {
            contains: "React",
          },
        },
        {
          name: {
            contains: "Node",
          },
        },
      ],
    },
  });

  console.log(JSON.stringify(result));
}

main();
