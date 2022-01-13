<template>
  <div>
    <h1>تحديد أسلوب التعلم</h1>
    <router-link :to="{ name: 'LearningStyle' }"
      >تحديد أسلوب التعلم</router-link
    >
    <div v-for="item in items" :key="item.id">
      <p>{{ item.title }}</p>
      <!-- <p>{{ item.id }}</p> -->
      <!-- <p>{{ item.choose }}</p> -->
    </div>
    <!-- <div v-for="item in items.choose" :key="item.id">
      <input type="radio" name="fav_language" :value="item" />
      <label>{{ item.choose }}</label>
    </div> -->
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "LearningStyle",
  setup() {
    const items = ref([
      {
        id: 1,
        title: "السؤال الاول",
        choose: ["one", "two"],
      },
      {
        id: 2,
        title: "السؤال الثانى",
        choose: ["one", "two"],
      },
      {
        id: 3,
        title: "السؤال الثالث",
        choose: ["one", "two"],
      },
    ]);
    return { items };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
