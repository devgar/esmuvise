import type { RubricaGroup } from "~~/utils/types"

export const useRubricaGroupStore = defineStore('rubricaGroup', () => {

    const rubricaGroups = ref<RubricaGroup[]>([])

    const byId = computed(() => (id: number) => rubricaGroups.value.find((rg => rg.id === id)))

    async function fetch () {
        rubricaGroups.value = await $fetch('/api/rubricaGroups?full')
    }

    return { rubricaGroups, byId, fetch}
})