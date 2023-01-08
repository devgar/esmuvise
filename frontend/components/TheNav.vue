<template>
    <nav>
        <ul>
            <li v-for="{to, label} of items" :key="to" >
                <NavLink :to="to" :label="label" />
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import NavLink from './_NavLink.vue'

const items = [
    { to: "/alumnos", label: "Alumnos" },
    { to: "/asignaturas", label: "Asignaturas" },
    { to: "/alumno/1", label: "Edgar Albalate Ibáñez" },
]
</script>

<style scoped>
ul {
    margin: 0; 
    padding: 0 0 0.1rem;
    display: flex;
    list-style-type: none;
    position: relative;
}

ul li {
    margin: 0 0.2rem;
}
</style>