<template>
    <div>
        <h4 v-for="al of asignaturaStore.asignaturas" :key="al.id">{{ al.nameVLC }}, {{ al.firstName }}</h4>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAsignaturaStore } from '~~/stores/asignaturas'
const asignaturaStore = useAsignaturaStore()

onMounted(() => {
    asignaturaStore.fetch()
})
</script>

<style scoped>
div {
    padding: 0.8rem 0;
}
h4 {
    margin: 0.4rem 0;
}
</style>