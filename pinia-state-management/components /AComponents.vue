<script setup>
import {useCounterStore} from "~~/store/counter"
const store = useCounterStore();
console.log(store);
</script>

<template>
    <h1>this is the A page </h1>
    <h2>Count: {{ store.count }}</h2>
    <button @click="store.increment">Increase the value</button>
</template>