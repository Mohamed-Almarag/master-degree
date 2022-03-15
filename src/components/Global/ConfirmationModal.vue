<template>
  <transition name="fade">
    <div
      class="
        form-modal-container
        clip-path
        d-flex
        justify-content-center
        align-items-center
      "
      v-if="showConfirm"
    >
      <div class="content">
        <p class="active-text text-center">
          هل انت متاكد من حذف هذا {{ typeelement }} !؟
        </p>
        <div
          class="
            buttons-container
            mt-4
            d-flex
            justify-content-around
            align-items-center
          "
        >
          <button @click="sure" class="d-block btn btn-sure">
            {{ savebtntext }}
          </button>
          <button @click="cancel" class="d-block btn btn-delete">الغاء</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ConfirmationModal",
  props: ["showConfirm", "cancel", "savebtntext", "typeelement", "sure"],
  // props: {
  //   showConfirm: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.form-modal-container {
  .content {
    color: $textcolor;
    background-color: $white;
    min-width: 400px;
    padding: 20px;
    border-radius: $radius;
  }
  .buttons-container {
    .btn {
      border: none;
      color: $white;
      min-width: 100px;
      outline: none;
      box-shadow: $box-shadow;
      opacity: 0.7;
      transition: $transition;
      &:hover {
        opacity: 1;
      }
      &.btn-sure {
        background-color: $maincolor;
      }
      &.btn-delete {
        background-color: $cancel;
      }
    }
  }
}
</style>
