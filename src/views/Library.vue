<template>
  <div class="library view-padding">
    <DescriptionPages bgImage="library">
      <template #title>
        <h2 class="title-page h1">المكتبــــه</h2>
      </template>
    </DescriptionPages>
    <div class="modules">
      <div class="container">
        <div class="row">
          <div
            class="cards col-md-4 col-sm-6"
            v-for="item in modules"
            :key="item.id"
          >
            <div class="card-container">
              <div
                class="photo d-flex justify-content-center align-items-center"
              >
                <img
                  :src="item.img"
                  :alt="item.title"
                  class="img w-100 h-100"
                />
              </div>
              <div class="body">
                <h4 class="title">{{ item.title }}</h4>
                <p class="text">{{ item.description }}</p>
                <router-link
                  class="link custom-btn d-block"
                  :to="`/library/${item.id}`"
                  >للمزيد</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Library",
  setup() {
    const modules = ref([
      {
        id: "1",
        title: "الموديول السمعى",
        description:
          "يمكنك الاطلاع على جميع المصادر وامراجع الخاصه بكل ما يتعلق بمصادر ومراجع الموديول السمعى",
        img: "https://i.im.ge/2021/12/09/oWV9PK.png",
      },
      {
        id: "2",
        title: "الموديول البصرى",
        description:
          "يمكنك الاطلاع على جميع المصادر وامراجع الخاصه بكل ما يتعلق بمصادر ومراجع الموديول البصرى",
        img: "https://i.im.ge/2021/12/09/oWV9PK.png",
      },
      {
        id: "3",
        title: "الموديول الحركى",
        description:
          "يمكنك الاطلاع على جميع المصادر وامراجع الخاصه بكل ما يتعلق بمصادر ومراجع الموديول الحركى",
        img: "https://i.im.ge/2021/12/09/oWV9PK.png",
      },
    ]);
    return { modules };
  },
};
</script>

<style lang="scss" scoped>
.library {
  .title-page {
    @extend %title-page;
  }
  .modules {
    padding: 120px 0 80px;
    .cards {
      margin-bottom: 40px;
      .card-container {
        background-color: $bgcard;
        border-radius: $radius;
        padding: 15px 10px;
        transform-origin: top left;
        transition: 0.5s;
        position: relative;
        margin-bottom: 20px;

        &:hover {
          .photo {
            filter: contrast(1);
            .img {
              transform: scale(1.1);
            }
            .go-to-details {
              clip-path: circle(100%);
            }
          }
        }
        .photo {
          height: 230px;
          overflow: hidden;
          position: relative;
          filter: contrast(0.8);
          transition: 0.5s;
          .img {
            transition: 0.5s;
            border-radius: $radius;
          }
        }
        .body {
          padding: 20px 10px 0;
          position: relative;
          z-index: 2;
          .title {
            color: $maincolor;
            text-align: center;
            font-weight: bold;
          }
          .text {
            @extend %p;
          }
        }
      }
    }
  }
}
</style>
