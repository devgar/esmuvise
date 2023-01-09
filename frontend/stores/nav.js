export const useNavStore = defineStore('nav', {
    state: () => ({ fixed: [
        { to: '/alumnos', label: 'Alumnos' },
        { to: '/asignaturas', label: 'Asignaturas' }
    ], other: []}),
    getters: {
        links: (state) => [...state.fixed, ...state.other],
    },
    actions: {
        add(navLink) {
            this.other = [navLink, ...this.other]
        },
        remove(to) {
            this.other = this.other.filter(link => link.to !== to) 
        },
        pop() {
            this.remove(this.other.at(-1).to)
        }
    }
})