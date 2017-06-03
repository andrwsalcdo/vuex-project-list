import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        projects: []
    }, 
    actions: {
        LOAD_PROJECT_LIST: function ({ commit }) {
            axios.get('/projects').then((response) => {
                commit('SET_PROJECT_LIST', { list: response.data })
            }, (err) => {
                console.log(err);
            })
        },
        ADD_NEW_PROJECT: function ({ commit }) {
            axios.post('/projects').then((response) => {
                commit('ADD_PROJECT', { project: response.data })
            }, (err) => {
                console.log(err)
            })
        }
    }, 
    mutations: {
        SET_PROJECT_LIST: (state, { list }) => {
            state.projects = list 
        },
        ADD_PROJECT: (state, { project }) => {
            state.projects.push(project)
        }
    }, 
    getters: {
        openProjects: state => {
            return state.projects.filter(project => !project.completed)
        }
    }
})

export default store 