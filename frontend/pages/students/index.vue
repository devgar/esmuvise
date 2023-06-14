<template>
    <VTable density="compact" hover>
        <thead>
            <tr>
                <th>Alumno</th>
                <th class="text-center">%</th>
                <th>Matriculas</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item of alumnos" :key="item.id">
                <td><VBtn class="px-0" router nuxt-link 
                    :to="`/alumno/${item.id}`" variant="text">
                        {{ item.lastName }}, <b>{{ item.firstName }}</b>
                    </VBtn>
                </td>
                <td class="text-center"><Ratio :alumno-id="item.id" /></td>
                <td><Matriculas :alumno-id="item.id" /></td>
            </tr>
        </tbody>
    </VTable>
    <VInfiniteScroll rel="infinite" @load="load">
        <template v-slot:empty>
            <i>Mostrando {{ $alumnos.alumnos.length }} resultados</i>
        </template>
    </VInfiniteScroll>
</template>

<script lang="ts" setup>
import { VInfiniteScroll } from 'vuetify/labs/VInfiniteScroll'
import Matriculas from '../alumnos/_matriculas.vue'
import Ratio from '../alumnos/_ratio.vue'

const $alumnos = useAlumnoStore()
const sliceMax = ref(20)
const alumnos = computed(() => $alumnos.alumnos.slice(0, sliceMax.value))

type InfiniteScrollStatus = 'ok' | 'empty' | 'loading' | 'error'
type LoadCallback = (options: { done: (status: InfiniteScrollStatus) => void; }) => any

const load: LoadCallback = ({ done }) => {
    if(sliceMax.value > $alumnos.alumnos.length)
        return done('empty')
    sliceMax.value += sliceMax.value + 20;
    done('ok')
}
</script>

<style scoped>
tr td:first-child a {
    display: flex;
    justify-content: flex-start;
}
tr td:last-child {
    overflow-wrap: unset;
    white-space: nowrap;
    width: 100%;
}
</style>