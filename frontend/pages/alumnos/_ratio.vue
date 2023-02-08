<template>
    <RouterLink
        :to="printable ? printableHref : evaluateHref"
        class="text-color-grey"
        :class="{ 'text-color-green': printable}"    
    >{{  evaluatedNum }} / {{ evaluatableNum }}</RouterLink>
</template>

<script setup>
// import { useAlumnoStore } from '~~/stores/alumnos'
import { useAsignaturaStore } from '~~/stores/asignaturas';
import { useEvaluationItemStore } from '~~/stores/evaluationItems'
import { useMatriculaStore } from '~~/stores/matriculas'
import { useRubricaGroupStore } from '~~/stores/rubricaGroups'
import { useRubricaStore } from '~~/stores/rubricas'

const props = defineProps({ alumnoId: Number })

const $evaluationItems = useEvaluationItemStore()

const $matriculas = useMatriculaStore()
const $rubricaGroups = useRubricaGroupStore()
const $rubricas = useRubricaStore()
const $asignaturas = useAsignaturaStore()

const printableHref = computed(() =>
    `/print/${props.alumnoId}`
)

const evaluateHref = computed(() =>
    `/alumno/${props.alumnoId}`
)

const numRubricasByGroup = computed(() => 
    $rubricaGroups.rubricaGroups.map(({ id }) => 
        ({ 
            id, 
            num: $rubricas.rubricas.filter(r => r.RubricaGroupId === id ).length,
        })
    )
)

const numRubricasByAsignaturas = computed(() => 
    $asignaturas.asignaturas.filter(a => a.RubricaGroupId)
        .map(({ id, RubricaGroupId }) => 
            ({
                id,
                num: numRubricasByGroup.value.find(rg => rg.id === RubricaGroupId)?.num,
            })    
        )
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