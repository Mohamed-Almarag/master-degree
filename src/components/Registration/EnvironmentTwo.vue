<template>
  <div class="register">
    <div class="container">
      <h2 class="main-form-title text-center">إنشاء حساب جديد</h2>
      <!-- Start Form  -->
      <form action="" class="form" @submit.prevent="signUp">
        <div class="form-group">
          <label for="" class="form-label">الأسم</label>
          <div class="input-container">
            <input class="form-input" type="text" v-model="name" />
            <fa class="icon" icon="user" />
          </div>
          <!-- <div class="validations-errors">
          <span v-if="v$.name.$error">
            {{ v$.name.$errors[0].$message }}
          </span>
        </div> -->
        </div>
        <div class="form-group">
          <label for="" class="form-label">البريد الالكترونى</label>
          <div class="input-container">
            <input class="form-input" type="email" v-model="email" />
            <fa class="icon" icon="envelope" />
          </div>
          <div class="validations-errors">
            <span v-if="v$.email.$error"> write somthing </span>
          </div>
        </div>
        <div class="form-group">
          <label for="" class="form-label">رقم الهاتف</label>
          <div class="input-container">
            <input class="form-input" type="tel" v-model.number="phone" />
            <fa class="icon" icon="phone-alt" />
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
          <label for="" class="form-label">تاكيد كلمة المرور</label>
          <div class="input-container">
            <input
              type="password"
              class="form-input password-input"
              v-model="confirm_password"
            />
            <fa
              @click="showAndHidePassword"
              class="icon show-password"
              icon="eye"
            />
          </div>
        </div>
        <div class="form-group">
          <button class="submit-form-btn d-block">تسجيل</button>
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
import { reactive, toRefs, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength, sameAs } from "@vuelidate/validators";

import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "EnvironmentTwo",
  setup() {
    const userData = reactive({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
      env: 1,
    });
    const store = useStore();
    const router = useRouter();
    const rules = computed(() => {
      return {
        name: { required },
        email: { required, email },
        phone: { required },
        password: { required, minLength: minLength(8) },
        confirm_password: { required, sameAs: sameAs(userData.password) },
      };
    });

    const v$ = useVuelidate(rules, userData);

    function showAndHidePassword() {
      let passwordInputs = document.querySelectorAll(".password-input");
      passwordInputs.forEach((input) => {
        input.getAttribute("type") == "password"
          ? input.setAttribute("type", "text")
          : input.setAttribute("type", "password");
      });
    }

    function signUp() {
      console.log("k");
      let payload = new FormData();
      payload.append("name", userData.name);
      payload.append("email", userData.email);
      payload.append("phone", userData.phone);
      payload.append("password", userData.password);
      payload.append("env", userData.env);
      store.dispatch("Auth/signUp", payload).then(() => {
        router.push({ name: "LogIn" });
      });
    }

    const submitForm = () => {
      v$.value.$touch();

      if (v$.value.$invalid) {
        console.log("error");
      } else {
        console.log("sucees");
      }
    };

    return {
      ...toRefs(userData),
      showAndHidePassword,
      v$,
      submitForm,
      signUp,
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
