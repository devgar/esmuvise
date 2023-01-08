<template>
    <NuxtLink 
        :class="{ active: !go }" 
        :to="go"
    >{{ label }}</NuxtLink>
</template>

<script lang="ts" setup>
const route = useRoute()

const props = defineProps({
    to: String,
    label: String,
})

const go = computed(() => props.to === route.fullPath ? '' : props.to)
const handler = () => props.to === route.fullPath && console.log('END')
</script>

<style scoped>
a {
    display: block;
    position: relative;
    padding: 0.1rem 0.1rem 0;
    max-width: 8rem;
    text-decoration: none;
    background: #EEE;
    color: #333;
    border-bottom: 0.1rem solid #EEE;
    transition: 0.1s;
    top: 0;
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    overflow: hidden;
    white-space: nowrap;
}

a:hover {
    background: #DDD;
    border-bottom-color: #DDD;
}

a:focus {
    outline: none;
    border-bottom-color: #333;
    color: #000;
}

a:hover, a:focus{
    transition: 0.3s;
}
a.active{
    transition: 0.5s;
    background-color: #FFF;
    border-bottom-color: #333;
    top: 0.1rem;
    box-shadow: 0 0 1px #000;
    cursor: default;
}
</style>