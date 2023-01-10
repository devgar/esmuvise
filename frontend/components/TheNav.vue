<template>
    <nav>
        <!-- <a @click="addLink">Add</a><a @click="popLink">Pop</a> -->
        <ul>
            <li v-for="{to, label} of navStore.links" :key="to" >
                <NavLink :to="to" :label="label" />
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import NavLink from './_NavLink.vue'
import { useNavStore } from '~~/stores/nav'

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
nav {
    display: flex;
}
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