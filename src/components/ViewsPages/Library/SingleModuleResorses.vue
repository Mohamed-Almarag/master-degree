<template>
  <div class="view-padding pb-5">
    <div class="container">
      <div class="row">
        <div
          class="books mb-4 col-md-6"
          v-for="book in resourses"
          :key="book.id"
        >
          <div class="book-container">
            <h6 class="title">{{ book.title }}</h6>
            <a :href="book.file" download>Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
export default {
  name: "SingleModuleResorses",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const moduleId = route.params.id;
    const store = useStore();
    const resourses = computed(() => {
      return store.state.Library.books;
    });
    onMounted(() => {
      store.dispatch("Library/getBooks", { module_id: moduleId });
      //
    });
    return { router, route, resourses };
  },
};
</script>

<style lang="scss" scoped>
.books {
  .book-container {
    box-shadow: $simple-shadow;
    padding: 20px 10px;
    border-radius: $radius;
    .title {
      color: $textcolor;
    }
  }
}
</style>
