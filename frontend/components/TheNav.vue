<template>
    <nav>
        <button @click="addLink">Add</button>
        <button @click="popLink">Pop</button>
        <ul>
            <li v-for="{to, label} of navStore.links" :key="to" >
                <NavLink :to="to" :label="label" />
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import NavLink from './_NavLink.vue'
import { useNavStore } from '~~/stores/nav';

const navStore = useNavStore()
let count = 0

const addLink = () => {
    navStore.add({ to:`/alumno/${++count}`, label: `alumno #${count}` })
}
const popLink = () => {
    navStore.pop()
}
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