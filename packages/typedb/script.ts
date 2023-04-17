import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

let seq = 0;

function genId() {
    return (Date.now() * 1000 + seq++ % 100);
}

const createStudent = async (firstName: string, lastName: string) =>
    await prisma.student.create({ data: { id: genId(), firstName, lastName }})

const createSubject = async (nameVLC: string, nameCAS: string) =>
    await prisma.subject.create({ data: { id: genId(), nameVLC, nameCAS }})

const createEnrollment = async (year: number, course: number, studentId: bigint, subjectId: bigint) =>
    await prisma.enrollment.create({ data: { id: genId(), year, course, studentId, subjectId }})

async function main() {
    const firstName = 'Agoreto', lastName = 'Alablate', nameVLC = '123', nameCAS = '123'

    // ! TRANSACTION SEEMS TO BE BROKEN, PROBLEM OF MARIADB?
    const [student, subject] = await prisma.$transaction([
        prisma.subject.create({ data: { id: genId(), nameVLC, nameCAS }}),
        prisma.student.create({ data: { id: genId(), firstName, lastName }}),
    ])
    const enrollment = await createEnrollment(2022, 3, student.id, subject.id)
    console.log(enrollment)
}

main()
    .finally(async () => {
        await prisma.$disconnect()
    })