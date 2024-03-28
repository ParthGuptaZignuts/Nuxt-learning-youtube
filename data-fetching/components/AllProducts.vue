<script setup>
const {data , pending , error , refresh} = await useFetch("https://fakestoreapi.com/products");
</script>

<template>
<h1 v-if="error">Opps ! error encountered : {{ error }}</h1>
<h1 v-if="pending">Loading....</h1>
<div v-if="data">
<div v-for="product in data">
    <h2>{{product.title}}</h2>
    <p>{{product.description}}</p>
</div>
</div>
</template>