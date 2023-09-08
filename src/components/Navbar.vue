<script>
import LayoutNavbar from "./layout/LayoutNavbar.vue";
import UserNav from "./atomic/UserNav.vue";
import { Icon } from "@iconify/vue";

export default {
  name: "Navbar",
  components: {
    LayoutNavbar,
    UserNav,
    Icon,
  },
};
</script>

<template>
  <LayoutNavbar customClass="shadow-lg sticky top-0">
    <div class="flex gap-5 items-center">
      <p>..</p>
      <h1 class="font-semibold">Something you love is now on sale!!! 💥</h1>
    </div>

    <!-- navbar -->
    <div class="flex gap-5">
      <ul class="flex items-center gap-3">
        <li>
          <a href=""><Icon icon="bx:bx-home" color="black"/></a>
        </li>
        <li>
          <!-- notification icon -->
          <a href=""><Icon icon="bx:cart-alt" color="green" /></a>
        </li>
        <li>
          <a href=""><Icon icon="bx:money-withdraw" color="green"/></a>
        </li> 
      </ul>

      <!-- menu -->
      <UserNav
        foto="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Py3egcy5QB72hVvOgjUBMgHaLH%26pid%3DApi&f=1&ipt=46f8256de7fd5904b5d9d9784c247f08c2aed716875f44a541f4a5e904ec6d87&ipo=images"
        name="Cuba"
        role="Admin"
      />
    </div>
  </LayoutNavbar>
</template>
