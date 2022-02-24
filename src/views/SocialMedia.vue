<template>
  <div class="view-padding social-media">
    <div class="container">
      <div class="all-posts">
        <div>
          <button class="add-post-btn d-block" @click="showAddPost">
            اضافة منشور جديد
          </button>
        </div>
        <AddPost @fortest="testing" @close="showAddPost" :show="show"></AddPost>
        <!-- START POST CONTAINER  -->
        <div
          class="post-container shadow-sm"
          v-for="post in posts"
          :key="post.id"
        >
          <!-- start part one post header  -->
          <div class="header d-flex justify-content-between align-items-center">
            <div class="post-author">
              <img src="" alt="" />
              <h5>{{ post.user.name }}</h5>
            </div>
            <div class="post-actions" v-if="id == post.user.id">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  ...
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li class="li-item">
                    <a class="dropdown-item" href="#">تعديل</a>
                  </li>
                  <li class="li-item">
                    <a class="dropdown-item" href="#">حذف</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end part one post header  -->
          <!-- start part two post body  -->
          <div class="body">
            <p class="active-text">{{ post.body }}</p>
            <img class="img" :src="post.image" alt="" />
          </div>
          <!-- end part two post body  -->
        </div>
        <!-- END POST CONTAINER  -->
      </div>
    </div>
  </div>
</template>

<script>
import { useUserInfo } from "@/use/user-info";
import AddPost from "@/components/Social/AddPost.vue";
import { useStore } from "vuex";
import { ref, onMounted, computed } from "vue";
export default {
  name: "SocialMedia",
  components: {
    AddPost,
  },
  setup() {
    const { name, id, image } = useUserInfo();
    const store = useStore();
    const show = ref(false);
    const posts = computed(() => {
      return store.state.Social.posts;
    });
    onMounted(() => {
      store.dispatch("Social/getPosts");
    });
    function showAddPost() {
      show.value = !show.value;
    }
    function testing() {
      console.log("fortest");
      // console.log(event.target.value);
    }
    //
    return { name, id, image, testing, showAddPost, show, posts };
  },
};
</script>

<style lang="scss" scoped>
.social-media {
  background-color: $bgcard;
}
.all-posts {
  color: $textcolor;
  padding-bottom: 50px;
  .add-post-btn {
    background-color: $white;
    width: 300px;
    margin: auto;
    padding: 10px 0;
    border: none;
    border-radius: $radius;
    color: $textcolor;
    transition: $transition;
    box-shadow: $box-shadow;
    &:hover {
      background-color: $maincolor;
      color: $white;
      // background-color: $maincolor;
    }
  }
  .post-container {
    background-color: $white;
    max-width: 800px;
    margin: 50px auto 0;
    padding: 20px;
    border-radius: $radius;
    .header {
      .post-actions {
        color: $textcolor;

        .dropdown {
          .btn {
            border: none;
            width: 30px;
            height: 30px;
            transition: $transition;
            text-align: center;
            color: $textcolor;
            padding: 0;
            font-weight: bold;
            letter-spacing: 3px;
            background: none;
            border-radius: 50%;
            display: grid;
            &:hover {
              background-color: $bgcard;
            }
            &:focus {
              outline: none;
              box-shadow: unset;
            }
            &::after {
              display: none;
            }
          }
        }
        .dropdown-menu {
          top: auto !important;
          transform: unset !important;
          // margin-top: 5px !important;
          padding: 10px 0 !important;
          width: 100px;
          box-shadow: $simple-shadow;
          // background-color: $bgcard;
          border: none;
          .li-item {
            .dropdown-item {
              padding: 8px;
              color: $textcolor;
              transition: $transition;
              &:hover {
                background-color: $maincolor;
                color: $white;
              }
            }
          }
        }
      }
    }
    .body {
      .active-text {
      }
      .img {
        max-width: 100%;
        margin: 20px auto;
        height: 400px;
      }
    }
  }
}
</style>
