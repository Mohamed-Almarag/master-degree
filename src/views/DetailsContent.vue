<template>
  <div class="details-content view-padding">
    <educational-modules :modules="modules"></educational-modules>
  </div>
</template>

<script>
import EducationalModules from "@/components/DetailsContentPage/EducationalModules.vue";
// import { ref } from "vue";
import { useStore } from "vuex";
import { onMounted, ref } from "vue";

export default {
  name: "DetailsContent",
  components: {
    EducationalModules,
  },
  setup() {
    const store = useStore();
    const modules = ref([]);
    onMounted(() => {
      store.dispatch("Module/getModels").then((res) => {
        modules.value = res.data.data;
        console.log(modules);
      });
    });
    return { modules };
  },
};
</script>

<style lang="scss" scoped></style>
