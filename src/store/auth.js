import { defineStore } from 'pinia'
import axiosInstance from '../lib'
import router from '../router/index'

export const authStore = defineStore('auth',  {
  state: ()=>({
    userInfo: {
      id: '',
      name: '',
      username: 'Super Gatot' || null,
      password: 'super@admin.com',
      role: '',
      token: localStorage.getItem('token') || null,
      // isLoggedIn: false
    },
    errorMessage: '' || null
  }),
  actions:{
    async handleRegister(){
      const {username, password, name} = this.userInfo
      try {
        await axiosInstance.post('/auth/register',{
          username,
          password,
          name
        })
        router.push('/login')
        
      } catch (error) {
        console.log(error)
      }
    },
    
    async handleLogin(){
      const {username, password} = this.userInfo
      try {
        const res = await axiosInstance.post('/auth/login',{
          username,
          password,
        })
        const token = res.data.token
        
        // set into localStorage
        localStorage.setItem('token', token)

        //update the userInfo with received token
        this.userInfo.token = token
        this.userInfo.id = res.data.user.id
        this.userInfo.role = res.data.user.role
        this.userInfo.password = ''
        
        //CHECK THE ROLE
        if(this.userInfo.role === 'admin'){
          router.push('/admin')
        }else{
          router.push('/user')
        }
      } catch (error) {
        console.log(error.response.data.message)
        this.errorMessage = error.response.data.message
      }
    },

    async handleLogoutUser(){
      const confirmation = confirm('Are you sure you want to log out')
      if(confirmation){
        localStorage.removeItem('token')
        // this.userInfo.isLoggedIn = false
        router.push('/login')

        // reset the current user
        this.userInfo = {
          username: '',
          password: '',
          id: '',
          token: '',
        }
      } 
    },
  },
})