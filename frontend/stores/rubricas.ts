import type { Rubrica } from '~~/utils/types'

//export const useRubricaStore = defineStore('rubrica', {
// ({
// state: () => ({ rubricas: [] }),
//     actions: {
//         async fetch() {
//             const result = await $fetch('/api/rubricas')
//             // this.rubricas = result
//         }
//     }
// })

export const useRubricaStore = defineStore('rubrica', () => {
    const rubricas = ref<Rubrica[]>([]);

    async function fetch() {
        rubricas.value = await $fetch<Rubrica[]>('/api/rubricas')
    }

    return { rubricas, fetch }
})