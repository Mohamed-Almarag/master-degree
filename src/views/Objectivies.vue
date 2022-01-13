<template>
  <div class="objectivies view-padding">
    <DescriptionPages>
      <template #title>
        <h2 class="title-page h1">الأهــــداف</h2>
      </template>
    </DescriptionPages>
    <div class="container">
      <GlobalObjective></GlobalObjective>
      <ObjectivesLevels></ObjectivesLevels>
    </div>
  </div>
</template>

<script>
import GlobalObjective from "@/components/ViewsPages/Objectiveies/GlobalObjective.vue";
import ObjectivesLevels from "@/components/ViewsPages/Objectiveies/ObjectivesLevels.vue";
export default {
  name: "Objectivies",
  setup() {
    return {};
  },
  components: {
    GlobalObjective,
    ObjectivesLevels,
  },
};
</script>

<style lang="scss" scoped>
.title-page {
  @extend %title-page;
}
</style>
