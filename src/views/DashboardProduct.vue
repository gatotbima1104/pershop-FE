<script setup>
// // import axiosInstance from '../lib';
// // import { ref, onMounted } from 'vue'
// // const products = ref([])

// // const fetchProduct = async () => {
// //     const response = await axiosInstance.get('/product')
// //     products.value = response.data
// // }

// // onMounted(()=>{
// //     fetchProduct()
// })

import { onMounted } from "vue";
import { useProducts } from "../store/index";

const store = useProducts();

onMounted(() => {
  store.getProduct();
});

</script>

<template>
  <div class="flex justify-center items-center">
    <div class="flex justify-center gap-5">
      <table class="mt-5 w-1/2">
        <thead>
          <tr>
            <th class="border px-4 py-2">Product</th>
            <th class="border px-4 py-2">Price</th>
            <th class="px-4 py-2 border">Stock</th>
            <th class="px-4 py-2 border">Category</th>
            <th class="px-4 py-2 border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in store.products" :key="store.products.id">
            <td class="border px-4 py-2">{{ product.name }}</td>
            <td class="border px-4 py-2">{{ product.price }}</td>
            <td class="border px-4 py-2">{{ product.stock }}</td>
            <td class="border px-4 py-2">{{ product.category }}</td>
            <td class="flex justify-center gap-4 border p-5">
              <button
                class="p-2 bg-blue-400 rounded"
                value="update"
                @click="store.editData(product)"
              >
                Update
              </button>
              <button
                class="p-2 bg-red-400 rounded"
                value="delete"
                @click="store.removeProductById(product.id)"
              >
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <form class="border mt-5 p-5" @submit.prevent="store.handleSubmit">
        <h2
          class="font-bold border p-2 justify-center rounded-full bg-yellow-600 text-white flex"
        >
          Create Your Product Here !!!
        </h2>
        <div class="flex flex-col p-5 gap-5">
          <label>Nama</label>
          <input
            type="text"
            class="bg-slate-300 rounded p-2"
            v-model="store.nameProduct"
          />

          <label>Price</label>
          <input
            type="number"
            class="bg-slate-300 rounded p-2"
            v-model="store.priceProduct"
          />

          <label>Stock</label>
          <input
            type="number"
            class="bg-slate-300 rounded p-2"
            v-model="store.stockProduct"
          />

          <label>Category</label>
          <input
            type="text"
            class="bg-slate-300 rounded p-2"
            v-model="store.categoryProduct"
          />

          <div class="flex justify-center items-center gap-5">
            <button
              class="p-3 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-500" :class="store.isUpdated ? 'bg-blue-400' : 'bg-yellow-600'" 
            >
              {{ store.isUpdated ? "update" : "add" }}
            </button>

            <button class="p-3 bg-red-600 text-white font-semibold rounded hover:bg-yellow-500" v-if="store.isUpdated === true" @click="store.clearStateUpdated">
                cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
