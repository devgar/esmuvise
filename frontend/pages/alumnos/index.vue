<template>
    <div class="alumnos-list">
        <h4 v-for="al of alumnoStore.alumnos" :key="al.id">
            <div class="half">
                <NuxtLink :to="`/alumno/${al.id}`">
                    {{ al.lastName }}, {{ al.firstName }}
                </NuxtLink>
            </div>
            <div class="half">
                <Matriculas :alumno-id="al.id" />
            </div>
        </h4>
    </div>
</template>

<script setup>
import { useAlumnoStore } from '~~/stores/alumnos'
import Matriculas from './_matriculas.vue'

const alumnoStore = useAlumnoStore()
</script>

<style scoped>
.alumnos-list {
    padding: 0.8rem 0;
}

h4 {
    margin: 0.4rem 0;
    display: flex;
}

h4:nth-child(2n) {
    background: #f5e5e0;
}
h4 div.half {
    padding: 0;
    width:50%;
    display: inline-block;
    flex-grow: 1;
}
</style>