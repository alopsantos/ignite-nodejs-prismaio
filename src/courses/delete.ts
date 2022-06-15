import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.courses.delete({
    where: { id: "b9901e8f-6795-451b-93c8-65eaa44b8fcc" },
  });
}

main();
