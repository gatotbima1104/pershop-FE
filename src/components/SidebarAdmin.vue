<script setup>
import ListSidebar from "./atomic/ListSidebar.vue";
import LayoutListSidebar from "./layout/LayoutListSidebar.vue";
import { ref } from 'vue'

const showSidebar = ref(true)

const isShow = () => {
  showSidebar.value = !showSidebar.value
}
async function logOut (){
  const tokenUser = localStorage.getItem(token)
  console.log(tokenUser)
  // await localStorage.removeItem(token)
}

</script>

<template>
  <div class="h-full w-[250px] border overflow-y-auto scrollbar" v-if="showSidebar">
    <!-- header sidebar -->
    <div
      class="text-dark justify-between flex shadow-md p-5 sticky top-0 bg-white"
    >
      <div class="flex gap-2">
        <p>
          <img src="../assets/shope.png" alt="" class="w-[30px] h-[30px]">
        </p>
        <!--logo-->
        <h1 class="font-bold text-base">Per commerce</h1>
      </div>
      <div>
        <!-- <button @click="isShow">click</button> -->
        <!-- <p>..</p> -->
        <!--burger-->
      </div>
    </div>

    <!-- Menu sidebar components layout -->
    <LayoutListSidebar title="GENERAL">
      <ListSidebar logo="bx:bxs-dashboard" colorLogo="grey" menu="Dashboard" arrow="📌" menuLink="/admin"/>
      <ListSidebar logo="bx:bxs-widget" colorLogo="grey" menu="User Management" arrow="📌" menuLink="/user-management"/>
      <ListSidebar logo="bx:layout" colorLogo="grey" menu="Product Management" arrow="📌" menuLink="/product"/>
      <button @click="logOut">Logout </button>
    </LayoutListSidebar>

    <LayoutListSidebar title="COMING SOON">
      <ListSidebar logo="bx:clipboard" menu="Coming Soon" arrow="📌" />
      <ListSidebar logo="bx:bxs-file-blank" menu="Coming Soon" arrow="📌" />
      <ListSidebar logo="bx:objects-vertical-bottom" menu="Coming Soon" arrow="📌" />
      <ListSidebar logo="bx:bxs-envelope" menu="Coming Soon" arrow="📌" />
    </LayoutListSidebar>

    <LayoutListSidebar title="COMING SOON">
      <ListSidebar logo="bx:bxs-folder-minus" menu="Coming Soon" arrow="📌" />
      <ListSidebar logo="bx:table" menu="Coming Soon" arrow="📌" />
    </LayoutListSidebar>
  </div> 
</template>

<style>
.scrollbar::-webkit-scrollbar{
  width: 5px;
}

.scrollbar::-webkit-scrollbar-thumb{
  background-color: grey;
  border-radius: 3px; /* Rounded corners */
}

</style>
