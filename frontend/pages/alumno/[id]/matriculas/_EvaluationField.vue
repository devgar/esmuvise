<template>
    <div>
        <h4>{{ rubrica?.concept }}</h4>
        <form @submit="onSubmit">
            <select v-model="selected">
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
    { id: 'vFail', name: 'suspenso', value: 499 },
    { id: 'vLow', name: 'aprobado', value: 699 },
    { id: 'vMid', name: 'bien', value: 899 },
    { id: 'vHigh', name: 'sobresaliente', value: 1000 },
]

const selected = ref('')
const text = ref('')
const placeholder = ref('Selecciona una opció')

const $evaluationItems = useEvaluationItemStore()
$evaluationItems.fetch()
const evaluationItem = computed(()=> {
    const { matriculaId, rubricaId } = props
    return $evaluationItems.byKeys({ MatriculaId: matriculaId, RubricaId: rubricaId })[0]
})

watch(selected, () => {
    if(evaluationItem.value) return
    text.value = rubrica?.value[selected.value]
})

watch(evaluationItem, () => {
    selected.value = options.find(o => o.value >= evaluationItem.value.value)?.id
    text.value = evaluationItem.value.body
})

const onSubmit = async(event) => {
    event.preventDefault()
    if (!selected.value) return null
    if (!evaluationItem.value) {
        $evaluationItems.post({
            value: options.find(o => o.id === selected?.value).value,
            body: text.value,
            ...capitalizekeys(props)
        })
    }
    else {
        $evaluationItems.patch({
            id: evaluationItem.value.id,
            value: options.find(o => o.id === selected?.value).value,
            body: text.value,
        })
    }
}
</script>