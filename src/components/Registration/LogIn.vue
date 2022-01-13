<template>
  <div class="register">
    <div class="container">
      <h2 class="main-form-title text-center">تسجيل الدخول</h2>
      <!-- Start Form  -->
      <form action="" class="form" @submit.prevent="login">
        <div class="form-group">
          <label for="" class="form-label">البريد الالكترونى</label>
          <div class="input-container">
            <input class="form-input" type="email" v-model="email" />
            <fa class="icon" icon="envelope" />
          </div>
        </div>

        <div class="form-group">
          <label for="" class="form-label">كلمة المرور</label>
          <div class="input-container">
            <input
              type="password"
              class="form-input password-input"
              v-model="password"
            />
            <fa
              @click="showAndHidePassword"
              class="icon show-password"
              icon="eye"
            />
          </div>
        </div>

        <div class="form-group">
          <button class="submit-form-btn d-block">دخول</button>
        </div>
      </form>
      <!-- End Form  -->
      <div class="ask-account text-center">
        <span class="message d-inline-block">هل لديك حساب بالفعل؟</span>
        <router-link class="router-link-page" :to="{ name: 'LogIn' }"
          >تسجيل الدخول</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "LogIn",
  setup() {
    const userData = reactive({
      email: "",
      password: "",
    });
    const store = useStore();
    const router = useRouter();
    function showAndHidePassword() {
      let passwordInput = document.querySelector(".password-input");
      if (passwordInput.getAttribute("type") == "password") {
        passwordInput.setAttribute("type", "text");
      } else {
        passwordInput.setAttribute("type", "password");
      }
    }
    function login() {
      let payload = new FormData();
      payload.append("email", userData.email);
      payload.append("password", userData.password);
      store.dispatch("Auth/signIn", payload).then(() => {
        router.push({ name: "Home" });
      });
    }
    return {
      ...toRefs(userData),
      showAndHidePassword,
      login,
    };
  },
};
</script>

<style lang="scss" scoped>
.register {
  padding: $padding + 20 0;
  .form {
    .form-group {
      @extend %form-group;
      .form-label {
        @extend %form-label;
      }
      .input-container {
        @extend %input-container;
        .form-input {
          @extend %form-input;
        }
        .icon {
          @extend %form-icon;
          &.show-password {
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
