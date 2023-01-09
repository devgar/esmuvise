<template>
    <TheHeader />
    <NuxtPage />
</template>

// layouts/default.vue
<script setup lang="ts">
import { useAlumnoStore } from '~~/stores/alumnos'
import { useMatriculaStore } from '~~/stores/matriculas'
import { useAsignaturaStore } from '~~/stores/asignaturas'

useAlumnoStore().fetch()
useMatriculaStore().fetch()
useAsignaturaStore().fetch()
</script>