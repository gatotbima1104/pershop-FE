<script setup>
import { userManage } from "../store/user";
import { onMounted } from "vue";
import axiosInstance from "../lib";
const store = userManage();

onMounted(() => {
  store.getUsers();
});

const token = sessionStorage.getItem("token");
if (token) {
  axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}
</script>

<template>
  <div>
    <h2 class="font-bold ">Dashboard user management</h2>
    
    <div class="h-screen justify-center items-center flex">

    <table>
      <thead>
        <tr>
          <th class="border px-4 py-2">Id</th>
          <th class="border px-4 py-2">name</th>
          <th class="px-4 py-2 border">username</th>
          <th class="px-4 py-2 border">role</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in store.users" key="store.users.id">
          <td class="border px-4 py-2">{{ user.id }}</td>
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.username }}</td>
          <td class="border px-4 py-2">{{ user.role }}</td>
        </tr>
      </tbody>
    </table>

    <form class="border mt-5 p-5">
        <h2
          class="font-bold border p-2 justify-center rounded-full bg-yellow-600 text-white flex"
        >
          Create new user !!!
        </h2>
        <div class="flex flex-col p-5 gap-5">
          <label>Nama</label>
          <input
            type="text"
            class="bg-slate-300 rounded p-2"
            
          />

          <label>Price</label>
          <input
            type="number"
            class="bg-slate-300 rounded p-2"
            
          />

          <label>Stock</label>
          <input
            type="number"
            class="bg-slate-300 rounded p-2"
            
          />

          <label>Category</label>
          <input
            type="text"
            class="bg-slate-300 rounded p-2"
            
          />

          <div class="flex justify-center items-center gap-5">
            <!-- <button
              class="p-3 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-500"
              :class="
                store.productInfo.isUpdated ? 'bg-blue-400' : 'bg-yellow-600'
              "
            >
              {{ store.productInfo.isUpdated ? "update" : "add" }}
            </button> -->

            <button
              class="p-3 bg-red-600 text-white font-semibold rounded hover:bg-yellow-500"
            
              @click=""
            >
              cancel
            </button>
          </div>
        </div>
      </form>
  </div>

  </div>
</template>