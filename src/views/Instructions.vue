<template>
  <div class="view-padding instructions">
    <div class="container">
      <!-- start environemet ine-   -->
      <div class="vedios" v-if="env == 0">
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
            class="d-block download link-drive"
            href="https://drive.google.com/file/d/1KUqrm8kZzHCsFk-eCfEV2e4NzzRoY4A6/view?usp=sharing"
            download="env-1.pdf"
            target="_blank"
          >
            <span class="show">عرض</span>
            <fa class="icon" icon="download" />
          </a>
        </div>
      </div>
      <!-- start environemnt -two   -->
      <div class="environment-two vedios" v-if="env == 1">
        <h2 class="main-form-title text-center mb-5">
          تعليمات بيئة التدريب القابلة للتكيف
        </h2>
        <div class="row">
          <div class="description-details-texts col-md-6">
            <h6>عزيزي الطالب..عزيزتي الطالبة:</h6>
            <ul
              class="listss"
              v-for="(item, index) in environmentTwo"
              :key="index"
            >
              <li class="item">
                <span>{{ item.name }}</span>
                <p class="active-text">{{ item.text }}</p>
              </li>
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
        <ul class="all-switches mt-5">
          <h6>
            كما تتيح لك بيئة التدريب القابلة للتكيف؛ التبديل من نمط تعلم إلى
            آخر؛
          </h6>
          <li class="parts" v-for="(item, index) in parts" :key="index">
            <p class="active-text">
              {{ item }}
            </p>
          </li>
        </ul>
        <div>
          <h6>وإليك دليل استخدام البيئة:</h6>

          <a
            class="d-block download link-drive"
            href="https://drive.google.com/file/d/1tF6-JHL4bujzmHVvvgXtPGEVZEVnML6A/view?usp=sharing"
            download="env-1.pdf"
            target="_blank"
          >
            <span class="show">عرض</span>
            <fa class="icon" icon="download" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserInfo } from "@/use/user-info";
import { reactive } from "vue";
export default {
  name: "Instructions",
  setup() {
    const { env } = useUserInfo();
    const allItems = reactive([
      "يعتمد نظام بيئة التدريب التكيفية على تكييف المحتوى التدريبي وفقًا لأسلوب تعلمك المُفضل والتي تم تحديده من خلال استبيان أسلوب التعلم الذي عُرض عليك مسبقًا.",
      "وتُقدم البيئة خمسة موديولات تدريبية في تصميم وإنتاج مصادر التعلم الرقمية بصفة عامة، والفيديو التعليمي الرقمي بصفة خاصة.",
      "ونأمل أن نُقدم لك تدريبًا ممتعًا...ومادة علمية شيقة، تفيدك في حياتك المهنية ودراستك البحثية في التخصص الجميل تكنولوجيا التعليم .",
    ]);
    const environmentTwo = reactive([
      {
        name: "النمط البصري: ",
        text: "يُركز أصحابه على الأشياء المرئية والملاحظة، ويتضمن الصور والرسوم البيانية، والأفلام والمخططات.",
      },
      {
        name: "النمط السمعي: ",
        text: "يُفضل أصحابه الاستماع إلى المعلومات، ويعتمد على السمع والنطق باعتبارهما وسيلة رئيسية للتعلم.",
      },
      {
        name: "النمط الحركي: ",
        text: "يفضل أصحابه العمل اليدوي، ويحدث التعلم لديهم عن طريق القيام بأنشطة حسية حركية.",
      },
    ]);
    const parts = reactive([
      "  وإذا صنفتك بيئة التدريب القابلة للتكيف على أنك متعلمًا سمعيًّا؛ فيظهر لك المحتوى التدريبي السمعي، ولكن يمكنك تعلم أي جزئية من جزئيات المحتوى بصريًّا من خلال الضغط على أيقونة « بصري »، ويمكنك أيضًا تعلم أي جزئية من جزئيات المحتوى حركيًّا من خلال الضغط على أيقونة « حركي ».",
      "  وإذا صنفتك بيئة التدريب القابلة للتكيف على أنك متعلمًا بصريًّا؛ فيظهر لك المحتوى التدريبي البصري، ولكن يمكنك تعلم أي جزئية من جزئيات المحتوى سمعيًا  من خلال الضغط على أيقونة « سمعي  »، ويمكنك أيضًا تعلم أي جزئية من جزئيات المحتوى حركيًّا من خلال الضغط على أيقونة « حركي ».",
      "  وإذا صنفتك بيئة التدريب القابلة للتكيف على أنك متعلمًا حركيًّا؛ فيظهر لك المحتوى التدريبي الحركي، ولكن يمكنك تعلم أي جزئية من جزئيات المحتوى بصريًّا من خلال الضغط على أيقونة « بصري »، ويمكنك أيضًا تعلم أي جزئية من جزئيات المحتوى سمعيًّا  من خلال الضغط على أيقونة « سمعي  ».",
    ]);
    // const envpdf = ref(require("@/assets/images/env-1.pdf"));
    return { allItems, environmentTwo, parts, env };
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
    &.environment-two {
      .listss {
        .item {
          span {
            color: $secondcolor;
          }
        }
      }
      .parts {
        padding: 20px 0;
        border-bottom: 1px solid $bordercolor;
      }
    }
  }
}
.link-drive {
  color: $textcolor;
  box-shadow: $box-shadow;
  width: fit-content;
  padding: 10px;
  border-radius: 5px;
  text-decoration: none;
  transition: $transition;
  background-color: $white;
  &:hover {
    color: $white;
    background-color: $maincolor;
  }
  .show {
    margin-left: 5px;
  }
}
</style>
