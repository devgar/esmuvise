<template>
    <div>
        <h4 v-for="ag of usedAsignaturas" :key="ag.id">
           <NuxtLink :to="`/asignatura/${ag.id}`">
            <div class="half">{{ ag.nameVLC }}</div>
            <div class="half">
                {{ $matriculas.byAsignaturaId(ag.id)?.length }} alumnos
            </div>
           </NuxtLink>
        </h4>
    </div>
</template>

<script setup>
import { useAsignaturaStore } from '~~/stores/asignaturas'
import { useMatriculaStore } from '~~/stores/matriculas'

const $asignaturas = useAsignaturaStore()
const $matriculas = useMatriculaStore()

const usedAsignaturasIds = computed(
    () => Array.from(new Set(
        $matriculas.matriculas.map(m => m.AsignaturaId)
    ))
)

const  usedAsignaturas = computed(
    () => $asignaturas.asignaturas.filter(
        ({ id }) => usedAsignaturasIds.value.includes(id)
    )
)
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