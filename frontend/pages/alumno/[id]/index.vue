<template>
    <h2 v-if="!alumno">...</h2>
    <div v-else>
        <h2>{{ alumno.lastName }}, {{ alumno.firstName }}</h2>
    </div>
</template>

<script setup>
import { useAlumnoStore } from '~~/stores/alumnos';
const route = useRoute()
const alumnoId = parseInt(route.params.id)
const alumnoStore = useAlumnoStore()
const alumno = computed(() => alumnoStore.alumnos.find(al => al.id === alumnoId))
</script>