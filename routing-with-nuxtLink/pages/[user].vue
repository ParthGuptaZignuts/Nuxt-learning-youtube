<script setup>
const route = useRoute();
console.log(route.params.user); 
</script>

<template>
    <h1>User Page</h1>
    <h2>hello - this is the user Page</h2>
 <h3>{{ $route.params.user }}</h3>
  </template>