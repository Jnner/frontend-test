import Vue from 'vue'
import Vuex from 'vuex'
import { reviews as comentarios } from './reviews'

Vue.use(Vuex)

comentarios.forEach((v, i) => (v.id = i + 1))

export default new Vuex.Store({
  state: {
    datos: comentarios,
    lastUsefulCount: []
  },
  mutations: {
    setUpdateUtil (state, id) {
      const maxReached = state.lastUsefulCount.some(v => v === id)
      !maxReached && state.datos.filter(v => v.id === id && v.useful_count++ && (v.disable = 'unique-color')) && state.lastUsefulCount.push(id)
    }
  },
  actions: {
    updateUtil ({ commit }, id) {
      commit('setUpdateUtil', id)
    }
  },
  getters: {
    convertFecha (state) {
      state.datos.map(v => {
        const fecha = new Date(v.date)
        const dia = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
        const mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        v.date = `${v.author} el ${dia[fecha.getDay() - 1]}, ${fecha.getDate()} de ${mes[fecha.getMonth()]} de ${fecha.getFullYear()}`
      })
    }
  }
})
