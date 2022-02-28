<template>
  <div class="home d-flex view-padding align-items-center">
    <div class="container">
      <div class="content">
        <div class="description">
          <h1 class="text-center">
            <span>تصميم وإنتاج</span> <br />
            الفيديو التعليمي الرقمي
          </h1>
          <p class="text-center">
            عزيزي طالب الدراسات العليا؛ تتيح لك بيئة التدريب التكيفية الفرصة
            للتمكن من مهارات تصميم وإنتاج الفيديوهات الرقمية من البداية إلى
            النهاية.
          </p>

          <router-link
            class="d-block custom-btn home-btn m-auto"
            :to="{ name: 'About' }"
            >للمزيد</router-link
          >
        </div>
        <!-- <div class="row">
          <div class="description-photo col-md-6 d-none">
            <img
              draggable="false"
              class="w-100"
              src="@/assets/images/01.png"
              alt=""
            />
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.home {
  height: 100vh;
  background-image: url("../assets/images/676.jpeg");
  background-size: cover;
  background-position: center center;
  position: relative;
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: rgba($black, 0.4);
  }
  .content {
    .description {
      position: relative;
      z-index: 4;
      background-color: rgba($white, 0.4);
      padding: 40px;
      border-radius: 10px;
      h1 {
        color: $headcolor;
        font-size: 2.5rem;
        line-height: 1.5;
        font-weight: bold;
        span {
          color: $maincolor;
        }
      }
      p {
        color: $textcolor;
        color: rgba($white, 0.8);
        font-size: 1.5rem;
        margin: 30px 0;
      }
      .home-btn {
        color: $white;
        margin: 0;
        text-decoration: none;
        width: 200px;
        // a {
        //   font-size: 1rem;
        //   font-weight: bold;
        // }
      }
      button {
        // @extend %button;
      }
    }
  }
}
</style>
