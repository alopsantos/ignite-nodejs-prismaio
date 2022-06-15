import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      fk_id_course: "b2074424-1270-4acf-9ce1-3136d61df299",
      fk_id_module: "b133f858-0d72-4fbb-9ae7-ac9611dc2c3f",
    },
  });

  console.log(result);
}

main();
