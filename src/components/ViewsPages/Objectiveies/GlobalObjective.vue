<template>
  <div class="global-objective">
    <div class="row">
      <div class="part-one col-md-6">
        <h2 class="main-title">الهدف العام لبيئة التدريب التكيفية</h2>
        <p class="description">
          تهدف بيئة التدريب التكيفية إلى تنمية مهارات تصميم وإنتاج مصادر التعلم
          الرقمية وخفض العبء المعرفي لدى طلاب الدبلومة المهنية، تخصص تكنولوجيا
          التعليم.
        </p>
        <p class="description">
          والهدف العام من هذه البيئة هو تصميم وإنتاج الفيديو التعليمي الرقمي
          كأحد مصادر التعلم الرقمية.
        </p>
      </div>
      <div class="part-two col-md-6">
        <div class="img-container">
          <img
            class="photo w-100 h-100"
            draggable="false"
            src="../../../assets/images/002.jpeg"
            alt="objectivies"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalObjective",
};
</script>

<style lang="scss" scoped>
.global-objective {
  padding: $sec-padding;
  .part-one {
    .main-title {
      @extend %title;
    }
    .description {
      @extend %p;
    }
  }
  .part-two {
    .img-container {
      .photo {
        filter: drop-shadow(2px 4px 8px rgba($black, 0.6));
        opacity: 0.8;
        transition: 0.5s ease-in-out;
        transform-origin: top left;
        border-radius: 10px;
        &:hover {
          opacity: 1;
          transform: scale(0.9) skew(7deg);
        }
      }
    }
  }
}
</style>
