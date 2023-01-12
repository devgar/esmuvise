<template>
    <TheHeader />
    <NuxtPage />
</template>

// layouts/default.vue
<script setup lang="ts">
import { useAlumnoStore } from '~~/stores/alumnos'
import { useMatriculaStore } from '~~/stores/matriculas'
import { useAsignaturaStore } from '~~/stores/asignaturas'
import { useRubricaGroupStore } from '~~/stores/rubricaGroups'
import { useRubricaStore } from '~~/stores/rubricas'

useAlumnoStore().fetch()
useMatriculaStore().fetchFull()
useAsignaturaStore().fetch()
useRubricaGroupStore().fetch()
useRubricaStore().fetch()
</script>