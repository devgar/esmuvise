import { useAlumnoStore } from "./alumnos"
import { useAsignaturaStore } from "./asignaturas"
import { useEvaluationItemStore } from "./evaluationItems"
import { useMatriculaStore } from "./matriculas"
import { useRubricaGroupStore } from "./rubricaGroups"
import { useRubricaStore } from "./rubricas"

export default defineStore('__META__', () => {
    const $alumnos = useAlumnoStore()
    const $asignaturas = useAsignaturaStore()
    const $evaluatoinItemss = useEvaluationItemStore()
    const $matriculas = useMatriculaStore()
    const $rubricaGroups = useRubricaGroupStore()
    const $rubricas = useRubricaStore()
    
    const fetch = () => Promise.all([
        $alumnos.fetch(),
        $asignaturas.fetch(),
        $evaluatoinItemss.fetch(),
        $matriculas.fetchFull(),
        $rubricaGroups.fetch(),
        $rubricas.fetch(),
    ])

    return { fetch }
})