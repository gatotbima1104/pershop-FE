<script setup>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue';
import Card from '../components/Card.vue'

</script>

<template>
    <div class="flex h-screen ">
        <Sidebar/>
        <div class="h-full w-full bg-slate-100 overflow-y-auto">
            <Navbar/>
            
            <div class="grid">
                <div class="grid-cols-3">
                    <Card/>
                    <Card/>

                </div>

            </div>
        </div>
        
    </div>
</template>