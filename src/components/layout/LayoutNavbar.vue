<script>
export default {
  name: "LayoutNavbar",
  props: ["customClass"],
};
</script>

<template>
  <div :class="['flex', 'justify-between', 'bg-white', 'p-4', customClass]">
    <slot></slot>
  </div>
</template>
