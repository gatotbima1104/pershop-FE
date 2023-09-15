import { defineStore } from 'pinia'
import axiosInstance from '../lib'
import router from '../router/index'

export const authStore = defineStore('auth',  {
  state: ()=>({
    userInfo: {
      id: '',
      token: '',
      name: '',
      username: '' || null,
      password: '',
      role: '',
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
          password
        })
        // put token inside variabel
        const token = res.data.token

        // set into localStorage
        localStorage.setItem('token', token)

        // set token inside the header
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`

        //update the userInfo with received token
        this.userInfo.token = token
        this.userInfo.role = res.data.user.role

        // router.push('/product')

        if(this.userInfo.role === 'admin'){
          router.push('/product')
        }else{
          router.push('/user')
        }
        // console.log(token)
        // console.log(res.data.user.role)

      } catch (error) {
        console.log(error.response.data.message)
        this.errorMessage = error.response.data.message
      }
    },

    async handleLogoutUser(){
      const confirmation = confirm('Are you sure you want to log out')
      if(confirmation){
        localStorage.removeItem('token')
        router.push('/login')

        this.userInfo.username = ''
        this.userInfo.password = ''
      } 
    }
  },
})