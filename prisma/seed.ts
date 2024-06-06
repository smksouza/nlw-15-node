import  { prisma } from '../src//lib/prisma'

async function seed() {
    await prisma.event.create({       
        data: {
            id: 'f20f40c7-91c2-45d2-8406-48d7c5379efc',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Um evento p/ devs apaixoonados(as) ppor café e código!',
            maximumAttendees: 120,
        }
    })
}

seed().then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})