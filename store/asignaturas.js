export const state = () => ({
  asignaturas: [],
  matriculas: [],
  evaluationItems: [],
  rubricas: [],
  rubricaGroups: []
})

export const getters = {
  getCounter(state) {
    return state.counter
  }
}

export const mutations = {
  asignaturasADD(state, payload) {
    state.asignaturas = [...state.asignaturas, payload]
  },
  asignaturasSET(state, payload) {
    state.asignaturas = payload
  }
}

export const actions = {
  async asignaturasFETCH({ commit }) {
    const result = await fetch('/api/asignaturas')
    const data = await result.json()
    return commit('asignaturasSET', data)
  },
  async asignaturasPOST({ dispatch }, alumno) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(alumno),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
    await fetch('/api/asignaturas', opts)
    return dispatch('asignaturasFETCH')
  }
}
