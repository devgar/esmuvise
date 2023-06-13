<template>
    <template v-if="asignaturas.length == 0">Sin matricular</template>
    <template v-else class="asignaturas">
        <v-btn v-for="{ id, nameVLC, curso } in asignaturas" :key="id"
            v-text="`${nameVLC} · ${curso}`" router nuxt-link
            :to="`/alumno/${alumnoId}/matriculas/${id}`"
            size="x-small" variant="outlined"
        />
    </template>
</template>

<script lang='ts' setup>
const { alumnoId } = defineProps({ alumnoId: Number })
const $matriculas = useMatriculaStore()
const $asignaturas = useAsignaturaStore()
const asignaturas = computed(() => {
    if (!alumnoId) return []
    return $matriculas.byAlumnoId(alumnoId)
        .map(({ id, AsignaturaId, curso }) => ({ id, AsignaturaId, curso, nameVLC: $asignaturas.byId(AsignaturaId)?.nameVLC}))
})
</script>
