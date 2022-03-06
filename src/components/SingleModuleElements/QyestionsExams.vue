<template>
  <transition name="fade">
    <div class="form-modal-container clip-path" v-if="show">
      <form action="" class="form-modal questions" @submit.prevent="submitExam">
        <fa @click="close" class="edit-icon cancel" icon="times" />
        <div
          class="all-questions"
          v-for="(question, index) in items.questions"
          :key="question.id"
        >
          <div class="every-questions shadow-sm">
            <h5 class="title titles">
              <span class="span-numbers">{{ index + 1 }}</span>
              {{ question.title }}
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
        <button class="custom-btn">ارسال</button>
      </form>
      <loading :loading="loading"></loading>
    </div>
  </transition>
</template>

<script>
import { useStore } from "vuex";
import { reactive, ref } from "vue";
export default {
  name: "QyestionsExams",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Object,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    const loading = ref(false);
    const store = useStore();
    const formData = new FormData();
    const examQuestion = reactive([]);
    function pushExamResults(questionId, optionId) {
      examQuestion[questionId] = optionId;
      console.log(questionId);
      console.log(optionId);
    }
    function submitExam() {
      loading.value = true;
      examQuestion.forEach((value, index) => {
        formData.append(`questions[${index}]`, value);
      });
      store
        .dispatch("Module/submitExam", formData)
        .then(() => {
          examQuestion.value = [];
        })
        .finally(() => {
          loading.value = false;
          window.location.reload();
        });
    }
    return { close, pushExamResults, submitExam, loading };
  },
};
</script>

<style lang="scss" scoped></style>
