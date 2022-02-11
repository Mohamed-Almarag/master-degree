<template>
  <div class="view-padding learning-style">
    <div class="container">
      <h2 class="main-section-title">تحديد أسلوب التعلم</h2>
      <div
        class="all-questions"
        v-for="question in questionaires"
        :key="question.id"
      >
        <div class="every-questions shadow-sm">
          <h5 class="title">
            <fa icon="question" class="icons text-white rounded-circle" />{{
              question.title
            }}
          </h5>
          <div
            class="
              question-options-container
              d-flex
              flex-wrap
              align-items-center
            "
          >
            <div
              class="options-lists d-flex flex-wrap align-items-center"
              v-for="(item, index) in question.options"
              :key="index"
            >
              <div class="options-item d-flex align-items-center">
                <input
                  @click.stop="dataPush(item.questionnaire_id, item.id)"
                  class="radio-input d-block"
                  @change="testing(item)"
                  type="radio"
                  :name="item.questionnaire_id"
                  :id="item.id"
                  :value="item.title"
                />
                <label class="label d-block" :for="item.id">{{
                  item.title
                }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        type="button"
        @click.stop="submit"
        class="btn btn-primary"
        value="ارسال"
      />
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onMounted } from "vue";
import { useStore } from "vuex";

export default {
  name: "LearningStyle",
  setup() {
    const store = useStore();
    const optionValue = ref([]);
    const questions = reactive([]);
    const formData = new FormData();
    const optionsHere = reactive([]);
    function testing(item) {
      optionsHere.push(item);
      console.log(optionsHere);
    }

    function dataPush(questionId, optionId) {
      questions[questionId] = optionId;
    }

    function submit() {
      questions.forEach((value, index) => {
        formData.append(`questions[${index}]`, value);
      });
      store.dispatch("Questionaire/submitQuestionaires", formData);
    }

    const questionaires = computed(() => {
      return store.state.Questionaire.questionaires;
    });

    onMounted(() => {
      store.dispatch("Questionaire/getQuestionaires")
    });

    return {
      questionaires,
      optionValue,
      testing,
      optionsHere,
      questions,
      dataPush,
      submit,
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.learning-style {
  padding-bottom: 70px;
  .all-questions {
    .every-questions {
      margin-bottom: 40px;
      padding: 20px;
      // box-shadow: $simple-shadow;
      .title {
        margin-bottom: 25px;
        color: $headcolor;
        .icons {
          background-color: $maincolor;
          width: 20px;
          height: 20px;
          padding: 4px;
          box-shadow: $box-shadow;
          margin: 0 0 0 10px;
        }
      }
      .question-options-container {
        gap: 30px;
        // margin-bottom: 40px;
        .options-lists {
          .options-item {
            color: $textcolor;
            .radio-input {
              margin: 0 0 0 5px;
              appearance: none;
              // margin: 0;
              background-color: $white;
              cursor: pointer;
              width: 0.9em;
              height: 0.9em;
              border: 1px solid $bordercolor;
              border-radius: 50%;
              transition: $transition;
              // &:hover,
              &:checked {
                background-color: $secondcolor;
                border-color: $secondcolor;
                // box-shadow: $box-shadow;
              }
            }
            .label {
              margin: 0;
            }
          }
        }
      }
    }
  }
}
</style>
