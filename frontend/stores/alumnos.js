export const useAlumnoStore = defineStore('alumno', {
    state: () => ({ alumnos: [] }),
    actions: {
        async fetch() {
            const result = await $fetch('/api/alumnos')
            this.alumnos = result
        }
    }
})