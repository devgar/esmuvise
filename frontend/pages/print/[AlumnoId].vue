<template>
    <div>
        <h5 class="mflex">Alumne<div class="mgrow"></div>Bulletí</h5>
        <h2>{{ alumno?.firstName }} {{ alumno?.lastName }}</h2>
        <h3>1ª Avaluació</h3>
        <h4>Asignatura</h4>
        <Asignatura 
            v-for="matricula in matriculas" key="matricula.id" 
            :matricula="matricula"
        />
    </div>
</template>

<script setup>
import { useAlumnoStore } from '~~/stores/alumnos'
import { useMatriculaStore } from '~~/stores/matriculas';
import Asignatura from './_asignatura.vue';

const $alumnos = useAlumnoStore()
const $matriculas = useMatriculaStore()
const route = useRoute()

const AlumnoId = computed(() => parseInt(route.params.AlumnoId))

const alumno = computed(() => $alumnos.byId(AlumnoId.value))

const matriculas = computed(() => $matriculas.byAlumnoId(AlumnoId.value))
</script>

<style>
.mflex {
    display: flex;
}
.mgrow {
    flex-grow: 1;
}
</style>