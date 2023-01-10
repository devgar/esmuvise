import { RubricaGroup } from 'database'
import getId from '~/server/utils/getId'

export default defineEventHandler((event) => {
    return RubricaGroup.findByPk(getId(event))
})