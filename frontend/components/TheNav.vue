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
