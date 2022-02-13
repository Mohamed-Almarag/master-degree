<template>
  <div>
    <div v-for="item in moduleData" :key="item.id">
      <p v-html="item.summary"></p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "TheSummary",
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
