<template>
  <div class="educational-modules">
    <DescriptionPages bgImage="library">
      <template #title>
        <h2 class="title-page h1">الموديولات التعليميه</h2>
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
              <div class="photo">
                <img :src="item.img" :alt="item.name" class="img w-100 h-100" />
                <div
                  class="
                    go-to-details
                    d-flex
                    justify-content-center
                    align-items-center
                  "
                ></div>
              </div>
              <div class="body">
                <h4 class="title">{{ item.name }}</h4>
                <p class="text">{{ item.description }}</p>
                <router-link
                  class="d-block link custom-btn"
                  :to="`/details-content/${item.id}`"
                >
                  المزيد</router-link
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
  name: "EducationalModules",
  components: {},
  setup() {
    const modules = ref([
      {
        id: 1,
        name: "الموديول الاول",
        description:
          "يمكنك الاطلاع على جميع المصادر وامراجع الخاصه بكل ما يتعلق بمصادر ومراجع الموديول الاول",
        img: "https://i.im.ge/2021/12/09/oWVZUr.png",
      },
      {
        id: 2,
        name: "الموديول الثانى",
        description:
          "يمكنك الاطلاع على جميع المصادر وامراجع الخاصه بكل ما يتعلق بمصادر ومراجع الموديول الاول",
        img: "https://i.im.ge/2021/12/09/oWfxby.png",
      },
      {
        id: 3,
        name: "الموديول الثالث",
        description:
          "يمكنك الاطلاع على جميع المصادر وامراجع الخاصه بكل ما يتعلق بمصادر ومراجع الموديول الاول",
        img: "https://i.im.ge/2021/12/09/oWVZUr.png",
      },
      {
        id: 4,
        name: "الموديول الرابع",
        description:
          "يمكنك الاطلاع على جميع المصادر وامراجع الخاصه بكل ما يتعلق بمصادر ومراجع الموديول الاول",
        img: "https://i.im.ge/2021/12/09/oWVZUr.png",
      },
      {
        id: 5,
        name: "الموديول الخامس",
        description:
          "يمكنك الاطلاع على جميع المصادر وامراجع الخاصه بكل ما يتعلق بمصادر ومراجع الموديول الاول",
        img: "https://i.im.ge/2021/12/09/oWfxby.png",
      },
      {
        id: 6,
        name: "الموديول السادس",
        description:
          "يمكنك الاطلاع على جميع المصادر وامراجع الخاصه بكل ما يتعلق بمصادر ومراجع الموديول الاول",
        img: "https://i.im.ge/2021/12/09/oWkJMJ.png",
      },
    ]);
    return { modules };
  },
};
</script>

<style lang="scss" scoped>
.educational-modules {
  .title-page {
    @extend %title-page;
  }
  .modules {
    padding: 120px 0 80px;
    .cards {
      margin-bottom: 20px;
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
