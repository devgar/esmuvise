<template>
    <h1>{{ asignatura?.nameVLC }}</h1>

    <EvaluationItem
        v-for="rubrica of rubricas" :key="rubrica.id" 
        :MatriculaId="matricula.id" 
        :RubricaId="rubrica.id" 
    />
</template>

<script setup lang="ts">
import type { Matricula } from '~~/utils/types'

import { useAsignaturaStore } from '~~/stores/asignaturas';
import { useRubricaGroupStore } from '~~/stores/rubricaGroups';
import { useRubricaStore } from '~~/stores/rubricas';

import EvaluationItem from './_evaluationItem.vue';

const props = defineProps<{ matricula: Matricula }>()

const $asignaturas = useAsignaturaStore()
const $rubricaGroups = useRubricaGroupStore()
const $rubricas = useRubricaStore()

const asignatura = computed(() =>
    $asignaturas.byId(props.matricula?.AsignaturaId)
)

const rubricas = computed(() => {
    if (!asignatura.value) return undefined
    const rubricaGroup = $rubricaGroups.byId(asignatura.value?.RubricaGroupId)
    return $rubricas.rubricas.filter(r => r.RubricaGroupId === rubricaGroup?.id)
})
</script>