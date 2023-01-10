export const useRubricaGroupStore = defineStore('rubricaGroup', {
    state: () => ({ rubricaGroups: [] }),
    actions: {
        async fetch() {
            const result = await $fetch('/api/rubricaGroups')
            this.rubricaGroups = result
        }
    }
})