import type { Matricula } from "~~/utils/types"

export const useMatriculaStore = defineStore('matricula', () => {
    let lastCall = Date.now() - 10000
    const matriculas = ref<Matricula[]>([])

    const byAlumnoId = computed(() => (AlumnoId: number) => 
        matriculas.value.filter(equality({ AlumnoId }))
    )

    const byAsignaturaId = computed(() => (AsignaturaId: number) =>
        matriculas.value.filter(equality({ AsignaturaId }))
    )

    async function fetch() {
        const now = Date.now()
        if ((lastCall + 5000) > now) return
        lastCall = now
        matriculas.value = await $fetch<Matricula[]>('/api/matriculas')
    }

    async function fetchFull() {
        matriculas.value = await $fetch<Matricula[]>('/api/matriculas?full')
    }

    return { matriculas, byAlumnoId, byAsignaturaId, fetch, fetchFull }
})