<template>
  <div id="nav">
    <app-header></app-header>
    <router-view v-slot="{ Component }">
      <transition name="swip">
        <component :is="Component" />
      </transition>
    </router-view>

    <app-footer></app-footer>
    <ScrollToTopButton></ScrollToTopButton>
  </div>
</template>

<style lang="scss">
body {
  // font-family: "Roboto", sans-serif !important;
  font-family: "Cairo", sans-serif !important;
}
.swip-enter-active {
  animation: grow 1s linear 1;
}
@keyframes grow {
  0% {
    // transform: scale(0);
    opacity: 0;
  }
  50% {
    // transform: scale(0.5);
    opacity: 0.5;
  }
  100% {
    // transform: scale(1);
    opacity: 1;
  }
}
</style>
