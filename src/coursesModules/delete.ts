import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.delete({
    where: {
      id: "94da496c-7d4c-49bf-805c-c3ee76d11b77",
    },
  });

  console.log(JSON.stringify(result));
}

main();
