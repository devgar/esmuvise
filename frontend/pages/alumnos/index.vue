<template>
    <div style="display: flex; height: 200px;">
        <VDataTable  v-model:items-per-page="itemsPerPage" :items="$alumnos.alumnos" :headers="headers" item-value="id" class="table" hide-default-footer fixed-header>
            <template v-slot:item.name="{ item }">
                <VBtn :to="`/alumno/${item.raw.id}`" variant="text" class="name-link">
                    {{ item.raw.firstName }} {{ item.raw.lastName }}
                </VBtn>
            </template>
            
            <template v-slot:item.percent="{ item }">
                <Ratio :alumno-id="item.raw.id" />
            </template>
            
            <template v-slot:item.subject="{ item }">
                <Matriculas :alumno-id="item.raw.id" />
            </template>
        </VDataTable>
    </div>
</template>

<script setup>
import { VDataTable } from 'vuetify/labs/VDataTable'
import { useAlumnoStore } from '~~/stores/alumnos'
import Matriculas from './_matriculas.vue'
import Ratio from './_ratio.vue'

const $alumnos = useAlumnoStore()

const headersStatic = [
    { title: 'Nom', align: 'start', sortable: true, key: 'name' },
    { title: '%', align: 'center', sortable: false, key: 'percent' },
    { title: 'Asignatures', align: 'start', sortable: false, key: 'subject' }
]

const itemsPerPage = computed(() => fullLoad.value ? -1 : 30)

const fullLoad = ref(false)

onMounted(() => {
    setTimeout(() => {
        fullLoad.value = true
    }, 0)
})

const headers = computed(() => fullLoad.value? headersStatic : [headersStatic[0]])
</script>

<style scoped>
.table {
    height: calc(100vh - 96px);
}
.name-link {
    display:flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>