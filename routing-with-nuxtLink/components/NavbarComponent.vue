<script setup>

const user = ref("value");
const id = ref("12");

</script>

<template>
    
    <ul>
        <li><NuxtLink to="/">home Page</NuxtLink></li>
        <li><NuxtLink to="/about">about Page</NuxtLink></li>
        <li><NuxtLink to="/contact">contact Page</NuxtLink></li>
        <li><NuxtLink :to="`/${user}`">user Page</NuxtLink></li>
        <li><NuxtLink :to="`/post-${id}`">post Page</NuxtLink></li>
        <hr>
    </ul>
    
</template>