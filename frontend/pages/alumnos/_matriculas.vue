<template>
    <div v-if="errorMsg">{{  errorMsg }}</div>
    <div v-else-if="asignaturas.length == 0">Sin matricular</div>
    <div v-else class="asignaturas">
        <div class="asignatura" v-for="{ id, Asignatura} in asignaturas" :key="id">
            <NuxtLink :to="`/alumno/${props.alumnoId}/matriculas/${id}`">{{Asignatura.nameVLC}}</NuxtLink>
        </div>
    </div>
</template>

<script setup>
import { useMatriculaStore } from '~~/stores/matriculas'

const props = defineProps({ alumnoId: Number })
const $matriculas = useMatriculaStore()
const errorMsg = computed(() => props.alumnoId ? '' : 'Error')

const asignaturas = computed(() => $matriculas.byAlumnoId(props.alumnoId))
</script>

<style scoped>
div.asignaturas {
    display: flex;
}
.asignatura {
    margin: 0 0.2rem; padding: 0 0.2rem; background: #EEE;
}
</style>