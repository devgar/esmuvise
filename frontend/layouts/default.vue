<template>
    <TheHeader />
    <NuxtPage />
</template>

// layouts/default.vue
<script setup lang="ts">
import { useAlumnoStore } from '~~/stores/alumnos'

const alumnoStore = useAlumnoStore()
alumnoStore.fetch()
</script>