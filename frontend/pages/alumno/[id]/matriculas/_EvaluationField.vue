<template>
    <div>
        <div>{{ props.asignaturaId }}</div>
        <h4>{{ rubrica.concept }}</h4>
        <form @submit="onSubmit">
            <select v-model="selection">
                <option v-for="option in options" :value="option.id">
                    {{ option.name }}
                </option>
            </select><br />
            <textarea v-model="text" :placeholder="placeholder"></textarea>
        </form>
    </div>
</template>

<script setup>
import { useRubricaStore } from '~~/stores/rubricas'

const props = defineProps({
    alumnoId: Number,
    asignaturaId: Number,
    matriculaId: Number,
    rubricaId: Number,
})

const $rubricas = useRubricaStore()
const rubrica = computed(() => $rubricas.rubricas.find(r => r.id === props.rubricaId))

const options = [
    { id: 'vFail', name: 'suspenso' },
    { id: 'vLow', name: 'aprobado' },
    { id: 'vMid', name: 'bien' },
    { id: 'vHigh', name: 'sobresaliente'},
]

const selection = ref('')
const text = ref('')
const placeholder = ref('Selecciona una opció')

watch(selection, () => {
    text.value = rubrica?.value[selection.value]
})

const onSubmit = async(event) => {
    event.preventDefault()
}
</script>