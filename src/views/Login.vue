<script>
import { ref } from 'vue'
import axiosInstance from '../lib/index'
import router from '../router/index'


export default {
    name: 'Login',

    data(){
        return{
            username: '',
            password: ''
        }
    },

    methods: {
        async handleSubmit () {
            const response = await axiosInstance.post('/auth/login', {
                username: this.username,
                password: this.password
            })

            localStorage.setItem('access_token', response.data.access_token)
            router.push('/user')
        }
    }
}




</script>


<template>
    <div class="flex justify-center items-center border bg-blue-50 h-screen">
        <div class="bg-white p-10 rounded w-1/3">
            <h1 class="mb-11 text-center font-bold text-xl text-yellow-700">Login here</h1>
            <form class="flex flex-col gap-4" @submit.prevent="handleSubmit"> 
                <label class="text-light">Username</label>
                <input type="text" class="rounded p-2 bg-slate-100" placeholder="Your username" v-model="username">

                <label>Password</label>
                <input type="password" class="rounded p-2 bg-slate-100" placeholder="Your password" v-model="password">

                <button class="rounded p-2 bg-yellow-500 text-white font-semibol" type="submit" :disabled="username=='' || password=='' "> 
                    sign in
                </button>

            </form>
            <p class="mt-5 text-sm">
                Don't have an account? 
                <router-link to="/register" class="font-bold text-blue-800">Sign up</router-link>
            </p>
            </div>
    </div>
</template>


