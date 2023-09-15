<script setup>
import {authStore} from '../store/index'

const store = authStore()
</script>

<template>
        <div class="flex justify-center items-center border bg-blue-50 h-screen">
            <div class="bg-white p-10 rounded w-1/3">
                <h1 class="mb-11 text-center font-bold text-xl text-yellow-700">Register here</h1>
                <form class="flex flex-col gap-4" @submit.prevent="store.handleRegister"> 
                    <label>Name</label>
                    <input type="text" class="rounded p-2 bg-slate-100" placeholder="Your name" v-model="store.userInfo.name">

                    <label class="text-light">Username</label>
                    <input type="text" class="rounded p-2 bg-slate-100" placeholder="Your username" v-model="store.userInfo.username">

                    <label>Password</label>
                    <input type="password" class="rounded p-2 bg-slate-100" placeholder="Your password" v-model="store.userInfo.password">

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