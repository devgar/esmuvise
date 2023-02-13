import type { Asignatura } from "~~/utils/types"

export const useAsignaturaStore = defineStore('asignatura', () => {
    const asignaturas = ref<Asignatura[]>([])

    const byId = computed(() => (id: number) => asignaturas.value.find(a => a.id === id))

    async function fetch() {
        asignaturas.value = await $fetch<Asignatura[]>('/api/asignaturas')
    }
    return { asignaturas, byId, fetch}
})