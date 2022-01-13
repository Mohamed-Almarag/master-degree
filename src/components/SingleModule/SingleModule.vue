<template>
  <div class="single-module">
    <div class="container">
      <div class="content-container">
        <div class="tabs-buttons">
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
            التقويم
          </button>
        </div>
        <div class="active-component">
          <keep-alive>
            <component :is="activeComponent"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
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
    const activeComponent = ref("TheObjectives");
    return { activeComponent };
  },
};
</script>
<style lang="scss" scoped>
.single-module {
  padding: 70px 0;
  height: 100vh;
  // background-color: #e6e6e6;
  .content-container {
    // background-color: #fff;
    .tabs-buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 20px 0;
      background-color: #8a8a8a;
      gap: 30px;
      .switch-button {
        padding: 10px 35px;
        border: none;
        background-color: #fff;
        border-radius: 5px;
        color: #6d6b6b;
        transition: 0.3s;
        outline: none;
        // box-shadow: inset 6.5em 0 0 0 #000;
        &:hover,
        &:focus {
          // box-shadow: inset 8em 0 0 0 #ffc107;
          box-shadow: inset -4em 0 0 0 #004773, inset 4em 0 0 0 #004773;
          // box-shadow: inset -4em 0 0 0 #ffc107, inset 4em 0 0 0 #ffc107;
          color: #fff;
        }
        &.active {
          background-color: #ffc107;
          color: #fff;
          // background-color: #d39e00;
        }
      }
    }
    .active-component {
      padding: 25px 10px;
      color: #6d6b6b;
    }
  }
}
</style>
