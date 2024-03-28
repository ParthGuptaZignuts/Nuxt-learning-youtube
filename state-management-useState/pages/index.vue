<script setup>
const count = useState(() => 0);
function increment(){
    count.value++;
}
</script>


<template>
<h1>this is the home page</h1>
<h3>{{ count }}</h3>
<button @click="increment">increment</button>
</template>