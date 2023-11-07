<script setup>
import Sidebar from "../components/Sidebar.vue"
import Navbar from "../components/Navbar.vue"

</script>

<template>
    <div class="flex h-screen ">
        <Sidebar/>
        <div class="h-full w-full bg-slate-100 overflow-y-auto">
            <Navbar/>

            <h1>this is card</h1>
        </div>
    </div>
</template>