<template>
  <footer class="footer">
    <span class="graduation"><fa class="icon" icon="graduation-cap" /></span>
    <div class="container">
      <div class="row">
        <div class="footer-links col-md-8">
          <h5 class="footer-heading">الصفحات</h5>
          <ul class="list-unstyled links-list">
            <li>
              <router-link :to="{ name: 'Home' }">الرئيسيه</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'About' }">عن البيئه</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Instructions' }"
                >التعليمات</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'Objectivies' }">الاهداف</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'DetailsContent' }"
                >المحتوى</router-link
              >
            </li>
            <li>
              <router-link :to="{ name: 'Library' }">المكتبه</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'ContactUs' }">تواصل معنا</router-link>
            </li>
          </ul>
          <div class="address">
            <h5 class="address-heading">العنوان</h5>
            <ul class="list-unstyled">
              <li>
                <fa icon="map-marker-alt" />
                <span class="d-inline-block">جامعة سوهاج كلية التربيه</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-social-media text-md-center col-md-4">
          <h5 class="footer-heading text-capitalize">وسائل التواصل</h5>
          <span class="footer-icon first-icon d-md-block">
            <fa :icon="['fab', 'facebook']" />
          </span>
          <span class="footer-icon first-icon d-md-block">
            <fa :icon="['fab', 'whatsapp']" />
          </span>
          <span class="footer-icon first-icon d-md-block">
            <fa icon="phone-alt" />
          </span>
        </div>
      </div>
    </div>
    <div class="all-right-reserved">
      <div
        class="footer-right d-flex justify-content-center align-items-center"
      >
        <div class="part-one">
          <span class="every">جميع الحقوق محفوظه &copy; 2022</span>
        </div>
        <!-- <div class="part-two">
            صنع بــ
            <span class="name"><fa class="icon" icon="heart" /></span>
            <a href="tel: 01064911906">م/ محمد المعراج</a>
          </div> -->
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.all-right-reserved {
  border-top: 1px solid rgba($white, 0.5);
  margin-top: 20px;
  padding: 20px 0;
  .footer-right {
    .part-two {
      .icon {
        color: red;
        margin: 0 10px;
      }
      a {
        color: $white;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
.footer {
  background-color: $maincolor;
  position: relative;

  padding-top: 50px;
  color: $bgcolor !important;
  .graduation {
    color: #004773;
    position: absolute;
    right: calc(50% - 35px);
    background: $white;
    z-index: 77;
    box-shadow: $box-shadow;
    width: 70px;
    height: 70px;
    top: -35px;
    border-radius: 50%;
    line-height: 70px;
    text-align: center;
    border: 1px solid;
    font-size: 1.4rem;
    // animation: totate 5s linear infinite;
    // @keyframes totate {
    //   0% {
    //     transform: rotate(15deg);
    //   }
    //   100% {
    //     transform: rotate(-15deg);
    //   }
    // }
  }
  .footer-heading {
    margin-bottom: 30px;
    color: $bgcolor !important;
  }
  .footer-links {
    .links-list {
      display: flex;
      gap: 30px;
      li {
        margin-bottom: 15px;
        a {
          color: $bgcolor !important;
          transition: $transition;
          display: inline-block;
          &:hover {
            transform: translateX(-5px);
            text-decoration: none;
          }
        }
      }
    }
    .address {
      margin-top: 40px;
      .address-heading {
        margin-bottom: 15px;
        color: $bgcolor !important;
      }
      ul {
        li {
          span {
            margin: 0 7px;
          }
        }
      }
    }
  }
  .footer-social-media {
    .footer-icon {
      transition: $transition;
      width: 30px;
      height: 30px;

      margin: auto;
      border: 1px solid $white;
      line-height: 30px;
      text-align: center;
      transform: rotate(-45deg);
      margin-bottom: 12px;
      color: $white;
      &:hover {
        transform: rotate(0);
        background-color: $secondcolor;
        border-color: $secondcolor;
        cursor: pointer;
      }
    }
  }
}
</style>
