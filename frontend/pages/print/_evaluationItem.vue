<template>
    <tr class="printable__evaluationItem">
        <td>
            <v-icon :icon="icon" size="x-small"></v-icon>
        </td>
        <td class="printable__evaluationItemConceptCell">
            <b class="printable__evaluationItemConcept--low">{{ props.concept }}</b> {{ evaluationItem?.body }}
        </td>
    </tr>
</template>

<script lang="ts" setup>
import { useEvaluationItemStore } from '~~/stores/evaluationItems';

const props = defineProps<{ MatriculaId?: number, RubricaId?: number, concept?: string }>()

const $evaluationItems = useEvaluationItemStore()
const evaluationItem = computed(() => {
    const { RubricaId, MatriculaId } = props
    return $evaluationItems.byKeys({ RubricaId, MatriculaId }).at(0)
})

const icon = computed(() => {
    const value = evaluationItem.value?.value || 0
    if (value < 500) return 'mdi-timer-sand'
    if( value < 700) return 'mdi-check-bold'
    return 'mdi-star'
})

</script>

<style scoped>
.printable__evaluationItem {
    display: block;
    padding: 0 0 0.4rem;
}
.printable__evaluationItem td {
    vertical-align: text-top;
}
.printable__evaluationItemConcept--low {
    font-size: 80%;
    text-decoration: underline;
    padding: 0 0.4rem;
}

.printable__evaluationItemConceptCell {
    padding: 0 0.6rem;
}
</style>