import { RubricaGroup } from 'database'

export default defineEventHanlder((_event) => {
    return RubricaGroup.findAll()
})