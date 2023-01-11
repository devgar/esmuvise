<template>
    <div>
        <h2 v-if="!alumno">...</h2>
        <div v-else>
            <h2>{{ alumno.lastName }}, {{ alumno.firstName }}</h2>
            <pre v-if="route.name === 'alumno-id'">{{ alumno }}</pre>
            <div v-else><RouterLink :to="`/alumno/${alumnoId}`">[...]</RouterLink></div>
            <ul>
                <li v-for="{id, Asignatura} of asignaturas" :key="id">
                    <RouterLink :to="`/alumno/${alumnoId}/matriculas/${id}`" >{{ Asignatura.nameVLC }}</RouterLink>
                </li>
            </ul>
            <NuxtPage :foobar="123" />
        </div>
    </div>
</template>

<script setup>
import { useAlumnoStore } from '~~/stores/alumnos'
import { useMatriculaStore } from '~~/stores/matriculas'

const route = useRoute()

const alumnoId = parseInt(route.params.id)
const alumnoStore = useAlumnoStore()
const alumno = computed(() => alumnoStore.alumnos.find(al => al.id === alumnoId))

const $matriculas = useMatriculaStore()
const asignaturas = computed(() => $matriculas.byAlumnoId(alumnoId))
</script>