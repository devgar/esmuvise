<template>
    <div>
        <h4 v-for="al of alumnoStore.alumnos" :key="al.id">
            <div class="half">
                {{ al.lastName }}, {{ al.firstName }}
            </div>
            <div class="half">
                {{ matriculaStore.byAlumnoId(al.id)?.length }} Asignaturas
            </div>
        </h4>
    </div>
</template>

<script setup>
import { useAlumnoStore } from '~~/stores/alumnos'
import { useMatriculaStore } from '~~/stores/matriculas'
const alumnoStore = useAlumnoStore()
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