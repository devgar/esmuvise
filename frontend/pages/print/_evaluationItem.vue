<template>
    <tr class="printable__evaluationItem">
        <td v-if="!$equivalence.textMode">
            <v-icon :icon="$equivalence.repr(evaluationItem?.value || 0)" size="x-small"></v-icon>
        </td>
        <td class="printable__evaluationItemConceptCell">
            <b class="printable__evaluationItemConcept--low">{{ props.concept }}</b> 
            <i v-if="$equivalence.textMode">{{ $equivalence.repr(evaluationItem?.value || 0) }}</i>
            {{ evaluationItem?.body }}
        </td>
    </tr>
</template>

<script lang="ts" setup>
import { useEvaluationItemStore } from '~~/stores/evaluationItems';
import { useEquivalenceStore } from '~~/stores/equivalences';

const $equivalence = useEquivalenceStore()

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

.printable__evaluationItemConceptCell i {
    display: inline-block; padding: 0 0.4rem;
    text-decoration: none;
}
</style>