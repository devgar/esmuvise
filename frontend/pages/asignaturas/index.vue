<template>
    <div>
        <h4 v-for="ag of asignaturaStore.asignaturas" :key="ag.id">
            <div class="half">{{ ag.nameVLC }}</div>
            <div class="half">
                {{ matriculaStore.byAsignaturaId(ag.id)?.length }} alumnos
            </div>
        </h4>
    </div>
</template>

<script setup>
import { useAsignaturaStore } from '~~/stores/asignaturas'
import { useMatriculaStore } from '~~/stores/matriculas'
const asignaturaStore = useAsignaturaStore()
const matriculaStore = useMatriculaStore()
</script>

<style scoped>
div {
    padding: 0.8rem 0;
}
h4 {
    margin: 0.4rem 0;
}
h4 div {
    padding: 0;
    width:50%;
    display: inline-block;
}
</style>