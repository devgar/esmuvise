<template>
    <RouterLink
        :to="printable ? printableHref : evaluateHref"
        class="text-color-grey"
        :class="{ 'text-color-green': printable}"    
    >{{  evaluatedNum }} / {{ evaluatableNum }}</RouterLink>
</template>

<script setup>
// import { useAlumnoStore } from '~~/stores/alumnos'
import { useEvaluationItemStore } from '~~/stores/evaluationItems'
import { useMatriculaStore } from '~~/stores/matriculas'
import { useNumRubricasByMat } from '~~/stores/numRubricasByMat'

const props = defineProps({ alumnoId: Number })

const $evaluationItems = useEvaluationItemStore()

const $matriculas = useMatriculaStore()
const $numRubricasByMat = useNumRubricasByMat()

const printableHref = computed(() =>
    `/print/${props.alumnoId}`
)

const evaluateHref = computed(() =>
    `/alumno/${props.alumnoId}`
)

const evaluatedNum = computed(() => $evaluationItems.byAlumnoId(props.alumnoId).length)

const evaluatableNum = computed(() => 
    $matriculas.byAlumnoId(props.alumnoId)
        .map(mat => numRubricasByAsignaturas.value.find(a => a.id === mat.AsignaturaId))
        .filter(n => !!n)
        .map(n => n.num)
        .reduce((a, b) => a + b, 0)
)

const printable = computed(() => 
    !!evaluatedNum.value && evaluatableNum.value == evaluatedNum.value
)
</script>

<style scoped>
.text-color-grey {
    color: #777;
}

.text-color-green {
    color: #090;
}
</style>