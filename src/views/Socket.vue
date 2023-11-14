<script setup>
import { io } from 'socket.io-client';
import { reactive } from 'vue'

const socket = io()
const params = reactive({
    channel: '',
    event: ''
})

async function subsToChannel(){
    try {
        socket.emit('subscribeToChannel', params.channel)
    } catch (error) {
        console.log(error)
    }
}

async function unsubsChannel(){
    try {
        socket.emit('unsubscribeChannel', params.channel)
    } catch (error) {
        console.log(error)
    }
}

</script>

<template>
<div class="h-screen bg-slate-400 flex justify-center items-center">
    <form class="block">
        <!-- <label> Event </label>
        <input type="text" v-model="params.event"> -->
        <label> Channel </label>
        <input type="text" v-model="params.channel">
        <button class="p-5 bg-blue-400 text-white font-bold hover:bg-blue-500" @click="subsToChannel">Subscribe</button>
        <button class="p-5 bg-blue-400 text-white font-bold hover:bg-blue-500" @click="unsubsChannel">Unsub</button>
    </form>

</div>
</template>