import type { Equivalence } from "~~/utils/types"
import { useAlumnoStore } from "./alumnos"

export const useEquivalenceStore = defineStore('equivalence', () => {
    const equivalences = ref<Equivalence[]>([])




    async function fetch () {
        equivalences.value = (await $fetch<Equivalence[]>('/api/equivalences'))
            .sort((a, b) => a.max - b.max)
    }
    return { equivalences, fetch }
}) 