<template>
  <div class="details-content view-padding">
    <DescriptionPages bgImage="Content">
      <template #title>
        <h2 class="main-pages-title">الموديولات التعليميه</h2>
      </template>
    </DescriptionPages>
    <educational-modules
      :linkName="link"
      :modules="modules"
    ></educational-modules>
    <router-link :to="{ name: 'LearningStyle' }"
      >تحديد أسلوب التعلم</router-link
    >
  </div>
</template>

<script>
import EducationalModules from "@/components/DetailsContentPage/EducationalModules.vue";
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
export default {
  name: "DetailsContent",
  components: {
    EducationalModules,
  },
  setup() {
    const store = useStore();
    const link = ref("details-content");
    const modules = computed(() => {
      return store.state.Module.models;
    });
    onMounted(() => {
      store.dispatch("Module/getModels");
    });
    return { modules, link };
  },
};
</script>

<style lang="scss" scoped></style>
