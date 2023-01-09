export const useMatriculaStore = defineStore('matricula', {
    state: () => ({ matriculas: [] }),
    actions: {
        async fetch() {
            const result = await $fetch('/api/matriculas')
            this.matriculas = result
        }
    }
})