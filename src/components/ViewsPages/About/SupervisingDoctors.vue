<template>
  <div class="main-container text-center">
    <div class="container">
      <h2 class="title">إشـراف</h2>

      <div class="doctors">
        <div class="row">
          <div class="resercher col-md-6">
            <div class="resercher-information">
              <div class="img-container">
                <img
                  class="photo d-block"
                  src="@/assets/images/About-us/doctor-1.jpg"
                  alt="doctor"
                />
              </div>
              <h4 class="name">
                <span class="preparation">أ.د/ </span>حـسـن عـلـي حـسـن ســلامـه
              </h4>
              <p class="job">أستـاذ تكنـولـوجيـا التعليـم المتفـرغ</p>
              <p class="university">كلية التربية ــ جامعة سوهاج</p>
            </div>
          </div>

          <div class="resercher col-md-6">
            <div class="resercher-information">
              <div class="img-container">
                <img
                  class="photo d-block"
                  src="@/assets/images/About-us/doctor-2.jpg"
                  alt="doctor"
                />
              </div>
              <h4 class="name">
                <span class="preparation">أ.د/ </span>يـســري مـصـطـفـى الـسـيـد
              </h4>
              <p class="job">أستـاذ ورئيـس قسـم تكنولوجيـا التعليـم</p>
              <p class="university">كلية التربية ــ جامعة سوهاج</p>
            </div>
          </div>
        </div>
      </div>
      <p class="content">
        وتقدم هذه البيئة بعض الموديولات التعليمية التكيفية المتعلقة بمهارات
        تصميم وإنتاج الفيديو التعليمي الرقمي لطلاب الدبلومة المهنية، تخصص
        تكنولوجيا التعليم وفقًا لأسلوب تعلمهم.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SupervisingDoctors",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  padding: $sec-padding;
  background-color: $bgwhite;
  .title {
    @extend %section-title;
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
  .content {
    margin-top: 100px;
    @extend %p;
    font-size: 1.2rem;
  }
}
</style>
