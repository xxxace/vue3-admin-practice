<template>
<div class="sub-sidebar-container">2</div>
</template>

<style lang="scss" scoped>
.sub-sidebar-container {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: var(--g-sub-sidebar-width);
  box-shadow: -1px 0 0 var(--g-border-color), 1px 0 0 var(--g-border-color);
  background-color: var(--g-sub-sidebar-bg-color);
  transition: background-color 0.3s, left 0.3s, width 0.3s;
}
</style>
