<script>
export default{
    name: "HistoryCategory",
    props: ["from", "to", "subject"],
}
</script>

<template>
  <div class="flex gap-4 text-sm">
    <a href="">{{ from }}</a>
    <p>/ {{ to }}</p>
    <p class="text-blue-600">/ {{ subject }}</p>
  </div>
</template>
