import type { Matricula } from "~~/utils/types"

export const useMatriculaStore = defineStore('matricula', () => {
    const matriculas = ref<Matricula[]>([])

    const byAlumnoId = computed(() => (AlumnoId: number) => 
        matriculas.value.filter(equality({ AlumnoId }))
    )

    const byAsignaturaId = computed(() => (AsignaturaId: number) =>
        matriculas.value.filter(equality({ AsignaturaId }))
    )

    async function fetch() {
        matriculas.value = await $fetch<Matricula[]>('/api/matriculas')
    }

    async function fetchFull() {
        matriculas.value = await $fetch<Matricula[]>('/api/matriculas?full')
    }

    return { matriculas, byAlumnoId, byAsignaturaId, fetch, fetchFull }
})