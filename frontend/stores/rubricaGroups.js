export const useRubricaGroupStore = defineStore('rubricaGroup', {
    state: () => ({ rubricaGroups: [] }),
    getters: {
        byId(state) {
            return (id) => state.rubricaGroups.find((rg) => rg.id === id)
        }
    },
    actions: {
        async fetch() {
            const result = await $fetch('/api/rubricaGroups?full')
            this.rubricaGroups = result
        }
    }
})