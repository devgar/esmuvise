<template>
    <div v-if="asignaturas.length == 0">Sin matricular</div>
    <div v-else class="asignaturas">
        <v-btn v-for="{ id, Asignatura } in asignaturas" :key="id"
            v-text="Asignatura?.nameVLC" router nuxt-link
            :to="`/alumno/${props.alumnoId}/matriculas/${id}`"
            size="x-small" variant="outlined"
        />
    </div>
</template>

<script setup>
import { useMatriculaStore } from '~~/stores/matriculas'

const props = defineProps({ alumnoId: Number })
const $matriculas = useMatriculaStore()
const errorMsg = computed(() => props.alumnoId ? '' : 'Error')

const asignaturas = computed(() => $matriculas.byAlumnoId(props.alumnoId))
</script>
