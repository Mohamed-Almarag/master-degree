<template>
  <header class="main-header">
    <nav @scroll="handleScroll" class="navbar navbar-expand-lg fixed-top">
      <div class="container">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">
          <img
            class="logo"
            src="@/assets/images/logo.png"
            alt="logo"
            draggable="false"
          />
          <span class="site-name">بيئة التدريب التكيفية</span>
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" exact :to="{ name: 'Home' }"
                >الرئيسيه</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'About' }"
                >عن البيئه</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Instructions' }"
                >التعليمات</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Objectivies' }"
                >الاهداف</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'DetailsContent' }"
                >المحتوى</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'Library' }"
                >المكتبه</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'SocialMedia' }">
                الحوار والمناقشه</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{ name: 'ContactUs' }"
                >تواصل معنا</router-link
              >
            </li>
          </ul>
          <div class="register-settings">
            <button class="register-btn" type="button" v-if="!isLoggedIn">
              <router-link class="d-block" :to="{ name: 'SignUp' }"
                >سجل الان</router-link
              >
            </button>
            <!-- start drowdown  -->
            <div class="dropdown" v-if="isLoggedIn">
              <button
                class="btn dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <!-- <img
                  v-if="image"
                  class="img d-bloc rounded-circle"
                  :src="image"
                  alt="student"
                /> -->
                <img
                  class="img d-bloc rounded-circle"
                  src="../../assets/images/13.png"
                  alt="student"
                />
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <router-link class="dropdown-item" :to="{ name: 'Profile' }"
                  >البروفايل</router-link
                >

                <a
                  class="dropdown-item"
                  @click="logout"
                  href="javascript:void(0)"
                  >تسجيل الخروج</a
                >
              </div>
            </div>
            <!-- start drowdown  -->
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
// import { useUserInfo } from "@/use/user-info";

import { onMounted, onUnmounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "AppHeader",
  setup() {
    const store = useStore();
    const isLoggedIn = computed(() => store.state.Auth.token);
    const router = useRouter();
    // const { image } = useUserInfo();
    // const img = ref(null);
    // function isimg() {
    //   if (image !== null) {
    //     console.log("uuuuuuuuuuuuu");
    //     img.value = image;
    //   }
    // }

    function handleScroll() {
      let navbar = document.querySelector(".main-header .navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    }

    function logout() {
      store
        .dispatch("Auth/logOut")
        .then(() => {
          router.push({ name: "Home" });
        })
        .finally(() => {
          window.location.reload();
        });
    }
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });
    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return { handleScroll, logout, isLoggedIn };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 1rem 0;
  color: $textcolor;
  transition: 0.5s;
  background-color: $white;
  &.nav-scroll {
    padding: 0.5rem 0 !important;
    box-shadow: 0 1px 12px rgba($black, 0.3);
    background-color: $white;
  }
  .navbar-brand {
    .logo {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .site-name {
      color: $textcolor;
      margin-right: 5px;
      transition: 0.5s;
      &:hover {
        color: $maincolor;
      }
    }
  }
  .navbar-collapse {
    justify-content: space-between;
    .navbar-nav {
      .nav-item {
        margin-left: 0.3rem;
        padding: 2px 5px;
        .nav-link {
          color: $textcolor;
          transition: $transition;
          // padding: 5px;
          font-size: 13px;
          font-weight: bold;
          position: relative;
          &::before {
            position: absolute;
            content: "";
            background-color: rgba($maincolor, 0.5);
            top: 100%;
            height: 2px;
            transition: $transition;
            transform: translateX(-50%);
            width: 0;
            right: 50%;
          }
          &.router-link-exact-active {
            color: $maincolor;
            &::before {
              width: 100%;
              right: 0;
              transform: translateX(0);
            }
          }
          &:hover {
            color: $maincolor;
            transform: translateX(-5px);
            &::before {
              right: 0;
              left: 0;
              width: 100%;
              transform: translateX(0);
            }
          }
        }
      }
    }
    .register-settings {
      color: $textcolor;

      .register-btn {
        border: none;
        outline: none;
        background-color: $maincolor;
        border-radius: $radius - 5;
        box-shadow: $box-shadow;
        padding: 7px 20px;
        transition: $transition;
        &:hover {
          background-color: $secondcolor;
        }
        a {
          color: $white !important;
          &:hover {
            text-decoration: none;
          }
        }
      }
      .dropdown {
        .btn {
          border: none;
          outline: none;
          &:focus {
            box-shadow: unset;
          }
          &::after {
            display: none;
          }
          .img {
            width: 40px;
            height: 40px;
            box-shadow: $simple-shadow;
            object-fit: cover;
          }
        }
        .dropdown-menu {
          right: auto !important;
          left: 0;
          transform: translateY(15px);
          transition: $transition;
          &.show {
            transform: translateY(0);
          }
        }
      }
    }
  }
}
</style>
