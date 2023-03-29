import type { Alumno } from '~~/utils/types'

function compare(a: Alumno, b: Alumno ) {
    return a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firstName)
}

export const useAlumnoStore = defineStore('alumno', () => {
    let lastCall = Date.now() - 10000
    const alumnos = ref<Alumno[]>([])

    const byId = computed(() => (id: number) => alumnos.value.find(a => a.id === id))

    async function fetch() {
        const now = Date.now()
        if ((lastCall + 5000) > now) return null
        lastCall = now
        alumnos.value = (await $fetch<Alumno[]>('/api/alumnos')).sort(compare)
    }

    async function post(payload: Alumno) {
        const data = await $fetch('/api/alumnos', {
            method: 'POST',
            body: payload,
        })
        if (data) await fetch()
        return data
    }

    return { alumnos, byId, fetch, post }
})