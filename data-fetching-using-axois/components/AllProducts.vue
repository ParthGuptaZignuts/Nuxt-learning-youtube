<template>
    <div>
      <h1 v-if="error">Oops! Error encountered: {{ error }}</h1>
      <h1 v-if="pending">Loading...</h1>
      <div v-if="items">
        <div v-for="product in items" :key="product.id">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  const axios = useNuxtApp().$axios

  const items = ref(null);
  const pending = ref(false);
  const error = ref(null);
  const fetchData = async () => {
    pending.value = true;
    try {
      const { data } = await axios.get('/products');
      if(data) {
        items.value = data
      }
    } catch (err) {
      error.value = err;
    } finally {
      pending.value = false;
    }
  };
  
  onMounted(() => {
    fetchData();
  });
  </script>
  