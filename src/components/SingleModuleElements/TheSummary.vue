<template>
  <div class="the-objectives">
    <div
      class="every-objective mb-5"
      v-for="item in moduleData.summary"
      :key="item.id"
    >
      <div class="all" v-if="item.category_id == categoryId">
        <h5 class="content-section-title">{{ item.title }}</h5>
        <div class="all-texts">
          <p class="active-text" v-html="item.description"></p>
        </div>
        <div class="all-audios" v-if="item.files">
          <div class="every-audio" v-for="file in item.files" :key="file.id">
            <h6 class="audio-title mb-3">{{ file.title }}</h6>
            <audio class="audio-sound" controls>
              <source :src="file.file" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useUserInfo } from "@/use/user-info";
export default {
  name: "TheSummary",
  setup() {
    const store = useStore();
    const { categoryId } = useUserInfo();
    const moduleData = computed(() => {
      return store.state.Module.singleModule;
    });
    return { moduleData, categoryId };
  },
};
</script>
<style lang="scss" scoped>
.the-objectives {
  .all {
    box-shadow: $simple-shadow;
    border-radius: $radius;
    padding: 20px;
  }
  .every-objective {
    // background-color: $bgcard;

    .all-texts {
      // * {
      //   margin-bottom: 0;
      // }
      .active-text {
        h2 {
          font-size: 16px;
        }
        img {
          max-width: 300px !important;
        }
      }
    }
    .all-audios {
      .every-audio {
        .audio-title {
          color: $textcolor;
        }
        // .audio-sound {
        //   background-color: $white;
        //   color: $textcolor;
        // }
      }
    }
  }
}
</style>
