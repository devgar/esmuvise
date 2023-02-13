import type { Alumno } from '~~/utils/types'

function compare(a: Alumno, b: Alumno ) {
    return a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName)
}

export const useAlumnoStore = defineStore('alumno', () => {
    const alumnos = ref<Alumno[]>([])

    const byId = computed(() => (id: number) => alumnos.value.find(a => a.id === id))

    async function fetch() {
        alumnos.value = (await $fetch<Alumno[]>('/api/alumnos')).sort(compare)
    }

    return { alumnos, byId, fetch }
})