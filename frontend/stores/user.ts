
type User = {
    id: number,
    name: String,
    role: 'teacher' | 'super',
}

export const useUserStore = defineStore('user', () => {
    const currentId = ref<number|null>(null)
    const items = ref<User[]>([{
        id: 100,
        name: 'ealbalate',
        role: 'super',
    }, {
        id: 200,
        name: 'achiva',
        role: 'super',
    }])
    const login = (val?: number) => { currentId.value = val || null } 

    const current = computed(() => currentId && items.value.find(i => i.id === currentId.value))
    
    return { items, current, login }
})