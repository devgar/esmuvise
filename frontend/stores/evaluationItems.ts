import type { EvaluationItem } from "~~/utils/types"

interface Args { AlumnoId?: number, AsignaturaId?: number, MatriculaId?: number, RubricaId?: number, EvaluationId?: number }

export const useEvaluationItemStore = defineStore('evaluationItem', () => {
    let lastCall =  Date.now() - 10000
    const evaluationItems = ref<EvaluationItem[]>([])

    const byKeys = computed(() => (args: Args) =>
        evaluationItems.value.filter(equality(args))
    )
    const byAlumnoId = computed(() => (AlumnoId: number) =>
        evaluationItems.value.filter(equality({ AlumnoId }))
    )

    async function fetch () {
        const now = Date.now()
        if ((lastCall + 5000) > now) return
        console.log('Fetching evaluation items because', lastCall, now)
        lastCall = now
        evaluationItems.value = await $fetch<EvaluationItem[]>('/api/evaluationItems')
    }

    async function post (payload: EvaluationItem) {
        const data = await $fetch('/api/evaluationItems', {
            method: 'POST',
            body: payload,
        })
        if (data) await fetch()
        return data
    }
    async function patch(payload: EvaluationItem) {
        const { id, ...body } = payload
        const data = await $fetch(`/api/evaluationItems/${id}`, {
            method: 'PATCH',
            body,
        })
        if (data) await fetch()
        return data
    }

    return { evaluationItems, byKeys, byAlumnoId, fetch, post, patch }
})