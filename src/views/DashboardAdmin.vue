<script setup>
import axiosInstance from "../lib";
import { onMounted } from "vue";
import { userManage } from "../store/user";

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
    <h2 class="font-bold p-5">Dashboard user management</h2>

    <div class="h-screen justify-center items-center flex gap-5">
      <table>
        <thead>
          <tr>
            <!-- <th class="border px-4 py-2">Id</th> -->
            <th class="border px-4 py-2">name</th>
            <th class="px-4 py-2 border">username</th>
            <th class="px-4 py-2 border">role</th>
          </tr>
        </thead>
        <tr v-for="user in store.users" key="store.users.id">
          <!-- <td class="border px-4 py-2">{{ user.id }}</td> -->
          <td class="border px-4 py-2">{{ user.name }}</td>
          <td class="border px-4 py-2">{{ user.username }}</td>
          <td class="border px-4 py-2">{{ user.role }}</td>
        </tr>
        <tbody></tbody>
      </table>

      <form class="border mt-5 p-5" @submit.prevent="store.handleSubmit">
        <h2
          class="font-bold border p-2 justify-center rounded-full bg-yellow-600 text-white flex"
        >
          Create new user !!!
        </h2>
        <div class="flex flex-col p-5 gap-5">
          <label>Nama</label>
          <input type="text" class="bg-slate-300 rounded p-2" 
          v-model="store.userInfo.name"
          />

          <label>Username</label>
          <input type="text" class="bg-slate-300 rounded p-2" 
          v-model="store.userInfo.username"
          />

          <label>Password</label>
          <input type="password" class="bg-slate-300 rounded p-2" 
          v-model="store.userInfo.password"
          />


          <button
              class="p-3 bg-blue-500 text-white font-semibold rounded hover:bg-yellow-500"              
            >
              create
            </button>
          
        </div>
      </form>
    </div>
  </div>
</template>
