import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

async function main() {
  await prisma.transportType.createMany({
    data: [
      { name: 'Bus', description: 'Angkutan umum bus kota' },
      { name: 'Angkot', description: 'Angkutan kota kecil' },
      { name: 'Kereta', description: 'Kereta api perkotaan' },
    ],
    skipDuplicates: true,
  })

  console.log('✅ TransportType seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
