export const useRubricaStore = defineStore('rubrica', {
    state: () => ({ rubricas: [] }),
    actions: {
        async fetch() {
            const result = await $fetch('/api/rubricas')
            this.rubricas = result
        }
    }
})