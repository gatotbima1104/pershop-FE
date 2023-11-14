<script setup>
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/navbar.vue";
import Card from "../components/Card.vue";
import { useProducts } from "../store/index";
import { onMounted, reactive, ref } from "vue";
import axiosInstance from "../lib";

const store = useProducts();

const data = reactive({
  products: [],
  id: "",
  name: "",
  price: 0,
  category: "",
});

const prices = reactive({
  subTotal: 0,
})

function subTotal(){
  
}
async function fetchData() {
  try {
    const res = await axiosInstance.get("/product");
    data.products = res.data;
    // console.log(res.data)
  } catch (error) {
    console.log(error);
  }
}

// async function addToChart(){
//     const product = 
// }

onMounted(() => {
  fetchData();
});
</script>

<template>
  <div class="flex h-screen">
    <Sidebar />
    <div class="h-full w-full bg-slate-100 overflow-y-auto">
      <Navbar />
      <div class="grid grid-cols-3 gap-5 mt-5">
        <div class="grid grid-cols-3 ms-3 gap-5 col-span-2">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div
          class="max-h-[400px] overflow-y-auto w-[380px] bg-white border border-gray-200 rounded items-start"
        >
            <table class="table-fixed w-full p-5">
              <thead>
                <tr class="bg-slate-500">
                  <th class="text-start p-3 border text-white">Brand</th>
                  <th class="text-start p-3 border text-white">Quantity</th>
                  <th class="text-end p-3 border text-white">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pl-2 border ">
                    <p>Ventela Yellow</p>
                  </td>
                  <td class="pl-2 border ">2</td>
                  <td class="p-3 border  text-end"> $2,300</td>
                </tr>
                <tr>
                  <td class="pl-2 border ">
                    <p>Ventela Yellow</p>
                  </td>
                  <td class="pl-2 border ">2</td>
                  <td class="p-3 border  text-end"> $2,300</td>
                </tr>
                <tr>
                  <td class="pl-2 border ">
                    <p>Ventela Yellow</p>
                  </td>
                  <td class="pl-2 border ">2</td>
                  <td class="p-3 border  text-end"> $2,300</td>
                </tr>
                <tr>
                  <td class="pl-2 border ">
                    <p>Ventela Yellow</p>
                  </td>
                  <td class="pl-2 border ">2</td>
                  <td class="p-3 border  text-end"> $2,300</td>
                </tr>

                <tr>
                  <td class="pl-2 border ">
                    <p>Ventela Yellow</p>
                  </td>
                  <td class="pl-2 border ">2</td>
                  <td class="p-3 border  text-end"> $2,300</td>
                </tr>
                <tr>
                  <td class="pl-2 border ">
                    <p>Ventela Yellow</p>
                  </td>
                  <td class="pl-2 border ">2</td>
                  <td class="p-3 border  text-end"> $2,300</td>
                </tr>
              </tbody>
            </table>

            <div class="grid grid-cols-2 p-4 border items-center">
              <button class="bg-blue-700 text-white text-base p-2 rounded hover:bg-blue-800">
                Checkout ☞ 
              </button>
              <p class="text-end font-bold text-lg">${{ prices.subTotal }}</p>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
