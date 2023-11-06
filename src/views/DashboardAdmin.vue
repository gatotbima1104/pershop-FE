<script setup>
import { onMounted } from "vue";
import { useProducts, authStore } from "../store/index";
import axiosInstance from "../lib";
import SidebarAdmin from "../components/SidebarAdmin.vue";
import Navbar from "../components/navbar.vue"

const store = useProducts();
const storeAuth = authStore();

onMounted(async () => {
  store.getProduct();
});
</script>

<template>
  <div class="flex h-screen">
    <SidebarAdmin/>
    
    <div class="h-full w-full bg-slate-100 overflow-y-auto">
      <Navbar title="Welcome here to pershop - powered by Shopee !!!"/>
      <div class="border bg-slate-300 h-screen flex items-center justify-center">
          <h1 class="text-center">
            Manage your store here !!
          </h1>
      </div>
      
    </div>
  </div>

</template>
