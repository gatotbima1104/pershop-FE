<script setup>
import { useCounter } from "../store/counter";
const counter = useCounter();
</script>

<template>
  <div class="flex h-screen items-center justify-center flex-col">
    <h1>{{ counter.title }}</h1>
    <div class="flex gap-5 items-center my-5">
      <button @click="counter.increment(1)" class="p-5 rounded-full bg-blue-600 text-white font-bold text-2xl">+</button>
      <h1>{{ counter.count }}</h1>
      <button @click="counter.decrement(1)" class="p-5 rounded-full bg-blue-600 text-white font-bold text-2xl">-</button>
    </div>
    <p> Angka diatas adalah {{ counter.ganjilOrGenap }}</p>
  </div>
</template>
