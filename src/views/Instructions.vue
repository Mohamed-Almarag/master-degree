<template>
  <div class="view-padding instructions">
    <div class="container">
      <div class="vedios">
        <h2 class="main-form-title text-center mb-5">
          تعليمات بيئة التدريب التكيفيه
        </h2>
        <div class="row">
          <div class="description-details-texts col-md-6">
            <h6>عزيزي الطالب..عزيزتي الطالبة:</h6>
            <ul class="listss" v-for="(item, index) in allItems" :key="index">
              <li class="item active-text">{{ item }}</li>
            </ul>
          </div>
          <div class="description-details-photo col-md-6">
            <img
              class="img w-100 h-100 d-block"
              src="@/assets/images/pages/0006.jpeg"
              alt="instructions"
            />
          </div>
        </div>
        <div>
          <h6>وإليك دليل استخدام البيئة:</h6>

          <a
            class="d-block download"
            href="@/assets/images/env.pdf"
            download="env-1.pdf"
            target="_blank"
          >
            <span>تحميل</span>
            <fa class="icon" icon="download" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Instructions",
  setup() {
    const allItems = reactive([
      "يعتمد نظام بيئة التدريب التكيفية على تكييف المحتوى التدريبي وفقًا لأسلوب تعلمك المُفضل والتي تم تحديده من خلال استبيان أسلوب التعلم الذي عُرض عليك مسبقًا.",
      "وتُقدم البيئة خمسة موديولات تدريبية في تصميم وإنتاج مصادر التعلم الرقمية بصفة عامة، والفيديو التعليمي الرقمي بصفة خاصة.",
      "ونأمل أن نُقدم لك تدريبًا ممتعًا...ومادة علمية شيقة، تفيدك في حياتك المهنية ودراستك البحثية في التخصص الجميل تكنولوجيا التعليم .",
    ]);
    // const envpdf = ref(require("@/assets/images/env-1.pdf"));
    return { allItems };
  },
};
</script>

<style lang="scss" scoped>
.instructions {
  .vedios {
    min-height: 50vh;
    padding-bottom: 100px;
    h6 {
      font-weight: bold;
    }
    .description-details-photo {
      .img {
        max-height: 350px;
        max-width: 100%;
        // margin-top: 30px;
      }
    }
  }
}
</style>
