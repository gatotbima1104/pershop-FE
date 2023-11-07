<script setup>
import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/navbar.vue'
import Card from '../components/Card.vue'
import { useProducts } from "../store/index"
import { onMounted, reactive } from 'vue';
import axiosInstance from '../lib'

const store = useProducts()

const data = reactive({
    products: [],
    id: '',
    name: '',
    price: 0,
    category: ''
})

async function fetchData(){
    try {
        const res = await axiosInstance.get('/product')
        data.products = res.data
        // console.log(res.data)
        
    } catch (error) {
        console.log(error)
    }
}

onMounted(()=> {
    fetchData()
})

</script>

<template>
    <div class="flex h-screen ">
        <Sidebar/>
        <div class="h-full w-full bg-slate-100 overflow-y-auto">
            <Navbar/>
            <div class="grid grid-cols-3 gap-5 mt-5">
                <div class="grid grid-cols-3 ms-3 gap-5 col-span-2">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
                <div class="w-[350px] h-[400px] bg-white border border-gray-200 rounded">
                    <div class="p-5">
                        <table>
                            <thead>
                                <tr class="gap-5 flex">
                                    <td>Name</td>
                                    <td>Price</td>
                                    <td>Quantity</td>
                                    <td>Total</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jacket</td>
                                    <td>20.000</td>
                                    <td>2</td>
                                    <td>20.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>