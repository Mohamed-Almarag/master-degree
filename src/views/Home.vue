<template>
  <div class="home d-flex view-padding align-items-center">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="description col-md-6">
            <h1>تصــــــميم <br />الفيديو التعليمي الرقمي</h1>
            <p>
              عزيزي طالب الدراسات العليا؛ تتيح لك بيئة التدريب التكيفية الفرصة
              للتمكن من مهارات تصميم وإنتاج الفيديوهات الرقمية من البداية إلى
              النهاية.
            </p>
            <button>
              <router-link class="d-block" :to="{ name: 'About' }"
                >للمزيد</router-link
              >
            </button>
          </div>
          <div class="description-photo col-md-6">
            <img
              draggable="false"
              class="w-100"
              src="@/assets/images/01.png"
              alt=""
            />
          </div>
        </div>
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
  .content {
    .description {
      h1 {
        color: $maincolor;
        font-size: 3rem;
        line-height: 1.5;
      }
      p {
        @extend %p;
        font-size: 1.5rem;
        margin: 30px 0;
      }
      button {
        @extend %button;
        a {
          padding: 8px 40px;
          font-size: 1rem;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
