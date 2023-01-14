export const useEvaluationItemStore = defineStore('evaluationItem', {
    state: () => ({ evaluationItems: [] }),
    getters: {
        byKeys(store) {
            return (args) => store.evaluationItems.filter(equality(args))
        } 
    } ,
    actions: {
        async fetch() {
            const result = await $fetch('/api/evaluationItems')
            this.evaluationItems = result
        },
        async post(payload) {
            const data = await $fetch('/api/evaluationItems', {
                method: 'POST',
                body: payload
            })

            console.log({ data })
            if (data) await this.fetch()
            return data
        }
    }
})