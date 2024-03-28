<template>
    <div>
      <h1 v-if="error">Oops! Error encountered: {{ error }}</h1>
      <h1 v-if="pending">Loading...</h1>
      <div v-if="data">
        <div v-for="product in data" :key="product.id">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import api from '~/utils/api';
  import { ref, onMounted } from 'vue';
  
  const data = ref(null);
  const pending = ref(false);
  const error = ref(null);
  const fetchData = async () => {
    pending.value = true;
    try {
      data.value = await api.get('/products');
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
  