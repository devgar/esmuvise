<template>
    <div>
        <div>{{ evaluationItem || 'Pendant' }}</div>
        <h4>{{ rubrica?.concept }}</h4>
        <form @submit="onSubmit">
            <select v-model="selection">
                <option v-for="option in options" :value="option.id">
                    {{ option.name }}
                </option>
            </select><br />
            <textarea v-model="text" :placeholder="placeholder"></textarea> <br />
            <input type="submit" />
            
        </form>
    </div>
</template>

<script setup>
import { useRubricaStore } from '~~/stores/rubricas'
import { useEvaluationItemStore } from '~~/stores/evaluationItems'

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

const $evaluationItems = useEvaluationItemStore()
$evaluationItems.fetch()
const evaluationItem = computed(()=> {
    const { matriculaId, rubricaId } = props
    console.log("In store using:", { matriculaId, rubricaId })
    return $evaluationItems.byKeys({ MatriculaId: matriculaId, RubricaId: rubricaId })[0]
})

const onSubmit = async(event) => {
    event.preventDefault()
    if (!selection.value) return
    $evaluationItems.post({
        value: 9, // TODO: unharcode this
        body: text.value,
       ...capitalizekeys(props)
    })
}
</script>