<template>
    <div>
        <h1>{{ asignatura?.nameVLC }}</h1>
        <form @submit="onSubmit">
            <label>
                {{ "Criteris d'evaluació" }}
                <select v-model="selected">
                    <option v-for="option in options" :value="option.id">
                        {{ option.name }}
                    </option>
                </select>
                <input type="submit" />
            </label>
        </form>
    </div>
</template>

<script setup>
import { useAsignaturaStore } from '~~/stores/asignaturas'
import { useRubricaGroupStore } from '~~/stores/rubricaGroups'
import { storeToRefs } from 'pinia'

const route = useRoute()

const asignaturaId = computed(() => parseInt(route.params.id))

const $asignaturas = useAsignaturaStore()
const asignatura = computed(
    () => $asignaturas.asignaturas.find(({ id }) => id === asignaturaId.value)
)
const selected = ref(asignatura?.value?.RubricaGroupId)

watch(asignatura, () => {
    selected.value = asignatura?.value?.RubricaGroupId
})
    
const $rubricaGroups = useRubricaGroupStore()
const { rubricaGroups: options } = storeToRefs($rubricaGroups)

const onSubmit = async (event) => {
    event.preventDefault()
    await $fetch(`/api/asignaturas/${asignaturaId.value}/RubricaGroup`, { 
        method: 'POST',
        body: { RubricaGroupId: selected.value },
    })
    return $asignaturas.fetch()
}
</script>