<template>
  <div class="view-padding pb-5">
    <div class="container">
      <div class="row">
        <div
          class="books mb-5 col-md-6"
          v-for="book in resourses"
          :key="book.id"
        >
          <div
            class="
              resources
              main-card-container
              d-flex
              justify-content-between
              align-items-center
              flex-wrap
            "
          >
            <h6 class="title">{{ book.title }}</h6>
            <a class="d-block download" :href="book.file" download>
              <span>تحميل</span>
              <fa class="icon" icon="download" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
export default {
  name: "SingleModuleResorses",
  setup() {
    const route = useRoute();
    const moduleId = route.params.id;
    const store = useStore();
    const resourses = computed(() => {
      return store.state.Library.books;
    });
    onMounted(() => {
      store.dispatch("Library/getBooks", { module_id: moduleId });
    });
    return { route, resourses };
  },
};
</script>

<style lang="scss" scoped></style>
