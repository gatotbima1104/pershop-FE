<template>
  <div>
    <router-link to="/"></router-link>
    <router-link to="/login"></router-link>
    <router-link to="/register"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>