<template>
  <div class="single-module view-padding">
    <div class="container">
      <div class="content-container">
        <div class="single-names mb-5">
          <h3 class="single-names-title content-section-title">
            {{ moduleData.name }}
          </h3>
          <p class="active-text">{{ moduleData.description }}</p>
        </div>
        <!-- <h3>{{ moduleData }}</h3> -->
        <div class="tabs-buttons mb-4">
          <button
            :class="[
              'switch-button',
              { active: activeComponent == 'TheObjectives' },
            ]"
            @click="
              {
                activeComponent = 'TheObjectives';
              }
            "
          >
            <fa class="icons" icon="bullseye" />
            الاهداف
          </button>
          <button
            :class="[
              'switch-button',
              { active: activeComponent == 'TheContent' },
            ]"
            @click="
              {
                activeComponent = 'TheContent';
              }
            "
          >
            <fa class="icons" icon="book-open" />
            المحتوى
          </button>
          <button
            :class="[
              'switch-button',
              { active: activeComponent == 'TheActivities' },
            ]"
            @click="
              {
                activeComponent = 'TheActivities';
              }
            "
          >
            <fa class="icons" icon="chalkboard-teacher" />
            الانشطه
          </button>
          <button
            :class="[
              'switch-button',
              { active: activeComponent == 'TheSummary' },
            ]"
            @click="
              {
                activeComponent = 'TheSummary';
              }
            "
          >
            <fa class="icons" icon="clipboard" />
            الملخص
          </button>
          <button
            :class="[
              'switch-button',
              { active: activeComponent == 'TheQuestions' },
            ]"
            @click="
              {
                activeComponent = 'TheQuestions';
              }
            "
          >
            <fa class="icons" icon="tasks" />
            التقويم
          </button>
        </div>
        <div class="active-component">
          <component :is="activeComponent"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserInfo } from "@/use/user-info";

import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, onMounted, computed } from "vue";
import TheObjectives from "@/components/SingleModuleElements/TheObjectives.vue";
import TheContent from "@/components/SingleModuleElements/TheContent.vue";
import TheActivities from "@/components/SingleModuleElements/TheActivities.vue";
import TheSummary from "@/components/SingleModuleElements/TheSummary.vue";
import TheQuestions from "@/components/SingleModuleElements/TheQuestions.vue";
export default {
  name: "SingleModule",
  components: {
    TheObjectives,
    TheContent,
    TheActivities,
    TheSummary,
    TheQuestions,
  },

  setup() {
    const { categoryId } = useUserInfo();
    const store = useStore();
    const activeComponent = ref("TheContent");
    const route = useRoute();
    const module_id = route.params.id;
    const category_id = categoryId;
    const moduleData = computed(() => {
      return store.state.Module.singleModule;
    });
    onMounted(() => {
      store.dispatch("Module/getSingleModuleData", {
        module_id: module_id,
        category_id: category_id,
      });
      store.dispatch("Module/getExams", {
        module_id: module_id,
      });
    });
    return { moduleData, activeComponent };
  },
};
</script>
<style lang="scss" scoped>
.single-module {
  .content-container {
    .tabs-buttons {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      padding: 20px;
      background-color: $bgcard;
      border-radius: $radius;

      .switch-button {
        padding: 10px 35px;
        border: none;
        background-color: $white;
        border-radius: 5px;
        color: $textcolor;
        transition: $transition;
        outline: none;
        border-radius: $radius;
        &.active,
        &:hover {
          background-color: $maincolor;
          color: $white;
        }
        .icons {
          margin: 0 0 0 7px;
        }
      }
    }
    .active-component {
      padding: 25px 10px;
      color: $textcolor;
    }
  }
}
</style>
