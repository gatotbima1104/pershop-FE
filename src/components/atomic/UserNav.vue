<script>
import { Icon } from "@iconify/vue";
export default {
  name: "UserNav",
  props: ["foto", "name", "role"],
  components: {
    Icon,
  },
};
</script>

<template>
  <!-- menu -->
  <div class="text-sm flex items-center gap-2 relative">
    <img
      :src="foto"
      alt=""
      class="w-[40px] h-[40px] rounded-full object-contain"
    />
    <!-- foto user -->
    <div class="group ">
      <p class="font-bold">{{ name }}</p>
      <div class="flex items-center gap-2">
        <p>
          {{ role }}
        </p>
        <span>
            <Icon icon="carbon:chevron-down" />
          </span>
      </div>

      <div
        class="hidden group-hover:block absolute z-10 right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-lg"
      >
        <!-- Options inside the box -->
        <ul class="py-2">
          <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Account</li>
          <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Inbox</li>
          <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer">Taskbar</li>
          <!-- Add more options as needed -->
        </ul>
      </div>
    </div>
  </div>
</template>
