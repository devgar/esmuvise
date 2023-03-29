export const useEvaluationStore = defineStore('evaluation', () => {
    const evaluation = ref(2);
    const toggle = () => evaluation.value = (evaluation.value === 2) ? 1 : 2;
    const id = computed(() => evaluation)
    return { evaluation, toggle, id }
}) 