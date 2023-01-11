import { Rubrica, RubricaGroup } from 'database'

export default defineEventHandler(event => {
    const relations = new Set()
    const full = getQuery(event).full
    if (full !== undefined) relations.add(Rubrica)
    const include = Array.from(relations)
    return RubricaGroup.findAll({ include })
})