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
            ابدا الامتحان
          </button>
        </div>
      </div>
    </div>

    <QyestionsExams
      :items="questions"
      @close="showExam"
      :show="show"
    ></QyestionsExams>
  </div>
</template>

<script>
import QyestionsExams from "../../components/SingleModuleElements/QyestionsExams.vue";
import { useStore } from "vuex";
import { ref, reactive, computed, onMounted } from "vue";
export default {
  name: "TheQuestions",
  components: { QyestionsExams },
  setup() {
    const store = useStore();
    const examQuestion = reactive([]);
    const formData = new FormData();
    const show = ref(false);
    const moduleExams = computed(() => {
      return store.state.Module.exams;
    });
    onMounted(() => {});
    const questions = computed(() => {
      return store.state.Module.examQuestions;
    });
    function getQuestions(id) {
      store
        .dispatch("Module/getModuleExamQuetions", {
          exam_id: id,
        })
        .then(() => {
          show.value = !show.value;
        });
    }
    function pushExamResults(questionId, optionId) {
      examQuestion[questionId] = optionId;
      console.log(questionId);
      console.log(optionId);
    }
    function showExam() {
      show.value = !show.value;
      examQuestion.value = [];
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
      pushExamResults,
      showExam,
      examQuestion,
      show,
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
