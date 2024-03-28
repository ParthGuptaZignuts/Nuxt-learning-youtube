<script setup>
const routes = useRoute();
console.log(routes.params.id);

definePageMeta({
    validate: async(route) =>{
        return /^\d+$/.test(route.params.id);
    },
});
</script>

<template>
    <h1>Post Page</h1>
    <h2>hello - this is the Post Page here you will get post id number</h2>
 <h3>{{ $route.params.id }}</h3>
  </template>