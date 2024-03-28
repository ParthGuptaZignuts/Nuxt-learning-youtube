<script setup>
import {useCounterStore} from "~~/store/counter"
const store = useCounterStore();
console.log(store);
</script>

<template>
    <h1>this is the B page </h1>
    <h2>Count: {{ store.count }}</h2>
</template>