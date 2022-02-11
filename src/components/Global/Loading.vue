<template>
  <div class="loading-container" v-if="loading">
    <div class="loading-content">
      <div class="loading rounded-circle">
        <div class="loading rounded-circle">
          <div class="loading rounded-circle">
            <div class="loading rounded-circle">
              <div class="loading rounded-circle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading",
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-container {
  position: fixed;
  z-index: 99999999 !important;
  background-color: rgba($black, 0.5);
  width: 100vw;
  height: 100vh;
  inset: 0;
  .loading-content {
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    position: absolute;
    left: 50%;
    top: 50%;
    width: 200px;
    height: 200px;
    .loading {
      -webkit-animation: rotateLoading 5s linear infinite;
      animation: rotateLoading 5s linear infinite;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      border-top: 8px solid $maincolor;
    }
  }
}

@keyframes rotateLoading {
  form {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
