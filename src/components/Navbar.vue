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
  props: ['title']
};
</script>

<template>
  <LayoutNavbar customClass="shadow-lg sticky top-0">
    <div class="flex gap-5 items-center">
      <!-- <p>..</p> -->
      <h1 class="font-semibold">{{ title }}</h1>
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
        foto="https://www.pngitem.com/pimgs/m/22-220721_circled-user-male-type-user-colorful-icon-png.png"
        name="Sumbul"
        role="Admin"
      />
    </div>
  </LayoutNavbar>
</template>
