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
                  class="radio-input d-block"
                  @change="testing(item)"
                  type="radio"
                  :name="item.id"
                  :id="item.id"
                  :value="item.title"
                  v-model="optionValue[index[item]]"
                />
                <label class="label d-block" :for="item.title">{{
                  item.title
                }}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
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
    const optionsHere = reactive([]);
    function testing(item) {
      optionsHere.push(item);
      console.log(optionsHere);
    }

    const questionaires = computed(() => {
      return store.state.Questionaire.questionaires;
    });
    onMounted(() => {
      store.dispatch("Questionaire/getQuestionaires").then((res) => {
        console.log(res);
      });
    });
    // []

    // questions[1]==option id
    // questions[2]
    // questions[3]
    return { questionaires, optionValue, testing, optionsHere };
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
