<template>
  <div class="the-objectives">
    <h1>الاهداف</h1>
    <div v-for="(item, index) in data" :key="index">
      <p>{{ item }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TheObjectives",
  setup() {
    const data = ref([
      "تعريف الفيديو الرقمي",
      "مزايا الفيديو التعليمي الرقمي",
      "فوائد استخدام الفيديو التعليمي الرقمي في العملية التعليمية",
      "تحليل الحاجات التعليمية للمتعلمين المستهدفين من الفيديو التعليمي الرقمي",
      "تحليل خصائص المتعلمين المستهدفين من الفيديو التعليمي الرقمي",
    ]);
    return { data };
  },
};
</script>

<style lang="scss" scoped></style>
