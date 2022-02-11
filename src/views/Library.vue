<template>
  <div class="library view-padding">
    <DescriptionPages bgImage="library">
      <template #title>
        <h2 class="main-pages-title">المكتبــــه</h2>
      </template>
    </DescriptionPages>

    <educational-modules
      :linkName="link"
      :modules="modules"
    ></educational-modules>
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
    const link = ref("library");
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

<style lang="scss" scoped>
.library {
  .title-page {
    @extend %title-page;
  }
  // .modules {
  //   padding: 120px 0 80px;
  //   .cards {
  //     margin-bottom: 40px;
  //     .card-container {
  //       background-color: $bgcard;
  //       border-radius: $radius;
  //       padding: 15px 10px;
  //       transform-origin: top left;
  //       transition: 0.5s;
  //       position: relative;
  //       margin-bottom: 20px;

  //       &:hover {
  //         .photo {
  //           filter: contrast(1);
  //           .img {
  //             transform: scale(1.1);
  //           }
  //           .go-to-details {
  //             clip-path: circle(100%);
  //           }
  //         }
  //       }
  //       .photo {
  //         height: 230px;
  //         overflow: hidden;
  //         position: relative;
  //         filter: contrast(0.8);
  //         transition: 0.5s;
  //         .img {
  //           transition: 0.5s;
  //           border-radius: $radius;
  //         }
  //       }
  //       .body {
  //         padding: 20px 10px 0;
  //         position: relative;
  //         z-index: 2;
  //         .title {
  //           color: $maincolor;
  //           text-align: center;
  //           font-weight: bold;
  //         }
  //         .text {
  //           @extend %p;
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>
