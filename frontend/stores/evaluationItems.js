export const useEvaluationItemStore = defineStore('evaluationItem', {
    state: () => ({ evaluationItems: [] }),
    getters: {
        byKeys(store) {
            return (args) => store.evaluationItems.filter(equality(args))
        },
        byAlumnoId(store) {
            return (AlumnoId) => store.evaluationItems.filter(ei => ei.AlumnoId === AlumnoId)
        }
    },
    actions: {
        async fetch() {
            const result = await $fetch('/api/evaluationItems')
            this.evaluationItems = result
        },
        async post(payload) {
            const data = await $fetch('/api/evaluationItems', {
                method: 'POST',
                body: payload,
            })
            if (data) await this.fetch()
            return data
        },
        async patch(payload) {
            const { id, ...body } = payload
            const data = await $fetch(`/api/evaluationItems/${id}`, {
                method: 'PATCH',
                body,
            })
            if (data) await this.fetch()
            return data
        },
    },
})