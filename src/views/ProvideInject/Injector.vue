<template>
    <div>Injector: {{ value }}</div>
</template>

<script setup lang="ts">
import { computed, inject, type Ref } from 'vue';

const pValue = inject<Ref<string>>('pValue');
const value = computed(() => {
    return `data: ${pValue?.value} update for ${new Date()}`
});
</script>