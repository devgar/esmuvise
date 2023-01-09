export const useMatriculaStore = defineStore('matricula', {
    state: () => ({ matriculas: [] }),
    getters: {
        byAlumnoId(state) {
            return (alumnoId) => state.matriculas.filter((mat) => mat.AlumnoId === alumnoId)
        },
        byAsignaturaId(state) {
            return (asignaturaId) => state.matriculas.filter((mat) => mat.AsignaturaId === asignaturaId)
        }
    },
    actions: {
        async fetch() {
            const result = await $fetch('/api/matriculas')
            this.matriculas = result
        }
    }
})