<script setup>
import axiosInstance from '../lib';
import { ref, onMounted } from 'vue'
const products = ref([])

const fetchProduct = async () => {
    const response = await axiosInstance.get('/product')
    products.value = response.data
}

onMounted(()=>{
    fetchProduct()
})
</script>

<template>

<div class="flex justify-center items-center">
    <div class="flex justify-center">
        <table class="mt-5 w-3/4">
            <thead>
                <tr>
                <th class="border px-4 py-2">Product</th>
                <th class="border px-4 py-2">Price</th>
                <th class="px-4 py-2 border">Stock</th>
                <th class="px-4 py-2 border">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                <td class="border px-4 py-2">{{ product.name }}</td>
                <td class="border px-4 py-2">{{ product.price }}</td>
                <td class="border px-4 py-2">{{ product.stock }}</td>
                <td class="flex justify-center gap-4 border p-5">
                    <button class="p-2 bg-blue-400 rounded" value="update" @click="editEvent(event)">Update</button>
                    <button class="p-2 bg-red-400 rounded" value="delete" @click="deleteEvent(event.id)">delete</button>
                </td>
                </tr>
            </tbody>
    </table>
    </div>
</div>
</template>

