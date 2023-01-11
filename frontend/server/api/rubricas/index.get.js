import { Rubrica, RubricaGroup } from 'database'

export default defineEventHandler(event => {
    const relations = new Set()
    const full = getQuery(event).full
    if (full !== undefined) relations.add(RubricaGroup)
    const include = Array.from(relations)
    return Rubrica.findAll({ include })
})