<script setup>
const reward = useReward();
const increment = () =>{
    reward.value += 10 ;
}
</script>

<template>
    <div>
        <h1>monthly Reward</h1>
        <p>{{ reward }}</p>
        <button @click="increment">increment the value</button>
    </div>
</template>

