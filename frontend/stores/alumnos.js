function compare( a, b ) {
    if (String.prototype.localeCompare)
        return a.lastName.localeCompare(b.lastName) || a.firstName.localeCompare(b.firs)
    if (a.lastName < b.lastName) return -1
    if (a.lastName > b.lastName) return 1
    if (a.firstName < b.firstName) return -1
    if (a.firstName > b.firstName) return 1
    return 0
  }

export const useAlumnoStore = defineStore('alumno', {
    state: () => ({ alumnos: [] }),
    actions: {
        async fetch() {
            const result = await $fetch('/api/alumnos')
            this.alumnos = result.sort(compare)
        }
    }
})