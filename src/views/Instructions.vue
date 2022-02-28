<template>
  <div class="view-padding instructions">
    <div class="container">
      <div class="vedios">
        <h2 class="main-form-title">شرح بيئة التدريب التكيفيه</h2>
        <img
          class="img"
          src="../assets/images/pages/0006.jpeg"
          alt="instructions"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instructions",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.instructions {
  .vedios {
    min-height: 50vh;
    padding-bottom: 70px;
    .img {
      height: 400px;
      margin-top: 30px;
    }
  }
}
</style>
