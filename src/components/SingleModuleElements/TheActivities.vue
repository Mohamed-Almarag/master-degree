<template>
  <div class="activities">
    <div
      class="all-activites mb-5"
      v-for="active in activites"
      :key="active.id"
    >
      <div class="words">
        <p class="active-text">
          {{ active.comment }}
        </p>
      </div>
      <div class="photo-container" v-if="active.file">
        <div class="images">
          <img
            draggable="false"
            :src="active.file"
            alt="active"
            class="w-100 h-100 d-block"
          />
        </div>
      </div>
      <div class="active-comments">
        <button
          @click="toogleComment(active.id)"
          class="d-block add-answer-comment"
        >
          <fa class="comment-icon" icon="comment" />
          <span>اضف اجابتك على النشاط</span>
        </button>

        <transition name="fade">
          <div
            class="replies clip-path"
            v-if="comment && active_id == active.id"
          >
            <div class="all-comments-container">
              <div
                class="all-comments"
                v-for="replay in active.reply"
                :key="replay.id"
              >
                <div class="comment-photo">
                  <img
                    class="comment-user-photo w-100 h-100"
                    v-if="replay.user.image"
                    :src="replay.user.image"
                    alt="replay"
                  />
                  <img
                    v-else
                    class="comment-user-photo w-100 h-100"
                    src="@/assets/images/default.png"
                    alt="user"
                  />
                </div>
                <div class="comment-user-words">
                  <div
                    class="
                      replay-details
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                    <h6 class="name">{{ replay.user.name }}</h6>
                    <fa
                      @click="getUserComment(replay)"
                      class="show-more-icon"
                      icon="eye"
                    />
                  </div>
                  <p class="text">{{ justSpecificWords(replay.body) }}</p>
                  <div class="pdf-or-image" v-if="replay.file !== null">
                    <img
                      v-if="!replay.file.endsWith('pdf')"
                      class="d-block user-comment-img"
                      :src="replay.file"
                      alt="img"
                    />
                    <a
                      class="d-block user-comment-pdf shadow-sm"
                      v-if="replay.file.endsWith('pdf')"
                      :href="replay.file"
                      download
                      ><fa class="pdf-icon" icon="download"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <!-- add student comment section  -->
            <div class="answers-comments">
              <div class="comment-container d-flex">
                <div class="user">
                  <img
                    v-if="image"
                    class="user-img w-100 h-100"
                    :src="image"
                    alt="user"
                  />
                  <img
                    v-else
                    class="user-img w-100 h-100"
                    src="@/assets/images/default.png"
                    alt="user"
                  />
                </div>
                <div class="comment-words">
                  <div
                    class="
                      input-container
                      d-flex
                      align-items-center
                      justify-content-between
                    "
                  >
                    <input
                      v-on:keyup.enter="submitComment(active.id)"
                      class="input d-block"
                      type="text"
                      v-model="answerData.body"
                    />
                    <div class="form-group choose-photo-container m-0">
                      <div class="choose-photo">
                        <label
                          class="upload-photo rounded-circle m-0"
                          for="photo"
                          ><fa class="icon" icon="image"
                        /></label>
                        <input
                          @change="useHandelUploadFileImage($event)"
                          class="file-input d-none"
                          type="file"
                          id="photo"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <transition name="fade">
                      <div
                        class="preview-img-comment clip-path"
                        v-if="imgPreviewUrl"
                      >
                        <fa
                          @click="cancelChangePhoto"
                          class="preview-icon-times"
                          icon="times"
                        />
                        <img
                          class="d-block preview-img w-100 h-100"
                          v-if="
                            imgPreviewUrl &&
                            imgPreviewUrl.includes('data:image')
                          "
                          :src="imgPreviewUrl"
                          alt="preview"
                        />
                        <a
                          class="d-block user-comment-pdf shadow-sm m-auto"
                          download
                          target="_blank"
                          v-if="
                            imgPreviewUrl &&
                            imgPreviewUrl.includes('data:application/pdf')
                          "
                          :href="imgPreviewUrl"
                          ><fa class="pdf-icon" icon="file-pdf"
                        /></a>
                      </div>
                    </transition>
                    <button
                      :disabled="isNotEmpty"
                      class="send-button"
                      @click="submitComment(active.id)"
                    >
                      ارسال
                      <fa class="send-icon" icon="paper-plane" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>

  <!-- student answer modal  -->
  <transition name="fade">
    <div
      v-if="studentAnswer"
      class="show-student-answer form-modal-container clip-path"
    >
      <div class="form-modal for-replay-item" v-if="replyItem">
        <fa
          @click="closetUserCommentModal"
          class="edit-icon cancel"
          icon="times"
        />
        <div class="user-information d-flex align-items-center">
          <img
            class="d-block img"
            :src="replyItem.user.image"
            :alt="replyItem.user.name"
          />
          <h6 class="name">{{ replyItem.user.name }}</h6>
        </div>
        <p class="active-text mt-3 mb-3">{{ replyItem.body }}</p>
        <div class="pdf-or-image" v-if="replyItem.file != null">
          <img
            v-if="!replyItem.file.endsWith('pdf')"
            class="d-block show user-comment-img"
            :src="replyItem.file"
            alt="img"
          />
          <a
            class="d-block user-comment-pdf shadow-sm"
            v-if="replyItem.file.endsWith('pdf')"
            :href="replyItem.file"
            download
            ><fa class="pdf-icon" icon="download"
          /></a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { useUserInfo } from "@/use/user-info";
import useChangePhoto from "@/use/choose-image";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref, onMounted, computed, reactive } from "vue";
import { postMethods } from "@/axios/helpers";
export default {
  name: "TheActivities",
  setup() {
    const store = useStore();
    const route = useRoute();
    const { name, id, image } = useUserInfo();
    const forChangePhoto = useChangePhoto();
    const knowimg = computed(() => {
      return forChangePhoto.img.value;
    });
    const answerData = reactive({
      activity_id: null,
      body: null,
      file: knowimg,
    });
    const isNotEmpty = computed(() => {
      if (answerData.body == null || "") {
        return true;
      } else {
        return false;
      }
    });
    const comment = ref(false);
    const studentAnswer = ref(false);
    const replyItem = ref({});
    const module_id = route.params.id;
    const active_id = ref(null);
    function toogleComment(id) {
      active_id.value = id;
      comment.value = !comment.value;
    }
    function getUserComment(item) {
      studentAnswer.value = true;
      replyItem.value = item;
    }
    function closetUserCommentModal() {
      studentAnswer.value = false;
      replyItem.value = {};
    }
    function getActivities() {
      store.dispatch("Module/getActivities", {
        module_id: module_id,
      });
    }
    function submitComment(id) {
      let payload = new FormData();
      payload.append("activity_id", id);
      payload.append("body", answerData.body);
      payload.append("file", answerData.file);
      postMethods("student/activity/reply", payload)
        .then((response) => {
          console.log(response.status);
          if (response.status == 200) {
            getActivities();
            forChangePhoto.imgPreviewUrl.value = null;
            forChangePhoto.img.value = null;
            answerData.body = null;
            answerData.activity_id = null;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    const userReply = computed(() => {
      return replyItem.value;
    });
    const activites = computed(() => {
      return store.state.Module.activites;
    });
    onMounted(() => {
      getActivities();
    });
    return {
      store,
      module_id,
      comment,
      toogleComment,
      activites,
      active_id,
      image,
      id,
      name,
      getUserComment,
      closetUserCommentModal,
      userReply,
      replyItem,
      studentAnswer,
      answerData,
      ...forChangePhoto,
      submitComment,
      knowimg,
      isNotEmpty,
    };
  },
};
</script>
<style lang="scss" scoped>
.activities {
  // background-color: $bgcard;
  .all-activites {
    // margin-bottom: 50px;
    max-width: 900px;
    margin: auto;
    box-shadow: $box-shadow;
    color: $textcolor;
    padding: 20px;
    border-radius: $radius;
    .photo-container {
      .images {
        width: 70%;
        margin: 30px auto 20px;
      }
    }
    .active-comments {
      margin-top: 20px;
      .all-comments-container {
        max-height: 300px;
        overflow: auto;
      }
      // the activites replaies
      .replies {
        .all-comments {
          display: flex;
          margin-top: 20px;
          gap: 5px;
          .comment-photo {
            width: 40px;
            height: 40px;
            .comment-user-photo {
              border-radius: 50%;
            }
          }
          .comment-user-words {
            background-color: $bgcard;
            padding: 5px 10px;
            border-radius: 10px;
            min-width: 30%;
            color: $textcolor;
            // width: calc(100% - 40px);
            .replay-details {
              .name {
                color: $headcolor;
              }
              .show-more-icon {
                cursor: pointer;
              }
            }
            .text {
              margin: 0;
            }
          }
        }
      }
      // the answers comments
      .answers-comments {
        // background-color: #ccc;
        .comment-container {
          // align-items: center;
          gap: 5px;
          margin-top: 20px;
          .user {
            width: 40px;
            height: 40px;
            .user-img {
              border-radius: 50%;
            }
          }
          .comment-words {
            width: calc(100% - 40px);
            .input-container {
              border: 1px solid $bordercolor;
              padding: 5px 10px;
              border-radius: 10px;
              .input {
                width: 95%;
                border: none;
                outline: none;
                color: $textcolor;
              }
              .image {
                cursor: pointer;
              }
            }
            .upload-photo {
              cursor: pointer;
              transition: $transition;
              &:hover {
                color: $secondcolor;
              }
            }
            .preview-img-comment {
              max-width: 180px;
              max-height: 180px;
              position: relative;
              margin: 20px 20px 0;
              padding: 10px;
              background-color: $bgcard;
              border-radius: 10px;

              .preview-img {
                max-width: 160px;
                max-height: 160px;
              }
            }
            .send-button {
              background-color: $maincolor;
              padding: 8px 16px;
              border: none;
              border-radius: 10px;
              margin-top: 20px;
              color: $white;
              &:disabled {
                opacity: 0.7;
                pointer-events: none;
              }
              .send-icon {
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
}
.pdf-or-image {
  margin-top: 10px;
  .user-comment-img {
    width: 100px;
    height: 100px;
    border-radius: 5px;
    &.show {
      width: 300px;
      height: 300px;
    }
  }
  .user-comment-pdf {
    background-color: $white;
    transition: $transition;
    color: $textcolor;
    width: 40px;
    padding: 5px 10px;
    border-radius: 5px;
    text-align: center;
    &:hover {
      background-color: $secondcolor;
      color: $white;
    }
  }
}
.user-comment-pdf {
  background-color: $white;
  transition: $transition;
  color: $textcolor;
  width: 40px;
  padding: 5px 10px;
  border-radius: 5px;
  text-align: center;
  &:hover {
    background-color: $secondcolor;
    color: $white;
  }
}
.show-student-answer {
  .user-information {
    color: $textcolor;
    gap: 10px;
    .img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      object-fit: cover;
    }
    .name {
    }
  }
}
</style>
