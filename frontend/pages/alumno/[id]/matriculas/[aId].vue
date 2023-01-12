<template>
    <div>
        <h3>Evaluar {{ matricula?.Asignatura.nameVLC }}</h3>
        <pre>{{ matricula }}</pre>
    </div>
</template>

<script setup>
import { useMatriculaStore } from '~~/stores/matriculas'
import { useRubricaGroupStore } from '~~/stores/rubricaGroups';

const route = useRoute()

const matriculaId = parseInt(route.params.aId)

const $matriculas = useMatriculaStore()
const matricula = computed(() => $matriculas.matriculas.find(m => m.id === matriculaId))

const $rubricaGroups = useRubricaGroupStore()
// WIP: waiting for $rubricaGroups.byAsignaturaId and PUT endpoints 
</script>