import type { Equivalence } from "~~/utils/types"

type UN <T> = Omit<T, 'createdAt'|'updatedAt'>

export const useEquivalenceStore = defineStore('equivalence', () => {
    const equivalences = ref<UN<Equivalence>[]>([{
        id: 1, max: 499, icon: 'mdi-timer-sand', label: 'INSUFICIENT',
    }, {
        id: 2, max: 599, label: 'SUFICIENT',
    }, {
        id: 3, max: 699, label: 'BÉ',
    }, {
        id: 4, max: 899, icon: 'mdi-check-bold', label: 'NOTABLE',
    }, {
        id: 5, max: 1001, icon: 'mdi-star', label: 'EXCEL·LENT',
    }])

    const textMode = ref<boolean>(true)

    const switchText = computed(() => textMode.value ? 'texto' : 'icons')

    const repr = computed(() => (value:number) => {
        for (let eq of equivalences.value) {
            if (!textMode.value && !eq.icon)
                continue
            if (eq.max > value )
                return textMode.value ? eq.label : eq.icon
        }
        const last = { icon: 'mdi-star-outline', label: 'excel·lent' }
        return textMode.value ? last.label : last.icon
    })

    async function fetch () {
        // equivalences.value = (await $fetch<Equivalence[]>('/api/equivalences'))
        //     .sort((a, b) => a.max - b.max)
    }
    return { equivalences, textMode, switchText, repr, fetch }
}) 