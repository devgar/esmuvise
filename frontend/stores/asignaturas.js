export const useAsignaturaStore = defineStore('asignatura', {
    state: () => ({ asignaturas: [] }),
    actions: {
        async fetch() {
            const result = await $fetch('/api/asignaturas')
            this.asignaturas = result
        }
    }
})