import { readFileSync } from 'fs'
import db from '../models/index.mjs'

const seeds = Object.keys(db).filter(k => k.toUpperCase() !== 'sequelize')
const importDir = new URL('../seed/', import.meta.url)

if (process.argv.length < 3) {
    console.error('This needs an argument')
    process.exit(1)
}

const arg = process.argv[2]

if (!seeds.includes(arg)) {
    console.error(`<${arg}> not in seeds`, seeds)
    process.exit(1)
}

const filename = arg.toLowerCase() + 's.json'

const content = readFileSync(new URL(filename, importDir), 'utf-8')

const data = JSON.parse(content)

await db.sequelize.sync()
const result = await db[arg].bulkCreate(data)

console.log(result.length, 'items created')