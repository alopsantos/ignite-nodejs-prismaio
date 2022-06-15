import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const result = await prisma.coursesModules.create({
    data: {
      course: {
        create: {
          duration: 340,
          name: "Curso Java script",
          description: "Curso completo de java script para sair do zero ao top",
          fk_id_teacher: "1ede18d8-febe-4902-8cf5-8d3481fabd77",
        },
      },
      module: {
        create: {
          description: "Conhecendo a DOM",
          name: "Modulo 01",
        },
      },
    },
  });
  console.log(result);
}
main();
