<template>
    <div>Provider</div>
    <Injector />
</template>

<script setup lang="ts">
import { ref, provide, onMounted } from 'vue';
import Injector from './Injector.vue';

const value = ref('Hello, injector!');

onMounted(() => {
    setTimeout(() => {
        value.value = 'Hello, injector! (updated)'
    }, 2000)
})

provide("pValue", value)
</script>