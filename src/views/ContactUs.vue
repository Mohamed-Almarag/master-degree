<template>
  <div class="contact-us view-padding">
    <DescriptionPages bgImage="Contact">
      <template #title>
        <h2 class="title-page h1">تواصل معنا</h2>
      </template>
    </DescriptionPages>
    <div class="container">
      <div class="part-one">
        <p class="text text-center">
          عزيزى طالب وطالبة الدراسات العليا يمكنك التواصل مع المدرب للاستفسار او
          الابلاغ عن المشاكل التى تواجهك اثناء التدريب عبر وسائل التواصل الاتيه
        </p>
        <ul class="social-lists list-unstyled d-flex justify-content-center">
          <li class="item">
            <a
              class="link"
              href="https://web.facebook.com/profile.php?id=100005000749118"
              target="_blank"
            >
              <fa class="icon" :icon="['fab', 'facebook']" />
              <span class="name">الفيسبوك</span>
            </a>
          </li>
          <li class="item">
            <a class="link" href="facebbok">
              <fa class="icon" :icon="['fab', 'whatsapp']" />
              <span class="name">الواتساب</span>
            </a>
          </li>
          <li class="item">
            <a class="link" href="tel: 01118357251">
              <fa class="icon" icon="phone-alt" />
              <span class="name">الهاتف</span>
            </a>
          </li>
        </ul>
        <span class="d-block or text-center">أو</span>
      </div>
      <div class="part-two">
        <form
          action=""
          class="from-container"
          @submit.prevent="submibtContactUs"
        >
          <p class="text text-center">عبر رسائل البريد الالكترونى</p>
          <div class="from-group">
            <label for="" class="from-label d-block">الأسم</label>
            <input type="text" class="from-input d-block" v-model="name" />
          </div>
          <div class="from-group">
            <label for="" class="from-label d-block">البريد الالكترونى</label>
            <input type="email" class="from-input d-block" v-model="email" />
          </div>
          <div class="from-group">
            <label for="" class="from-label d-block">رقم الهاتف</label>
            <input type="tel" class="from-input d-block" v-model="phone" />
          </div>
          <div class="from-group">
            <label for="" class="from-label d-block">الرساله</label>
            <textarea
              class="from-input text-area d-block"
              v-model="message"
            ></textarea>
          </div>
          <button class="submit-button d-block">ارسل الان</button>
        </form>
      </div>
    </div>
    <Loading :loading="loading"></Loading>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, reactive, toRefs } from "vue";
export default {
  name: "ContactUs",
  setup() {
    const store = useStore();
    const loading = ref(false);
    const contactUs = reactive({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    function submibtContactUs() {
      loading.value = true;
      let payload = new FormData();
      payload.append("name", contactUs.name);
      payload.append("email", contactUs.email);
      payload.append("phone", contactUs.phone);
      payload.append("message", contactUs.message);
      store.dispatch("ContactUs/contactUs", payload).finally(() => {
        loading.value = true;
      });
    }
    return { ...toRefs(contactUs), loading, submibtContactUs };
  },
};
</script>

<style lang="scss" scoped>
.contact-us {
  // background-color: $bgwhite;
  .title-page {
    @extend %title-page;
  }
  .text {
    @extend %p;
  }
  .part-one {
    padding: 50px 0 0;
    .social-lists {
      gap: 50px;
      margin: 70px 0;
      .item {
        .link {
          text-decoration: none;
          padding: 7px 30px;
          border-radius: 25px;
          background-color: $maincolor;
          color: $white;
          transition: 0.5s;
          &:hover {
            background: $secondcolor;
            animation: flashing 1500ms infinite;
          }
          .icon {
          }
          .name {
            margin-right: 10px;
          }
        }
      }
    }
    .or {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 30px auto;
      line-height: 40px;
      color: $white;
      background: $secondcolor;
      box-shadow: 0 0 3px $secondcolor;
    }
  }
  .part-two {
    .from-container {
      padding: 50px 0;
      box-shadow: 0 1px 12px rgba($black, 0.2);
      margin: 60px auto;
      width: 80%;
      border-radius: 15px;
      .from-group {
        margin: auto;
        width: 70%;
        color: $textcolor;
        margin-bottom: 30px;
        .from-label {
          margin-bottom: 20px;
        }
        .from-input {
          width: 100%;
          color: $textcolor;
          padding: 9px;
          border: 1px solid $bordercolor;
          outline: none;
          transition: $transition;
          // box-shadow: 0 1px 12px rgba($black, 0.3);
          &.text-area {
            height: 200px;
            resize: none;
          }
          &:focus-within {
            border-color: $secondcolor;
            box-shadow: 0 1px 12px rgba($secondcolor, 0.3);
          }
        }
      }
    }
    .submit-button {
      background-color: $maincolor;
      color: $white;
      width: 40%;
      margin: 50px auto 0;
      padding: 10px;
      border: none;
      border-radius: 25px;
      box-shadow: 0 1px 12px rgba($maincolor, 0.4);
      transition: 0.5s;
      &:hover {
        background: $secondcolor;
        box-shadow: 0 0 30px $secondcolor;
        box-shadow: 0 1px 12px rgba($secondcolor, 0.7);
      }
    }
  }
}
@keyframes flashing {
  0% {
    // background-color: $secondcolor;
    box-shadow: 0 0 3px $secondcolor;
  }
  50% {
    // background-color: $secondcolor;
    box-shadow: 0 0 30px $secondcolor;
  }
  100% {
    // background-color: $secondcolor;
    box-shadow: 0 0 3px $secondcolor;
  }
}
</style>
