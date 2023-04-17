<template>
    <tr class="printable__evaluationItem">
        <td width="50%" class="printable__evaluationItemConceptCell">
            <u>{{ props.concept }}:</u>
                <i v-if="$equivalence.textMode">{{ $equivalence.repr(evaluationItem?.value || 0) }}</i> 
        </td>
        <td class="printable__evaluationItemConceptCell">
            <b v-if="$equivalence.textMode">{{ $equivalence.repr(evaluationItemOld?.value || 0) }}</b>
        </td>
    </tr>
    <tr>
        <td>
            <div style="font-size: 90%">{{ evaluationItem?.body }}</div>
        </td>
    </tr>
</template>

<script lang="ts" setup>
import { useEvaluationItemStore } from '~~/stores/evaluationItems';
import { useEquivalenceStore } from '~~/stores/equivalences';
import { useEvaluationStore } from '~~/stores/evaluation';

const $equivalence = useEquivalenceStore()

const props = defineProps<{ MatriculaId?: number, RubricaId?: number, concept?: string }>()

const $evaluation = useEvaluationStore()

const $evaluationItems = useEvaluationItemStore()
const evaluationItem = computed(() => {
    const { RubricaId, MatriculaId } = props
    return $evaluationItems.byKeys({ RubricaId, MatriculaId, EvaluationId: $evaluation.id.value }).at(0)
})

const evaluationItemOld = computed(() => {
    const { RubricaId, MatriculaId } = props
    return $evaluationItems.byKeys({ RubricaId, MatriculaId, EvaluationId: 1 }).at(0)
})

</script>

<style scoped>
.printable__evaluationItem {
    display: block;
    padding: 0 0 0.4rem;
    width: 100%;
}
.printable__evaluationItem td {
    vertical-align: text-top;
    width: 50vw;
}

.printable__evaluationItemConceptCell {
    padding: 0 0.6rem;
}

.printable__evaluationItemConceptCell i {
    padding: 0 0.4rem; margin-right: 4rem;
    text-decoration: none;
}
</style>