<template>
    <h1>{{ evaluationItem && evaluationItem.at(0)?.value }}</h1>
</template>

<script lang="ts" setup>
import { useEvaluationItemStore } from '~~/stores/evaluationItems';

const props = defineProps<{ MatriculaId?: number, RubricaId?: number }>()

const $evaluationItems = useEvaluationItemStore()
const evaluationItem = computed(() => {
    const { RubricaId, MatriculaId } = props
    return $evaluationItems.byKeys({ RubricaId, MatriculaId })
})

</script>