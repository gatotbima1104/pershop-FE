<script>
export default {
  name: "LayoutListSidebar",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <div class="border-t-2 mt-3">
    <h1 class="p-3 mt-3 font-bold text-slate-600">{{ title }}</h1>
    <slot></slot>
  </div>
</template>
