<template>
  <div class="view-padding social-media">
    <div class="container">
      <div class="all-posts">
        <div>
          <button class="add-post-btn d-block" @click="showAddPost">
            اضافة منشور جديد
          </button>
        </div>
        <AddPost
          :addMode="addMode"
          ref="post"
          @close="showAddPost"
          :show="show"
        ></AddPost>
        <ConfirmationModal
          :cancel="cancelDeletepost"
          :sure="deletePost"
          :showConfirm="showConfirm"
          :savebtntext="savebtntext"
          :typeelement="typeelement"
        ></ConfirmationModal>
        <ConfirmationModal
          :cancel="cancelDeleteComment"
          :sure="deleteComment"
          :showConfirm="showCommentConfirm"
          :savebtntext="savebtntext"
          :typeelement="typeelements"
        ></ConfirmationModal>
        <ConfirmationModal
          :cancel="cancelDeleteReply"
          :sure="deleteReply"
          :showConfirm="showReplyConfirm"
          :savebtntext="savebtntext"
          :typeelement="typeelementss"
        ></ConfirmationModal>

        <!-- START POST CONTAINER  -->
        <div
          class="post-container shadow-sm"
          v-for="post in posts"
          :key="post.id"
        >
          <!-- start part one post header  -->
          <div class="header d-flex justify-content-between align-items-center">
            <div class="post-author d-flex align-items-center" v-if="post.user">
              <img
                v-if="post.user.image"
                class="author-image rounded-circle d-block"
                :src="post.user.image"
                alt="user"
              />
              <img
                v-else
                class="author-image rounded-circle d-block"
                src="@/assets/images/default.png"
                alt="user"
              />

              <h5 class="author-name">{{ post.user.name }}</h5>
            </div>
            <div class="post-actions" v-if="post.user_id == id">
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
                    <a
                      @click="editPostData(post.id)"
                      class="dropdown-item"
                      href="javascript:void(0)"
                      >تعديل المنشور</a
                    >
                  </li>
                  <li class="li-item">
                    <a
                      @click="showDeletepostConfirm(post.id)"
                      class="dropdown-item"
                      href="javascript:void(0)"
                      >حذف المنشور</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end part one post header  -->
          <!-- start part two post body  -->
          <div class="body" v-if="post">
            <p class="active-text">{{ post.body }}</p>
            <img class="img" :src="post.image" alt="" />
          </div>
          <!-- end part two post body  -->
          <!-- Start Post Comments  -->
          <div class="the-post-comments">
            <button
              @click="toogleComment(post.id)"
              class="d-block add-answer-comment"
            >
              <fa class="comment-icon" icon="comment" />
              <span>اضف تعليقك</span>
            </button>
            <transition name="fade">
              <div
                class="all-comments-container mt-4 clip-path"
                v-if="comment && post_id == post.id"
              >
                <div
                  class="all-comments"
                  v-for="comment in post.comments"
                  :key="comment.id"
                >
                  <div v-if="comment" class="main-content-of-post d-flex mb-1">
                    <div class="part-one-photo" v-if="comment.user">
                      <img
                        v-if="comment.user.image"
                        :src="comment.user.image"
                        class="img rounded-circle"
                        :alt="comment.user.name"
                      />
                      <img
                        v-else
                        src="@/assets/images/default.png"
                        class="img rounded-circle"
                        alt="student"
                      />
                    </div>
                    <div class="part-two-texts">
                      <div class="content-comment">
                        <div
                          class="
                            title-and-dropdown
                            d-flex
                            justify-content-between
                          "
                        >
                          <span class="d-block title">{{
                            comment.user.name
                          }}</span>
                          <div class="dropdown" v-if="comment.user.id == id">
                            <button
                              class="btn btn-secondary dropdown-toggle"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              ...
                            </button>
                            <ul
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuButton"
                            >
                              <li class="li-item">
                                <a
                                  @click="
                                    toggleUpdateCommentBox(comment.id),
                                      getCommentToEdit(post.id, comment.id)
                                  "
                                  class="dropdown-item"
                                  href="javascript:void(0)"
                                  >تعديل التعليق</a
                                >
                              </li>
                              <li class="li-item">
                                <a
                                  @click="showDeleteCommentConfirm(comment.id)"
                                  class="dropdown-item"
                                  href="javascript:void(0)"
                                  >حذف التعليق</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p class="text-comment-body">{{ comment.body }}</p>
                        <transition name="fade">
                          <div
                            class="edit-post clip-path"
                            v-if="
                              update_for_comment &&
                              update_comment_id == comment.id
                            "
                          >
                            <div class="our-comment">
                              <div class="main-input-container for-update">
                                <input
                                  @keyup.enter="updateComment(comment.id)"
                                  v-model="commentData.comment_reply"
                                  class="w-100 comment-input"
                                  type="text"
                                />
                              </div>
                            </div>
                          </div>
                        </transition>
                      </div>
                      <!-- Start  all replaies -->
                      <div class="all-replies-container" v-if="comment.replies">
                        <div class="all-replies">
                          <div
                            class="main-content-of-post d-flex"
                            v-for="reply in comment.replies"
                            :key="reply.id"
                          >
                            <div class="part-one-photo" v-if="reply.user">
                              <img
                                v-if="reply.user.image"
                                :src="reply.user.image"
                                class="img rounded-circle"
                                :alt="reply.user.name"
                              />
                              <img
                                v-else
                                src="@/assets/images/default.png"
                                class="img rounded-circle"
                                alt="student"
                              />
                            </div>
                            <div class="part-two-texts">
                              <div class="content-comment">
                                <div
                                  class="
                                    title-and-dropdown
                                    d-flex
                                    justify-content-between
                                  "
                                >
                                  <span class="d-block title">{{
                                    reply.user.name
                                  }}</span>
                                  <div
                                    class="dropdown"
                                    v-if="reply.user.id == id"
                                  >
                                    <button
                                      class="btn btn-secondary dropdown-toggle"
                                      type="button"
                                      id="dropdownMenuButton"
                                      data-toggle="dropdown"
                                      aria-expanded="false"
                                    >
                                      ...
                                    </button>
                                    <ul
                                      class="dropdown-menu"
                                      aria-labelledby="dropdownMenuButton"
                                    >
                                      <li class="li-item">
                                        <!-- getCommentToEdit(
                                                post.id,
                                                comment.id
                                              ) -->
                                        <a
                                          @click="
                                            toggleUpdateReplyBox(reply.id),
                                              getReplyToEdit(
                                                post.id,
                                                comment.id,
                                                reply.id
                                              )
                                          "
                                          class="dropdown-item"
                                          href="javascript:void(0)"
                                          >تعديل الرد</a
                                        >
                                      </li>

                                      <li class="li-item">
                                        <a
                                          @click="
                                            showDeleteReplyConfirm(reply.id)
                                          "
                                          class="dropdown-item"
                                          href="javascript:void(0)"
                                          >حذف الرد</a
                                        >
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <p class="text-comment-body">
                                  {{ reply.body }}
                                </p>
                                <transition name="fade">
                                  <div
                                    class="edit-post clip-path"
                                    v-if="
                                      update_for_reply &&
                                      update_replay_id == reply.id
                                    "
                                  >
                                    <div class="our-comment">
                                      <div
                                        class="main-input-container for-update"
                                      >
                                        <input
                                          @keyup.enter="updateReply(reply.id)"
                                          v-model="commentData.body_reply"
                                          class="w-100 comment-input"
                                          type="text"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </transition>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- Start Replaies  -->
                        <div class="all-comment-replies">
                          <span
                            class="span-reply"
                            @click="toogleReplay(comment.id)"
                            >رد</span
                          >
                          <transition name="fade">
                            <div
                              class="clip-path"
                              v-if="replay && replay_id == comment.id"
                            >
                              <div
                                class="d-flex our-comment align-items-center"
                              >
                                <div class="part-one-photo">
                                  <img
                                    v-if="image !== null"
                                    :src="image"
                                    class="img rounded-circle"
                                    :alt="name"
                                  />
                                  <img
                                    v-else
                                    src="@/assets/images/default.png"
                                    class="img rounded-circle"
                                    alt="student"
                                  />
                                </div>
                                <div class="main-input-container">
                                  <input
                                    @keyup.enter="
                                      submitReply(post.id, comment.id)
                                    "
                                    v-model="commentData.body"
                                    class="w-100 comment-input"
                                    type="text"
                                  />
                                </div>
                              </div>
                            </div>
                          </transition>
                          <!-- End Replaies  -->
                        </div>
                      </div>
                      <!-- End all replaies -->
                    </div>
                  </div>
                </div>
                <div class="add-comment">
                  <div class="d-flex our-comment align-items-center">
                    <div class="part-one-photo">
                      <img
                        v-if="image !== null"
                        :src="image"
                        class="img rounded-circle"
                        :alt="name"
                      />
                      <img
                        v-else
                        src="@/assets/images/default.png"
                        class="img rounded-circle"
                        alt="student"
                      />
                    </div>
                    <div class="main-input-container">
                      <input
                        @keyup.enter="submitComment(post.id)"
                        v-model="commentData.body"
                        class="w-100 comment-input"
                        type="text"
                      />
                      <!-- <button>send</button> -->
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <!-- End Post Comments  -->
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
import { ref, onMounted, computed, nextTick, reactive } from "vue";
export default {
  name: "SocialMedia",
  components: {
    AddPost,
  },
  setup() {
    const { name, id, image } = useUserInfo();
    const store = useStore();
    const show = ref(false);
    const post = ref(null);
    const savebtntext = ref("تاكيد");
    const typeelement = ref("البوست");
    const showConfirm = ref(false);
    const getPostId = ref(null);
    const addMode = ref(true);
    // Start Comments And Replies
    const comment = ref(false);
    const post_id = ref(null);
    const commentData = reactive({
      post_id: null,
      body: null,
      comment_id: null,
      parent_id: null,
      // For Edit Comment or Reply
      comment_reply: null,
      body_reply: null,
    });
    const update_for_comment = ref(false);
    const update_comment_id = ref(null);
    const typeelements = ref("التعليق");
    const showCommentConfirm = ref(false);
    const getCommentId = ref(null);
    const everyCommentId = computed(() => {
      return getCommentId.value;
    });
    // Replies
    const replay = ref(false);
    const replay_id = ref(null);
    const update_for_reply = ref(false);
    const update_replay_id = ref(null);
    const showReplyConfirm = ref(false);
    const getReplyId = ref(null);
    const typeelementss = ref("الرد");
    const everyReplyId = computed(() => {
      return getReplyId.value;
    });
    // End Comments And Replies

    const posts = computed(() => {
      return store.state.Social.posts;
    });
    const everyPostId = computed(() => {
      return getPostId.value;
    });
    // const name = ref(null);
    // const id = ref(null);
    // const image = ref(null);
    // , id, image
    onMounted(() => {
      store.dispatch("Social/getPosts");
      // let userData = JSON.parse(localStorage.getItem("student-data")).data;
      // name.value = userData.name;
      // id.value = userData.id;
      // image.value = userData.image;
      // console.log(userData.id);
    });
    // Start for Post [ ADD -  EDIT - DELETE]
    function showAddPost() {
      show.value = !show.value;
      addMode.value = true;
    }
    function editPostData(id) {
      show.value = true;
      addMode.value = false;
      nextTick(function () {
        post.value.gtePostForEdit(id);
      });
    }
    function showDeletepostConfirm(id) {
      showConfirm.value = !showConfirm.value;
      getPostId.value = id;
    }
    function cancelDeletepost() {
      showConfirm.value = !showConfirm.value;
      getPostId.value = null;
    }
    function deletePost() {
      store.dispatch("Social/deletePost", everyPostId.value).then(() => {
        showConfirm.value = !showConfirm.value;
      });
    }
    // End for Post [ ADD -  EDIT - DELETE]
    // Start For Comments And Replay
    function toogleComment(id) {
      post_id.value = id;
      comment.value = !comment.value;
    }
    function toggleUpdateCommentBox(id) {
      update_comment_id.value = id;
      update_for_comment.value = !this.update_for_comment;
    }
    function submitComment(id) {
      let payload = new FormData();
      payload.append("post_id", id);
      payload.append("body", commentData.body);
      store.dispatch("Social/addComment", payload).then(() => {
        commentData.body = null;
        store.dispatch("Social/getPosts");
      });
    }
    function getCommentToEdit(id, commentid) {
      store.dispatch("Social/getPosts").then((response) => {
        let data = response.data.data;
        data.find((item) => {
          if (item.id == id) {
            let comments = item.comments;
            comments.filter((com) => {
              if (com.id == commentid) {
                commentData.comment_reply = com.body;
              }
            });
          }
        });
      });
    }
    function updateComment(id) {
      let payload = new FormData();
      payload.append("comment_id", id);
      payload.append("body", commentData.comment_reply);
      store.dispatch("Social/editComment", payload).then(() => {
        commentData.comment_reply = null;
        update_for_comment.value = false;
        store.dispatch("Social/getPosts");
      });
    }
    function deleteComment() {
      store
        .dispatch("Social/deleteComment", { comment_id: everyCommentId.value })
        .then(() => {
          showCommentConfirm.value = !showCommentConfirm.value;
          store.dispatch("Social/getPosts");
        });
    }
    function showDeleteCommentConfirm(id) {
      showCommentConfirm.value = !showCommentConfirm.value;
      getCommentId.value = id;
    }
    function cancelDeleteComment() {
      showCommentConfirm.value = !showCommentConfirm.value;
      getCommentId.value = null;
    }
    // Replaies
    function toogleReplay(id) {
      replay_id.value = id;
      replay.value = !replay.value;
    }
    function toggleUpdateReplyBox(id) {
      update_replay_id.value = id;
      update_for_reply.value = !this.update_for_reply;
    }
    function submitReply(post_id, reply_id) {
      let payload = new FormData();
      payload.append("post_id", post_id);
      payload.append("body", commentData.body);
      payload.append("parent_id", reply_id);
      store.dispatch("Social/addComment", payload).then(() => {
        commentData.body = null;
        store.dispatch("Social/getPosts");
      });
    }
    function getReplyToEdit(id, commentid, reply_id) {
      store.dispatch("Social/getPosts").then((response) => {
        let data = response.data.data;
        data.find((item) => {
          if (item.id == id) {
            let comments = item.comments;
            comments.filter((com) => {
              if (com.id == commentid) {
                let replies = com.replies;
                replies.find((rep) => {
                  if (rep.id == reply_id) {
                    commentData.body_reply = rep.body;
                  }
                });
              }
            });
          }
        });
      });
    }
    function updateReply(id) {
      let payload = new FormData();
      payload.append("comment_id", id);
      payload.append("body", commentData.body_reply);
      store.dispatch("Social/editComment", payload).then(() => {
        commentData.body_reply = null;
        update_for_reply.value = false;
        store.dispatch("Social/getPosts");
      });
    }
    function showDeleteReplyConfirm(id) {
      showReplyConfirm.value = !showReplyConfirm.value;
      getReplyId.value = id;
    }
    function deleteReply() {
      store
        .dispatch("Social/deleteComment", { comment_id: everyReplyId.value })
        .then(() => {
          showReplyConfirm.value = !showReplyConfirm.value;
          store.dispatch("Social/getPosts");
        });
    }
    function cancelDeleteReply() {
      showReplyConfirm.value = !showReplyConfirm.value;
      getReplyId.value = null;
    }
    // End For Comments And Replay
    return {
      name,
      id,
      image,
      editPostData,
      post,
      showAddPost,
      show,
      posts,
      showConfirm,
      showDeletepostConfirm,
      savebtntext,
      typeelement,
      deletePost,
      getPostId,
      everyPostId,
      cancelDeletepost,
      addMode,
      post_id,
      // Comment
      comment,
      toogleComment,
      submitComment,
      commentData,
      toggleUpdateCommentBox,
      update_for_comment,
      update_comment_id,
      getCommentToEdit,
      typeelements,
      showCommentConfirm,
      getCommentId,
      everyCommentId,
      deleteComment,
      showDeleteCommentConfirm,
      cancelDeleteComment,
      updateComment,
      // Replay
      replay,
      replay_id,
      update_replay_id,
      update_for_reply,
      toogleReplay,
      toggleUpdateReplyBox,
      submitReply,
      showDeleteReplyConfirm,
      cancelDeleteReply,
      deleteReply,
      showReplyConfirm,
      typeelementss,
      everyReplyId,
      getReplyToEdit,
      updateReply,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/partils/pages/socialmedia.scss";
</style>
