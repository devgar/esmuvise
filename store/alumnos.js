export const state = () => ({
  alumnos: [],
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
  alumnosADD(state, payload) {
    state.alumnos = [...state.alumnos, payload]
  },
  alumnosSET(state, payload) {
    state.alumnos = payload
  }
}

export const actions = {
  async alumnosFETCH({ commit }) {
    const result = await fetch('/api/alumnos')
    const data = await result.json()
    return commit('alumnosSET', data)
  },
  async alumnosPOST({ dispatch }, alumno) {
    const opts = {
      method: 'POST',
      body: JSON.stringify(alumno),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }
    await fetch('/api/alumnos', opts)
    return dispatch('alumnosFETCH')
  }
}
