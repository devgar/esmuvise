export const useEvaluationItemStore = defineStore('evaluationItem', {
    state: () => ({ evaluationItems: [] }),
    actions: {
        async fetch() {
            const result = await $fetch('/api/evaluationItems')
            this.evaluationItems = result
        }
    }
})