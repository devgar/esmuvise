<template>
    <div 
        v-if="numRubricas"
        class="printable__asignatura"
    >
        <h4>{{ asignatura?.nameVLC }} <span>curs:</span>{{ matricula.curso }}</h4>
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

import { useAsignaturaStore } from '~~/stores/asignaturas';
import { useRubricaGroupStore } from '~~/stores/rubricaGroups';
import { useRubricaStore } from '~~/stores/rubricas';
import { useNumRubricasByMat } from '~~/stores/numRubricasByMat';

import EvaluationItem from './_evaluationItem.vue';

const props = defineProps<{ matricula: Matricula }>()

const $asignaturas = useAsignaturaStore()
const $rubricaGroups = useRubricaGroupStore()
const $rubricas = useRubricaStore()
const $numRubricas = useNumRubricasByMat()

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
</script>

<style scoped>
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
    padding-left: 1rem;
    border-bottom: 2px solid black;
}

h4 > span {
    font-weight: normal;
}
</style>