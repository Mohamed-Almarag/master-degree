<template>
  <div class="about-container view-padding">
    <DescriptionPages>
      <template #title>
        <h2 class="title-page h1">عــــن البيئــــه</h2>
      </template>
    </DescriptionPages>
    <main-information></main-information>
    <supervising-doctors></supervising-doctors>
  </div>
</template>

<script>
import MainInformation from "@/components/ViewsPages/About/MainInformation.vue";
import SupervisingDoctors from "@/components/ViewsPages/About/SupervisingDoctors.vue";
export default {
  setup() {},
  components: {
    MainInformation,
    SupervisingDoctors,
  },
};
</script>

<style lang="scss" scoped>
.title-page {
  @extend %title-page;
}
</style>
