<template>
  <div class="exam-questions">
    <div class="row">
      <div
        class="col-md-6 mb-5 every-exam"
        v-for="item in moduleExams"
        :key="item.id"
      >
        <div
          class="
            main-card-container
            d-flex
            justify-content-between
            align-items-center
            flex-wrap
          "
        >
          <h6 class="title">{{ item.name }}</h6>
          <button
            @click="getQuestions(item.id)"
            class="d-block m-0 custom-btn more"
          >
            بسم الله
          </button>
        </div>
      </div>
    </div>

    <div
      class="all-questions"
      v-for="question in questions.questions"
      :key="question.id"
    >
      <div class="every-questions shadow-sm">
        <h5 class="title">
          <fa icon="question" class="icons text-white rounded-circle" />{{
            question.title
          }}
        </h5>
        <div
          class="question-options-container d-flex flex-wrap align-items-center"
        >
          <div
            class="options-lists d-flex flex-wrap align-items-center"
            v-for="(item, index) in question.options"
            :key="index"
          >
            <div class="options-item d-flex align-items-center">
              <input
                @click.stop="pushExamResults(item.question_id, item.id)"
                class="radio-input d-block"
                type="radio"
                :name="item.question_id"
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
    <button class="custom-btn" @click="submitExam">ارسال</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive, computed, onMounted } from "vue";
export default {
  name: "TheQuestions",
  setup() {
    const store = useStore();
    const examQuestion = reactive([]);
    const formData = new FormData();
    const moduleExams = computed(() => {
      return store.state.Module.exams;
    });
    onMounted(() => {});
    const questions = computed(() => {
      return store.state.Module.examQuestions;
    });
    function getQuestions(id) {
      store.dispatch("Module/getModuleExamQuetions", {
        exam_id: id,
      });
    }
    function pushExamResults(questionId, optionId) {
      examQuestion[questionId] = optionId;
      console.log(questionId);
      console.log(optionId);
    }

    function submitExam() {
      examQuestion.forEach((value, index) => {
        formData.append(`questions[${index}]`, value);
      });
      store.dispatch("Module/submitExam", formData);
    }

    return {
      moduleExams,
      questions,
      getQuestions,
      examQuestion,
      pushExamResults,
      submitExam,
    };
  },
};
</script>

<style lang="scss" scoped>
.exam-questions {
  // .every-exam {
  //   box-shadow: $simple-shadow;
  //   padding: 20px 10px;
  //   border-radius: $radius;
  //   .title {
  //     color: $textcolor;
  //   }
  //   .more {
  //     margin: 0;
  //   }
  // }
}
</style>
