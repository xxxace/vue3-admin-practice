<template>
<Transition name="main-sidebar">
    <div v-if="settingsStore.settings.menu.mode === 'side'" class="main-sidebar-container">
        1
    </div>
</Transition>
</template>

<script setup lang="ts">
import useSettingsStore from '@/stores/settings';

const settingsStore = useSettingsStore();
</script>

<style lang="scss" scoped>
.main-sidebar-container {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: var(--g-main-sidebar-width);
    background-color: var(--g-main-sidebar-bg-color);
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
}

.main-sidebar-enter-active,
.main-sidebar-leave-active {
    transition: 0.3s;
}

.main-sidebar-enter-from,
.main-sidebar-leave-to {
    transform: translateX(calc(var(--g-main-sidebar-width) * -1));
}
</style>