<template>
  <div class="register">
    <div class="container">
      <div class="environments">
        <h2 class="main-form-title text-center">
          من فضلك قم باختيار البيئه الخاصه بك لاكمال بيانات التسجيل
        </h2>
        <div class="buttons d-flex align-items-center justify-content-center">
          <router-link
            class="router-link-page d-block"
            :to="{ name: 'EnvironmentOne' }"
            >بيئة التدريب التكيفية</router-link
          >
          <router-link
            class="router-link-page d-block"
            :to="{ name: 'EnvironmentTwo' }"
            >بيئة التدريب القابلة للتكيف</router-link
          >
        </div>
      </div>
      <div class="text-center">
        <p>
          <span class="message d-inline-block">هل لديك حساب بالفعل؟</span>
          <router-link class="router-link-login" :to="{ name: 'LogIn' }"
            >تسجيل الدخول</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignUp",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.register {
  padding: $padding + 20 0;
  .environments {
    min-height: 35vh;
    padding: 100px 0;
    .main-form-title {
      color: $headcolor;
    }
    .buttons {
      margin-top: 4rem;
      gap: 60px;
      .router-link-page {
        background-color: $maincolor;
        text-decoration: none;
        padding: 10px 25px;
        border-radius: $radius;
        color: $textcolor;
        box-shadow: $box-shadow;
        transition: $transition;
        color: $white;
        width: 240px;
        text-align: center;
        &:hover {
          background-color: $secondcolor;
        }
      }
    }
  }
}
</style>
