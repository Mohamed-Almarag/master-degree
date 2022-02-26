<template>
  <div class="the-contents">
    <transition name="fade">
      <div
        class="content-modal form-modal-container clip-path"
        v-if="hideModal"
      >
        <div class="form-modal form-content-modal" v-if="contentPopupData">
          <fa @click="closeModal" class="edit-icon cancel" icon="times" />
          <h3 class="title text-center">{{ contentPopupData.title }}</h3>
          <p class="active-text">{{ contentPopupData.description }}</p>
          <div class="img-container" v-if="contentPopupData.image">
            <img
              class="w-100 m-100 img"
              :src="contentPopupData.image"
              alt="image"
            />
          </div>
        </div>
      </div>
    </transition>
    <div
      class="every-content mb-5"
      v-for="item in contents.contents"
      :key="item.id"
    >
      <h5 class="content-section-title" v-if="item.title">{{ item.title }}</h5>
      <div class="all-points" v-if="item.point">
        <div class="ervery-point">
          <h6 class="point-title">{{ item.point.title }}</h6>
          <p
            class="links-container active-text"
            v-html="item.point.description"
          ></p>
        </div>
        <div class="all-audios" v-if="item.point.files.length >= 1">
          <div
            class="every-audio"
            v-for="audio in item.point.files"
            :key="audio.id"
          >
            <h6 class="audio-title mb-3">{{ audio.title }}</h6>
            <audio class="audio-sound" controls>
              <source :src="audio.file" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div class="all-links" v-for="link in item.point.links" :key="link.id">
          <div class="every-link d-flex align-items-center">
            <span class="d-block link-title">{{ link.title }}</span>
            <a
              class="d-block link-url resource"
              :href="link.url"
              target="_blank"
            >
              اضغط هنا
              <fa class="link-icon" icon="external-link-alt" />
            </a>
            <div class="dropdown">
              <button
                class="btn resource dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                شرح الرابط
                <fa class="link-icon" icon="eye" />
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <p class="active-text">{{ link.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";
import { ref, computed, onMounted } from "vue";
import { useUserInfo } from "@/use/user-info";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
// import axios from "axios";
import { getMethods } from "@/axios/helpers";
export default {
  name: "TheContent",
  setup() {
    const store = useStore();
    const contentPopupData = ref({});
    const hideModal = ref(false);
    function closeModal() {
      hideModal.value = !hideModal.value;
    }
    const { categoryId } = useUserInfo();
    const route = useRoute();
    const module_id = route.params.id;
    const category_id = categoryId;

    const contents = computed(() => {
      return store.state.Module.singleModule;
    });

    onMounted(() => {
      store
        .dispatch("Module/getSingleModuleData", {
          module_id: module_id,
          category_id: category_id,
        })
        .then(() => {
          let allLinks = document.querySelectorAll(".links-container");
          console.log(allLinks);
          let getItems = [];
          for (let index = 0; index < allLinks.length; index++) {
            const element = allLinks[index].getElementsByTagName("a");

            getItems.push(...element);
          }
          getItems.forEach((element) => {
            element.addEventListener("click", (e) => {
              e.preventDefault();
              let linkHref = e.target.getAttribute("href");
              console.log(linkHref);
              if (linkHref != null) {
                hideModal.value = true;
                getMethods(`${linkHref}`).then((res) => {
                  contentPopupData.value = res.data.data;
                  console.log(res.data.data);
                });
              }
            });
          });
        });
    });
    return {
      contentPopupData,
      hideModal,
      closeModal,
      contents,
    };
  },
};
</script>

<style lang="scss" scoped>
.the-contents {
  .content-modal {
    .form-content-modal {
      max-height: 85vh;
    }
    .img-container {
      width: 60%;
      // max-height: 300px;
      margin: 20px auto 0;
      padding: 10px;
      border-radius: $radius;
      background-color: $bgcard;
      .img {
        border-radius: $radius;
        // max-height: 300px;
      }
    }
  }
  .every-content {
    box-shadow: $simple-shadow;
    border-radius: $radius;
    padding: 20px;
    .all-audios {
      border-top: 1px solid $bordercolor;
      border-bottom: 1px solid $bordercolor;
      padding: 20px 0;
      margin: 50px 0;
      .every-audio {
        margin: 30px 0;
        .audio-sound {
          width: 50%;
        }
      }
    }
    .all-points {
      .ervery-point {
        // border-bottom: 1px solid $bordercolor;
        margin: 20px 0;
        .point-title {
          font-weight: bold;
        }
      }
    }
    .all-links {
      padding: 20px 0;
      .every-link {
        gap: 30px;
        .link-title {
        }
        .link-url {
          text-decoration: none;
        }
        .dropdown {
          .btn {
            box-shadow: none;
            &::after {
              display: none;
            }
          }
          .dropdown-menu {
            min-width: 350px;
            padding: 10px;
            box-shadow: $simple-shadow;
            top: 10px;
          }
        }
        .resource {
          background-color: $bgcard;
          padding: 8px 16px;
          border-radius: $radius;
          font-size: 16px;
          color: $textcolor;
          transition: $transition;
          &:hover {
            background-color: $maincolor;
            color: $white;
          }
        }
        .link-icon {
          margin-right: 7px;
        }
      }
    }
  }
}
</style>
