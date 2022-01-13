<template>
  <button
    @click="scrollToTop"
    :class="{ 'show-button': scrollPosition > 300 }"
    class="scroll-to-top"
  >
    <fa class="go-uo-icon" icon="arrow-up" />
  </button>
</template>

<script>
import { onMounted, onUnmounted, ref } from "vue";
export default {
  name: "ScrollToTopButton",
  setup() {
    const scrollPosition = ref(null);
    function handleScroll() {
      scrollPosition.value = window.pageYOffset;
    }

    function scrollToTop() {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 500);
    }

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return {
      handleScroll,
      scrollToTop,
      scrollPosition,
    };
  },
};
</script>

<style lang="scss" scoped>
.scroll-to-top {
  position: fixed;
  right: -100px;
  bottom: 50px;
  background: $maincolor;
  z-index: 7777777;
  color: $white;
  outline: none;
  border: none;
  padding: 4px 12px;
  font-size: 20px;
  border-radius: 4px;
  transition: 1s;
  transform: rotate(45deg);
  box-shadow: 0 3px 9px rgba($black, 0.3);
  &.show-button {
    right: 15px;
    transform: rotate(0deg);
    bottom: 20px;
  }
  &:hover {
    background: $secondcolor;
    .go-uo-icon {
      animation: movingicon 1s linear infinite;
    }
  }
  .go-uo-icon {
    transform: translateY(0);
  }
}
@keyframes movingicon {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(-2px);
  }
}
</style>
