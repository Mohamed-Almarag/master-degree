<template>
  <div class="description-container">
    <div :class="['decription', `decription-${bgImage}`]">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionPages",
  props: {
    bgImage: {
      type: String,
      required: false,
      default: "defaultImage",
      validator: function (value) {
        return (
          ["defaultImage", "library", "Contact", "Objectives"].indexOf(
            value
          ) !== -1
        );
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.description-container {
  overflow: hidden;
}
.decription {
  position: relative;
  background-image: url("../../assets/images/pages/04.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  transform: scale(1);
  animation: zoom-in-out 7s linear infinite;
  &::before {
    @extend %before;
  }
  &-library {
    background-image: url("../../assets/images/pages/0003.jpeg");
  }
  &-Contact {
    background-image: url("../../assets/images/pages/0004.jpeg");
  }
  &-Objectives {
    background-image: url("../../assets/images/pages/0001.jpeg");
  }
  &-Content {
    background-image: url("../../assets/images/pages/0002.jpeg");
  }
}
@keyframes zoom-in-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
