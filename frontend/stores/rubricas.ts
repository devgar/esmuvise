import type { Rubrica } from '~~/utils/types'

export const useRubricaStore = defineStore('rubrica', () => {
    let lastCall = Date.now() - 10000
    
    const rubricas = ref<Rubrica[]>([]);

    async function fetch() {
        const now = Date.now()
        if ((lastCall + 5000) > now) return null
        lastCall = now
        rubricas.value = await $fetch<Rubrica[]>('/api/rubricas')
    }

    return { rubricas, fetch }
})