<template>
  <div class="main-information">
    <div class="container">
      <div class="row">
        <div class="description-words col-md-6">
          <h2 class="title">عزيزي طالب الدراسات العليا</h2>
          <p class="content">
            تعد بيئة التدريب التكيفية أحد متطلبات الحصول على درجة دكتوراه
            الفلسلفة في التربية، تخصص تكنولوجيا التعليم، باعتبارها الجزء العملي
            (التطبيقي) لرسالة الدكتوراه المعنونة بـــ:
          </p>
          <p class="content">
            التفاعل بين أنماط التدريب وأساليب التعلم ببيئة التعلم الإلكترونية
            باستخدام النظرية البنائية لتنمية مهارات تصميم وإنتاج مصادر التعلم
            الرقمية وخفض العبء المعرفي لدى طلاب دبلوم تكنولوجيا التعليم
          </p>
        </div>
        <div class="resercher col-md-6">
          <div class="resercher-information">
            <div class="img-container">
              <img
                class="photo d-block"
                src="@/assets/images/About-us/resercher.jpg"
                alt="resercher"
              />
            </div>
            <h4 class="name">
              <span class="preparation">إعداد/ </span>عــلاء رمضــان عـلـي
              عـبدالله
            </h4>
            <p class="job">مدرس مساعد بقســـم تكنولوجيـــــا التعليم</p>
            <p class="university">كلية التربية ــ جامعة سوهاج</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainInformation",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-information {
  padding: $sec-padding;
  .description-words {
    padding: 10px;
    .title {
      @extend %title;
    }
    .content {
      @extend %p;
      font-size: 1.2rem;
    }
  }

  .resercher {
    text-align: center;
    .resercher-information {
      padding: 20px 10px;
      border-radius: 10px;
      box-shadow: 0 1px 12px rgba($black, 0.3);
      transition: 0.5s ease-in-out;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      &:hover {
        transform: translateY(-5px);
        border-color: $maincolor;
      }
      .img-container {
        width: 250px;
        height: 250px;
        box-shadow: 0 1px 12px rgba($black, 0.2);
        margin: auto;
        padding: 3px;
        border-radius: 50%;
        filter: brightness(0.7);
        transition: 0.5s ease-in-out;
        overflow: hidden;
        &:hover {
          padding: 0;
          filter: none;
          transform: scale(0.9);
          .photo {
            transform: rotateY(180deg);
          }
        }
        .photo {
          position: relative;
          border-radius: 50%;
          width: 100%;
          height: 100%;
          transition: 0.5s ease-in-out;
          transform-origin: center;
        }
      }
      .name {
        margin: 15px 0;
        color: $maincolor;
        font-weight: bold;
        .preparation {
          color: $textcolor;
        }
      }
      .university {
        margin: 0;
      }
    }
  }
}
</style>
