<script>
export default {
  name: "UserProfile",
  props: ["photo", "name", "email"],
};
</script>
<template>
  <div class="items-center justify-center flex flex-col">
    <img :src="photo" alt="" class="w-[100px] h-[auto] rounded-full object-contain">
    <h2 class="font-bold text-base">{{ name }}</h2>
    <p class="font-thin text-sm">{{ email }}</p>
  </div>
</template>
