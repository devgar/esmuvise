<template>
    <h1>Printable {{ AlumnoId }}</h1>
</template>

<script setup>
const route = useRoute()
const AlumnoId = computed(() => 
    route.params.AlumnoId
)
</script>