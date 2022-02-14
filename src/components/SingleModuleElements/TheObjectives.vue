<template>
  <div class="the-objectives">
    <div v-for="item in moduleData" :key="item.id">
      <p v-html="item.objectives"></p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "TheObjectives",
  setup() {
    const store = useStore();
    const moduleData = computed(() => {
      return store.state.Module.singleModule;
    });
    return { moduleData };
  },
};
</script>

<style lang="scss" scoped></style>
