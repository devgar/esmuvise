<template>
    <v-table class="h-auto" density="compact" fixed-header height="calc(100vh - 64px)" hover>
        <thead>
            <tr>
                <th class="text-left">
                    Nom
                </th>
                <th class="text-left">
                    Asignatures
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in $alumnos.alumnos" :key="item.id" @click="goTo">
                <td class="v-col-2">
                    <v-btn class="text-left" block :to="`/alumno/${item.id}`" variant="text">{{ item.lastName }}, <b>{{ item.firstName }}</b></v-btn>
                </td>
                <td class="v-col-auto">
                    <Matriculas :alumno-id="item.id" />
                </td>
            </tr>
        </tbody>
    </v-table>
</template>

<script setup>
import { useAlumnoStore } from '~~/stores/alumnos'
import Matriculas from './_matriculas.vue'

const router = useRouter()

const goTo = (event) => 
    console.log(event)
    // router.push(`/alumno/${id}`)

const $alumnos = useAlumnoStore()
</script>

<style scoped>
</style>