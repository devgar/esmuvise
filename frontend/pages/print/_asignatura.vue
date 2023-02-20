<template>
    <div 
        v-if="numRubricas"
        class="printable__asignatura"
    >
        <h4>
            {{ asignatura?.nameVLC }} 
            <span class="grow">{{ itemsAverage }}</span> 
            <span class="float normal">{{ curso(matricula.curso) }} </span></h4>
        <table>
            <EvaluationItem
                v-for="rubrica of rubricas" :key="rubrica.id" 
                :MatriculaId="matricula.id" 
                :RubricaId="rubrica.id"
                :concept="rubrica.concept"
            />
        </table>
    </div>
</template>

<script setup lang="ts">
import type { Matricula } from '~~/utils/types'

import { useAsignaturaStore } from '~~/stores/asignaturas'
import { useRubricaGroupStore } from '~~/stores/rubricaGroups'
import { useRubricaStore } from '~~/stores/rubricas'
import { useNumRubricasByMat } from '~~/stores/numRubricasByMat'
import { useEvaluationItemStore } from '~~/stores/evaluationItems'
import { useEquivalenceStore } from '~~/stores/equivalences'

import EvaluationItem from './_evaluationItem.vue'

const props = defineProps<{ matricula: Matricula }>()

const $asignaturas = useAsignaturaStore()
const $rubricaGroups = useRubricaGroupStore()
const $rubricas = useRubricaStore()
const $numRubricas = useNumRubricasByMat()
const $evalutionItems = useEvaluationItemStore()
const $equivalences = useEquivalenceStore()

const itemsAverage = computed(()=> {
    const searchKeys = (({ id:MatriculaId, AsignaturaId })=>({ MatriculaId, AsignaturaId }))(props.matricula)
    const matches = $evalutionItems.byKeys(searchKeys)
    const average = matches.reduce((acc, curr) => acc + curr.value, 0) / matches.length
    return $equivalences.repr(average)
})

const asignatura = computed(() =>
    $asignaturas.byId(props.matricula?.AsignaturaId)
)

const numRubricas = computed(() =>
    $numRubricas.byAsignaturaId(props.matricula.AsignaturaId)?.num
)

const rubricas = computed(() => {
    if (!asignatura.value) return undefined
    const rubricaGroup = $rubricaGroups.byId(asignatura.value?.RubricaGroupId)
    return $rubricas.rubricas.filter(r => r.RubricaGroupId === rubricaGroup?.id)
})

const curso = (num: number) => { 
    if (num === 0 ){
        return 'iniciació musical'
    }
    if (num === 6){
        return '4 anys'
    }
    if (num === 7){
        return '5 anys'
    }
    if (num === 8){
        return 'preparatori'
    }
    if (num === 9){
        return 'llenguatge adults'
    }
    return `${num} curs`
}

</script>

<style scoped>
.grow {
    flex-grow: 1;
    margin: 0 0.6rem;
}
@media print {
    .printable__asignatura {
        page-break-inside: avoid; 
    }
}

.printable__asignatura {
    margin: 1.5rem 0;
}

.printable__asignatura h4 {
    /* text-align: center; */
    display: flex;
    padding-left: 1rem;
    border-bottom: 2px solid black;
}

h4 > .normal {
    font-weight: normal;
}
</style>