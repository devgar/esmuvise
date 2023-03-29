<template>
    <v-expansion-panel v-if="rubrica">
        <v-expansion-panel-title v-slot="{ open }">
            <v-row no-gutters>
                <v-col cols="6" class="d-flex justify-start">
                    {{ rubrica?.concept }}
                </v-col>
                <v-col cols="6" class="text--secondary">
                    <v-fade-transition leave-absolute>
                        <span v-if="open">When do you want to travel?</span>
                        <v-row v-else no-gutters style="width: 100%">
                            <v-col cols="5" class="d-flex justify-start">
                                {{ evaluationItem && parseValueToDec(evaluationItem.value) || 'Not set' }}
                            </v-col>
                            <v-col cols="7" class="d-flex justify-start">
                                {{ evaluationItem && getOptionByValue(evaluationItem.value)?.name || 'Not set' }}
                            </v-col>
                        </v-row>
                    </v-fade-transition>
                </v-col>
            </v-row>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-row justify="space-between" no-gutters>
                <v-col cols="2">
                    <v-text-field type="number" v-model="value" label="Nota" step="0.1" max="10" min="0" :rules="[
                        v => !!v || 'Valor necessari',
                        v => 10 >= v || 'Maxim 10',
                        v => v >= 0 || 'El minim es 0',
                    ]" />
                </v-col>

                <v-col cols="6">
                    <v-select v-model="selected" :disabled="value !== ''" :items="options" item-title="name"
                        item-value="id" :rules="[v => !!v || 'Valor necessari']" label="Valoración" required />
                </v-col>

                <v-col cols="2">
                    <v-container justify="end">
                        <v-row justify="end">
                            <v-btn-toggle>
                                <!--<v-btn icon="mdi-undo" :disabled="!evaluationItem || !hasChanges" />-->
                                <v-btn icon="mdi-content-save" @click=submit class="ml-2" :disabled="!hasChanges" />
                            </v-btn-toggle>
                        </v-row>
                    </v-container>
                </v-col>
            </v-row>
            <v-row>
                <v-textarea v-model="text" auto-grow :placeholder="placeholder" />
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<script setup>
import { useRubricaStore } from '~~/stores/rubricas'
import { useEvaluationItemStore } from '~~/stores/evaluationItems'
import { useEvaluationStore } from '~~/stores/evaluation'

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

const value = ref('')
const selected = ref('')
const text = ref('')
const placeholder = ref('Selecciona una opció')

const $evaluation = useEvaluationStore()

const $evaluationItems = useEvaluationItemStore()
$evaluationItems.fetch()
const evaluationItem = computed(() => {
    const { matriculaId, rubricaId } = props
    return $evaluationItems.byKeys({ MatriculaId: matriculaId, RubricaId: rubricaId, EvaluationId: $evaluation.evaluation })[0]
})

const hasChanges = computed(() => {
    if (!value.value && !text.value && !selected.value) return false
    if (!evaluationItem.value) return true
    if (evaluationItem.value.value !== Math.floor(Number(value.value) * 100)) return true
    if (evaluationItem.value.body !== text.value) return true
    return false
})



const parseValueToDec = (v) => (v / 100).toFixed(1)
const parseValueToCen = (v) => Math.floor(Number(value.value) * 100)
// getOptionsByValue in base 1000
const getOptionByValue = (v) => options.find(o => o.value >= v)

watch(value, () => {
    let mult = parseFloat(value.value)
    mult *= 100
    selected.value = options.find(o => o.value >= mult)?.id
})

watch(selected, () => {
    text.value = rubrica?.value[selected.value]
})

watch(evaluationItem, () => {
    value.value = (evaluationItem.value.value / 100).toFixed(1)
    selected.value = options.find(o => o.value >= evaluationItem.value.value)?.id
    text.value = evaluationItem.value.body
})

const submit = async () => {
    if (!value.value) return null
    if (!selected.value) return null
    const valueNum = Math.floor(Number(value.value) * 100)
    if (!evaluationItem.value) {
        $evaluationItems.post({
            value: valueNum,
            body: text.value,
            ...capitalizekeys(props),
            EvaluationId: $evaluation.evaluation
        })
    }
    else {
        $evaluationItems.patch({
            id: evaluationItem.value.id,
            value: valueNum,
            body: text.value,
        })
    }
}
</script>