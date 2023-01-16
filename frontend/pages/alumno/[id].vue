<template>
    <v-card v-if="alumno" class="mx-2 my-4" max-width="800" prepend-icon="mdi-account"
        :title="`${alumno.lastName} ${alumno.firstName}`">
        <template v-slot:prepend>
            <v-icon size="x-large"></v-icon>
        </template>

        <template v-slot:append>
            <v-btn v-if="route.name !== 'alumno-id'" :to="`/alumno/${alumnoId}`" variant="outlined" icon>
                <v-icon size="x-large">mdi-format-list-bulleted-square</v-icon>
            </v-btn>
        </template>

        <v-list class="bg-transparent" v-if="route.name === 'alumno-id'">
            <v-list-item title="Telefon" prepend-icon="mdi-phone" :subtitle="alumno.telephone" />
            <v-list-item title="Direccio" prepend-icon="mdi-map" :subtitle="alumno.domicilio" />
            <v-list-item :subtitle="`${ alumno.codPostal } · ${ alumno.localidad }`" />
        </v-list>
    </v-card>

    <v-card v-if="asignaturas.length" class="mx-2 my-4" max-width="800">
        <v-list class="bg-transparent">
            <v-list-item v-for="matricula of asignaturas" :key="matricula.id" 
                :title="matricula.Asignatura.nameVLC" 
                :subtitle="`${matricula.curso} - ${matricula.curso}/${matricula.curso+1}`"
                :to="`/alumno/${alumnoId}/matriculas/${matricula.id}`"
            />
        </v-list>
    </v-card>

    <NuxtPage :foobar="123" />
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