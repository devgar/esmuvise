<template>
    <div 
        v-if="numRubricas"
        class="printable__asignatura"
    >
        <h4>
            <div class="grow">{{ asignatura?.nameVLC }}</div> 
            <span class="normal">{{ curso(matricula.curso) }} </span>
        </h4>
        <h4>
            <div class="semi old">Avaluació 1ª: {{ itemsAverageOld }}</div> 
            <div class="semi">2ª: {{ itemsAverage }}</div> 
        </h4>
        <table cellpadding="0" cellspacing="0" width="100%">
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
    const searchKeys = (({ id: MatriculaId, AsignaturaId }) => 
        ({ MatriculaId, AsignaturaId, EvaluationId: 2 }))(props.matricula)
    const matches = $evalutionItems.byKeys(searchKeys)
    const average = matches.reduce((acc, curr) => acc + curr.value, 0) / matches.length
    return $equivalences.repr(average)
})

const itemsAverageOld = computed(()=> {
    const searchKeys = (({ id:MatriculaId, AsignaturaId })=>({ MatriculaId, AsignaturaId, EvaluationId: 1 }))(props.matricula)
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

const curso = (num: number) => ({
    0: 'iniciació musical',
    6: '4 anys',
    7: '5 anys',
    8: 'preparatori',
    9: 'llenguatge adults',  
}[num.toString()] || `${num} curs`)

</script>

<style scoped>
.grow {
    flex-grow: 1;
    margin: 0 0.6rem;
}

.semi {
    width: 50%;
}

.title {
    width: 100%;
}

.row {
    display: flex;
}

.old {
    font-weight: normal;
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