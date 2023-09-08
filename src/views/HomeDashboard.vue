<script setup>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import LayoutNavbar from "../components/layout/LayoutNavbar.vue";
import HistoryCategory from "../components/atomic/HistroyCategory.vue";
import TitlePage from "../components/atomic/TitlePage.vue";
import ListSidebar from "../components/atomic/ListSidebar.vue";
import UserProfile from "../components/atomic/UserProfile.vue";
import { Icon } from "@iconify/vue";

import { ref, reactive } from "vue";

const showSidebar = reactive({
  isShow: true,
});

const isSidebarShow = () => {
  showSidebar.isShow = !showSidebar.isShow;
};
</script>

<template>
  <div class="flex h-screen w-screen">
    <!-- sidebar -->
    <Sidebar v-if="showSidebar.isShow" key="sidebar" />
    <!-- main -->
    <div class="h-full w-full bg-slate-100 overflow-y-auto">
      <!-- header -->
      <button @click="isSidebarShow">show</button>
      <Navbar />

      <!-- second header -->
      <LayoutNavbar customClass="bg-opacity-80">
        <TitlePage title="Email Application" />
        <!-- history category -->
        <HistoryCategory from="Home" to="Email" subject="Email Application" />
      </LayoutNavbar>

      <!-- column -->
      <div class="container mx-auto px-8 mt-5">
        <div class="grid grid-cols-4 gap-4">
          <div class="p-4 rounded-lg bg-white block">
            <UserProfile
              photo="https://i.vimeocdn.com/portrait/19019098_640x640"
              name="John Doe"
              email="john@gmail.com"
            />

            <div class="mt-5">
              <ListSidebar
                logo="bx:bxs-dashboard"
                menu="INBOX"
                arrow="10"
                class="pe-3 bg-blue-400 text-white rounded"
              />
              <ListSidebar
                logo="bx:bxl-gmail"
                menu="EMAIL"
                arrow="5"
                class="pe-3 hover:rounded transition-all"
              />
              <ListSidebar
                logo="bx:bxs-envelope"
                menu="MESSAGE"
                arrow="127"
                class="pe-3 hover:rounded transition-all"
              />
              <ListSidebar
                logo="bx:bar-chart"
                menu="PORTOFOLIO"
                arrow="127"
                class="pe-3 hover:rounded transition-all"
              />
              <ListSidebar
                logo="bx:bxs-user-voice"
                menu="CHAT"
                arrow="127"
                class="pe-3 hover:rounded transition-all"
              />
              <ListSidebar
                logo="bx:bxs-user"
                menu="FREINDS"
                arrow="127"
                class="pe-3 hover:rounded transition-all"
              />
            </div>
          </div>

          <div class="p-4 rounded-lg bg-white col-span-3">
            <div class="flex gap-5 items-center p-5 border-b-2">
              <div>
                <img
                  src="https://i.vimeocdn.com/portrait/19019098_640x640"
                  alt=""
                  class="w-[80px] h-[80px] rounded-full"
                />
              </div>
              <div>
                <h1 class="font-bold text-lg">John doe</h1>
                <p class="text-slate-500 font-base">
                  Inquiry about our theme pages design.
                </p>
              </div>
            </div>

            <div class="p-5 border-b-2 pb-4">
              <div class="text-slate-500 mb-5">
                <h3>Hello</h3>
                <h3>dear sir, good morning</h3>
              </div>

              <h1 class="font-bold text-2xl mb-4">
                Inquiry about our theme pages design.
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui
                optio accusantium, nisi maxime tempore voluptatum libero
                officiis expedita excepturi dolores? Esse laborum velit deleniti
                quis placeat totam. Laboriosam, ipsa nihil?
              </p>

              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
                excepturi eveniet aperiam numquam officia, obcaecati voluptates
                officiis modi pariatur ducimus atque earum sint eligendi
                corrupti distinctio et. Exercitationem, veritatis ex?
              </p>
            </div>

            <div class="p-5 border-b-2 mb-5">
              <div class="flex items-center gap-3 mb-3 justify-between">
                <div class="flex items-center gap-2">
                  <Icon icon="bx:bx-paperclip" />
                  <h1>ATTACHMENTS</h1>
                </div>
                <div class="flex items-center gap-2"> 
                  <Icon icon="bx:bxs-down-arrow-alt" color="blue"/>
                  <a class="text-blue-500 font-bold" href="">Download All</a>
                </div>
              </div>
              <div class="flex items-center gap-5">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pPtqcZJtFhX488NMYaK2HQHaE7%26pid%3DApi&f=1&ipt=4636ca519bd9ad1e9ef1c5f537892c1e3123dd1f487824b0d38230faa61297e9&ipo=images"
                  alt=""
                  class="w-[60px] h-[60px] object-cover"
                />
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pPtqcZJtFhX488NMYaK2HQHaE7%26pid%3DApi&f=1&ipt=4636ca519bd9ad1e9ef1c5f537892c1e3123dd1f487824b0d38230faa61297e9&ipo=images"
                  alt=""
                  class="w-[60px] h-[60px] object-cover"
                />
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.pPtqcZJtFhX488NMYaK2HQHaE7%26pid%3DApi&f=1&ipt=4636ca519bd9ad1e9ef1c5f537892c1e3123dd1f487824b0d38230faa61297e9&ipo=images"
                  alt=""
                  class="w-[60px] h-[60px] object-cover"
                />
              </div>
            </div>

            <div class="p-5 border">
              <form>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="w-screen border">

        <div class="bg-yellow-600 w-full p-5 rounded mt-3 flex">
            <h1 class="text-xl font-bold text-white">Welcome back user</h1>
        </div>

        <div class="grid grid-cols-3 gap-5">           
            <div class="bg-white w-full p-5 rounded mt-3">
                <h1 class="text-xl font-bold text-black">Welcome back user</h1>                    
            </div>  
            <div class="bg-white w-full p-5 rounded mt-3 col-span-2">
                <h1 class="text-xl font-bold text-black">Welcome back user</h1>                    
            </div>  
        </div>

    </div> -->
</template>
