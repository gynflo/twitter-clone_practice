import {PrismaClient}  from '@prisma/client';



const prisma = new PrismaClient();

async function main() {
  // Connect the client
  await prisma.$connect()
  console.log('Successful connection to the database ');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  }) 

export { prisma }