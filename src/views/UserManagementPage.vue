<script setup>
import { onMounted } from "vue";
import { userManage } from "../store/index";
import SidebarAdmin from "../components/SidebarAdmin.vue";
import Navbar from "../components/navbar.vue";

const store = userManage();

onMounted(async () => {
  store.getUsers();
});
</script>

<template>
  <div class="flex h-screen">
    <SidebarAdmin />

    <div class="h-full w-full bg-slate-100 overflow-y-auto">
      <Navbar title="Manage your Cashier here !!" />
      <div class="border bg-slate-200 h-full flex items-center justify-center">
        <div class="flex justify-center items-center">
          <div class="flex justify-center gap-5">
            <table class="mt-5 w-full">
              <thead>
                <tr>
                  <th class="border px-4 py-2 text-left">Name</th>
                  <th class="border px-4 py-2 text-left">Username</th>
                  <th class="border px-4 py-2 text-left">Role</th>
                  <th class="px-4 py-2 border">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(user, index) in store.users" :key="index">
                  <td class="border px-4 py-2">{{ user.name }}</td>
                  <td class="border px-4 py-2">
                    {{ user.username }}
                  </td>
                  <td class="border px-4 py-2">
                    {{ user.role }}
                  </td>
                  <td class="flex justify-center gap-4 border p-5">
                    <button
                      class="p-2 bg-blue-400 rounded"
                      value="update"
                      @click="store.editData(user)"
                    >
                      Update
                    </button>
                    <button
                      class="p-2 bg-red-400 rounded"
                      value="delete"
                      @click="store.removeUser(user.id)"
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
                Create New User Here !!!
              </h2>
              <div class="flex flex-col p-5 gap-5">
                <label>Nama</label>
                <input
                  type="text"
                  class="bg-slate-300 rounded p-2"
                  v-model="store.userInfo.name"
                />

                <label>Username</label>
                <input
                  type="text"
                  class="bg-slate-300 rounded p-2"
                  v-model="store.userInfo.username"
                />

                <label>Password</label>
                <input
                  type="password"
                  class="bg-slate-300 rounded p-2"
                  v-model="store.userInfo.password"
                />

                <div>Role {{ store.userInfo.role }}</div>

                <select v-model="store.userInfo.role" class="rounded p-1">
                  <option disabled >Please select one</option>
                  <option value="admin">Admin</option>
                  <option value="kasir">Kasir</option>
                </select>

                <div class="flex justify-center items-center gap-5">
                  <button
                    class="p-3 bg-yellow-600 text-white font-semibold rounded hover:bg-yellow-500"
                    :class="
                      store.userInfo.isUpdated ? 'bg-blue-400' : 'bg-yellow-600'
                    "
                  >
                    {{ store.userInfo.isUpdated ? "update" : "add" }}
                  </button>

                  <button
                    class="p-3 bg-red-600 text-white font-semibold rounded hover:bg-yellow-500"
                    v-if="store.userInfo.isUpdated === true"
                    @click="store.clearStateUpdated"
                  >
                    cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- <button
      class="p-3 bg-red-400 m-3 rounded font-bold text-white hover:bg-red-600"
      @click="storeAuth.handleLogoutUser"
    >
      logout
    </button>
    <button
      class="p-3 bg-blue-300 m-3 rounded font-bold text-white hover:bg-yellow-500"
    >
      <router-link to="/user-management">User Management</router-link>
    </button> -->
  </div>
</template>
