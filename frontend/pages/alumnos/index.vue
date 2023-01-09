<template>
    <div>
        <h4 v-for="al of alumnoStore.alumnos" :key="al.id">{{ al.lastName }}, {{ al.firstName }}</h4>
    </div>
</template>

<script setup>
import { useAlumnoStore } from '~~/stores/alumnos'
const alumnoStore = useAlumnoStore()
</script>

<style scoped>
div {
    padding: 0.8rem 0;
}
h4 {
    margin: 0.4rem 0;
}
</style>