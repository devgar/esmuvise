import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

let seq = 0;

function genId() {
    return (Date.now() * 1000 + seq++ % 100);
}

async function main() {
    const student = await prisma.student.create({
        data: {
            id: genId(),
            firstName: "Menganito",
            lastName: "Fulgencio",
            dni: "12345678X",
            roadType: "Calle",
            address: "Castillo",
            postalCode: "12110",
            city: "L'Alcora",
            telephone: "964360000",
            birthDate: new Date(),
            sex: "M",
        }
    })

    console.log(student)
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