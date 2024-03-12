<template>
<Transition name="header" mode="out-in">
    <header v-if="settingsStore.settings.menu.mode === 'head'">

    </header>
</Transition>
</template>

<script setup lang="ts">
import useSettingsStore from "@/stores/settings";

const settingsStore = useSettingsStore();
</script>

<style lang="scss" scoped>
header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2000;
    display: flex;
    align-items: center;
    width: var(--g-app-width);
    height: var(--g-header-height);
    padding: 0 20px;
    margin: 0 auto;
    transition: background-color 0.3s;
    box-shadow: 0 -1px 0 var(--g-border-color), 0 1px 0 var(--g-border-color);
    background-color: var(--g-header-bg-color);
}

.header-enter-active,
.header-leave-active {
    transition: transform 0.3s;
}

.header-enter-from,
.header-leave-to {
    transform: translateY(calc(var(--g-header-height) * -1));
}
</style>