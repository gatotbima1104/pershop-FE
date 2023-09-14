import { defineStore } from 'pinia'
import axiosInstance from '../lib'
import axios from 'axios'

export const authStore = defineStore('auth',  {
  state: ()=>({
    id: null,
    username: '',
    token: '' || null,
  }),
  actions:{
    async registerUser(state) {
    //   try {
    //     const res = await axios.post('https://imdb-api.com/en/API/Top250Movies/k_12345678', 
    //     {
    //       res.data.username = state.username,
    //       res.data.password = state.password
    //       console.log(res.data)

    //     })
    //   } catch (error) {
    //     console.log(error)
    //   }
    },

    async loginUser(state){
      try {
        const user = await axiosInstance.post('/login')
        res.data.username = state.username
        res.data.password = state.password

        console.log(user)
      } catch (error) {
        
      }
    }
  },

  getters: {

  }
})