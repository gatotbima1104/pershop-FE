<script>
import { Icon } from "@iconify/vue";

export default {
  name: "listMenuSidebar",
  props: {
    logo: {
      type: String,
      default: "logo",
    },
    menu: {
      type: String,
      default: "menu",
    },
    colorLogo: {
      type: String,
      default: "text-slate-600 hover:text-white transition-all",
    },
  },
  components: {
    Icon,
  },
};
</script>

<template>
  <div
    class="items-center font-semibold justify-between flex py-4 text-slate-600 hover:bg-slate-400 transition-all cursor-pointer hover:text-white ps-4"
  >
    <div class="flex gap-4 items-center">
      <Icon
        :icon="logo"
        class="text-slate-600 hover:text-white transition-all" 
        :color="colorLogo"
        />
      <!-- logo -->
      <a href="">{{ menu }}</a>
    </div>
    <div>
      <Icon
        icon="carbon:chevron-right"
        class="text-slate-600 hover:text-white transition-all"
      />
      <!--logo-->
    </div>
  </div>
</template>
