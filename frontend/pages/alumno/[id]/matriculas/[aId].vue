<template>
    <div>
        <v-card v-if="!matricula">
            <v-card-title>No se encuentra la matricula</v-card-title>
            <v-card-subtitle>No evaluable</v-card-subtitle>
        </v-card>
        <v-card v-else-if="!rubricaGroup" class="mx-2 my-4" max-width="300">
            <v-card-title>{{ matricula?.Asignatura?.nameVLC }}</v-card-title>
            <v-card-subtitle>No evaluable</v-card-subtitle>
        </v-card>
        <v-card v-else class="mx-2 my-4" max-width="800">
            <v-expansion-panels variant="accordion">
                <EvaluationField v-for="rubrica of rubricaGroup.Rubricas" :key="rubrica.id"
                    :alumno-id="matricula?.AlumnoId" :asignatura-id="matricula?.AsignaturaId"
                    :matricula-id="matricula?.id" :rubrica-id="rubrica.id" />
            </v-expansion-panels>
        </v-card>
    </div>
</template>

<script setup>
import { useMatriculaStore } from '~~/stores/matriculas'
import { useRubricaGroupStore } from '~~/stores/rubricaGroups'

import EvaluationField from './_EvaluationField'

const route = useRoute()

const matriculaId = parseInt(route.params.aId)

const $matriculas = useMatriculaStore()
const matricula = computed(() => $matriculas.matriculas.find(m => m.id === matriculaId))

const $rubricaGroups = useRubricaGroupStore()
const rubricaGroup = computed(() => $rubricaGroups.byId(matricula?.value?.Asignatura?.RubricaGroupId))


</script>