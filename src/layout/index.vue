<template>
<div class="layout">
  <div id="app-main">
    <Header />
    <div class="wrapper">
      <div class="sidebar-container">
        <MainSidebar />
        <SubSidebar />
      </div>
      <div class="main-container">
        <div class="main">
          <button v-if="settingsStore.settings.menu.mode === 'side'"
            @click="settingsStore.settings.menu.mode = 'head'">show head</button>
          <button v-else @click="settingsStore.settings.menu.mode = 'side'">disable head</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import Header from "./components/Header/index.vue";
import MainSidebar from "./components/MainSidebar/index.vue";
import SubSidebar from "./components/SubSidebar/index.vue";
import useSettingsStore from "@/stores/settings";

const settingsStore = useSettingsStore();
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}

#app-main {
  width: var(--g-app-width);
  height: 100%;
  margin: 0 auto;
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: padding-top 0.3s;

  .sidebar-container {
    position: fixed;
    top: 0;
    bottom: 0;
    z-index: 1010;
    display: flex;
    width: calc(var(--g-main-sidebar-actual-width) + var(--g-sub-sidebar-width));
    transition: width 0.3s, transform 0.3s, box-shadow 0.3s, top 0.3s;
  }

  .main-sidebar-container:not(.main-sidebar-leave-active)+.sub-sidebar-container {
    left: var(--g-main-sidebar-actual-width);
  }

  .main-container {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    margin-left: calc(var(--g-main-sidebar-actual-width) + var(--g-sub-sidebar-width));
    background-color: var(--g-bg-color);
    box-shadow: -1px 0 0 0 var(--g-border-color), 1px 0 0 0 var(--g-border-color);
    transition: margin-left 0.3s, background-color 0.3s, box-shadow 0.3s;


    .main {
      position: relative;
      flex: auto;
      height: 100%;
      padding: 2px;
      overflow: hidden;
      transition: 0.3s;
    }
  }
}

header:not(.header-leave-active)+.wrapper {
  padding-top: var(--g-header-height);

  .sidebar-container {
    top: var(--g-header-height);
  }
}
</style>
