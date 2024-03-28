<script setup>
const reward = useReward();
</script>

<template>
    <div>
        <h1>yearly Reward</h1>
        <p>{{ reward *12 }}</p>
    </div>
</template>