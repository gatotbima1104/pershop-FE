<script>
export default {
    name: "TitlePage",
    props: ["title"],
}
</script>

<template>
  <div class="text-xl font-semibold text-slate-700 ms-5">
    <h1>{{ title }}</h1>
  </div>
</template>
