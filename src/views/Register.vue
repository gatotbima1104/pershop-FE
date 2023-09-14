<script setup>

import { ref, reactive, onMounted } from 'vue';
import axiosInstance  from '../lib/index'
import router from '../router';
import axios from 'axios'

const nameInput = ref('')
const usernameInput = ref('')
const passwordInput = ref('')

const movie = reactive({
    id: '',
    title: '',
    description: '',
})

// const clearInput = () => {
//     nameInput.value = ''
//     usernameInput.value = ''
//     passwordInput.value = ''
// }

const handleSubmit = async () => {
    try {
        await axiosInstance.post('/auth/register', {
            name: nameInput.value,
            username: usernameInput.value,
            password: passwordInput.value
        })
    
        alert('Register success!')
        router.push('/login')
        
    } catch (error) {
        console.log(error)
    }
}

const getDataMovie = async () =>{
    try {
        const res = await axios.get('https:www//api.themoviedb.org/3/trending/movie/day?language=en-US')
    
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}   

onMounted(() => {
    getDataMovie()
})
</script>

<template>
        <div class="flex justify-center items-center border bg-blue-50 h-screen">
            <div class="bg-white p-10 rounded w-1/3">
                <h1 class="mb-11 text-center font-bold text-xl text-yellow-700">Register here</h1>
                <form class="flex flex-col gap-4" @submit.prevent="handleSubmit"> 
                    <label>Name</label>
                    <input type="text" class="rounded p-2 bg-slate-100" placeholder="Your name" v-model="nameInput">

                    <label class="text-light">Username</label>
                    <input type="text" class="rounded p-2 bg-slate-100" placeholder="Your username" v-model="usernameInput">

                    <label>Password</label>
                    <input type="password" class="rounded p-2 bg-slate-100" placeholder="Your password" v-model="passwordInput">

                    <button class="rounded p-2 bg-yellow-500 text-white font-semibol" type="submit" 
                    > 
                    <!-- :disabled="nameInput=='' || usernameInput=='' || passwordInput=='' " -->
                        sign up
                    </button>
                </form>
                <p class="mt-5 text-sm">
                    Have an account? 
                    <router-link to="/login" class="font-bold text-blue-800">Sign in</router-link>
                </p>
            </div>
    </div>
</template>