<template>
  <div class="levels">
    <h2 class="title text-center">المستويات</h2>
    <div class="every-module">
      <h5 class="level">
        المستوى الأول : <span>مستوى بيئة التدريب التكيفية</span>
      </h5>
      <p class="description">
        ويتعلق بالأهداف العامة للموديولات التعليمية، وهي كالتالي:
      </p>
      <ul class="list-unstyled level-lists">
        <li class="item">
          <span>تحليل الفيديو التعليمي الرقمي</span>
        </li>
        <li class="item">
          <span>تصميم الفيديو التعليمي الرقمي</span>
        </li>
        <li class="item">
          <span>تجميع عناصر الفيديو التعليمي الرقمي</span>
        </li>
        <li class="item">
          <span>إنتاج الفيديو التعليمي الرقمي</span>
        </li>
        <li class="item">
          <span>تقويم الفيديو التعليمي الرقمي</span>
        </li>
        <li class="item">
          <span>نشر وتطوير الفيديو التعليمي الرقمي</span>
        </li>
      </ul>

      <h5 class="level">
        المستوى الثانى : <span>مستوى الموديولات التعليمية</span>
      </h5>
      <p class="description">
        ويتعلق بالأهداف السلوكية الخاصة بكل موديول، وسوف يتم ذكرها في بداية كل
        موديول من الموديولات التعليمية.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ObjectivesLevels",
};
</script>

<style lang="scss" scoped>
.levels {
  padding: $sec-padding 0;
  .title {
    @extend %section-title;
  }
  .level {
    margin-bottom: 20px;
    color: $headcolor;
    font-weight: bold;
    span {
      color: $maincolor;
    }
  }
  .description {
    margin-bottom: 50px;
    @extend %p;
  }
  .level-lists {
    display: flex;
    flex-wrap: wrap;
    gap: 2%;
    .item {
      width: calc(98% / 2);
      margin-bottom: 40px;
      box-shadow: 0 1px 9px rgba($black, 0.2);
      padding: 30px 0;
      text-align: center;
      color: $textcolor;
      position: relative;
      transition: 0.5s ease-in-out;
      font-weight: bold;
      font-style: italic;
      border-radius: 10px;
      &:hover {
        color: $white;
        &::before,
        &::after {
          width: 50%;
        }
      }
      &::before,
      &::after {
        position: absolute;
        content: "";
        top: 0;
        height: 100%;
        width: 0;
        background-color: $maincolor;
        transition: 0.3s ease-in-out;
      }
      &::before {
        left: 0;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      }
      &::after {
        right: 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      }
      span {
        position: relative;
        z-index: 5;
      }
    }
  }
}
</style>
