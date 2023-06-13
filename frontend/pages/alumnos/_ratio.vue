<template>
    <VBtn
        router nuxt-link class="text-color-grey px-0"
        :to="printable ? printableHref : evaluateHref"
        :class="{ 'text-color-green': printable}" variant="text"
    ><span>{{ evaluatedNum }}</span>|<b>{{ evaluatableNum }}</b></VBtn>
</template>

<script setup>

const $evaluation = useEvaluationStore()

const { alumnoId } = defineProps({ alumnoId: Number })

const $evaluationItems = useEvaluationItemStore()

const $matriculas = useMatriculaStore()
const $numRubricasByMat = useNumRubricasByMat()

const printableHref = computed(() => alumnoId && `/print/${alumnoId}`)

const evaluateHref = computed(() => alumnoId && `/alumno/${alumnoId}`)

const evaluatedNum = computed(() => $evaluationItems.byKeys({
    AlumnoId: alumnoId,
    EvaluationId: $evaluation.evaluation,
}).length)

const evaluatableNum = computed(() => 
    $matriculas.byAlumnoId(alumnoId)
        .map(mat => $numRubricasByMat.nums.find(a => a.id === mat.AsignaturaId))
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

span, b {
    text-align: left;
    display: inline-block;
    width: 22px;
}
span { text-align: right; }
</style>