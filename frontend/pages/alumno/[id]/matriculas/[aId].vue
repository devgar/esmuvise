<template>
    <div>
        <div v-if="!rubricaGroup">
            <h3>Evaluar {{ matricula?.Asignatura.nameVLC }}</h3>
            <p>No evaluable</p>
        </div>
        <div v-else>
            <h3>Evaluar {{ matricula?.Asignatura.nameVLC }}</h3>
            <div class="evaluaciones">
                <EvaluationField 
                    :alumno-id="matricula?.AlumnoId"
                    :asignatura-id="matricula?.AsignaturaId"
                    :matricula-id="matricula?.id"
                    :rubrica-id="1"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { useMatriculaStore } from '~~/stores/matriculas'
import { useRubricaGroupStore } from '~~/stores/rubricaGroups'
import { useEvaluationItemStore } from '~~/stores/evaluationItems'

import EvaluationField from './_EvaluationField'

const route = useRoute()

const matriculaId = parseInt(route.params.aId)

const $matriculas = useMatriculaStore()
const matricula = computed(() => $matriculas.matriculas.find(m => m.id === matriculaId))

const $rubricaGroups = useRubricaGroupStore()
const rubricaGroup = computed(() => $rubricaGroups.byId(matricula?.value?.Asignatura?.RubricaGroupId))

const $evaluationItems = useEvaluationItemStore()

</script>