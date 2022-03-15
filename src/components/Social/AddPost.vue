<template>
  <transition name="fade">
    <div class="form-modal-container clip-path" v-if="show">
      <form
        action=""
        class="form-modal"
        :class="{ 'add-post': imgPreviewUrl != null }"
      >
        <fa @click="close" class="edit-icon cancel" icon="times" />
        <div class="form-group">
          <textarea
            class="form-input text-area"
            v-model="postData.body"
          ></textarea>
        </div>
        <div class="post-photo">
          <transition name="fade">
            <div class="preview-img-post clip-path" v-if="imgPreviewUrl">
              <fa
                @click="cancelChangePhoto"
                class="preview-icon-times"
                icon="times"
              />
              <img
                class="d-block preview-img w-100 h-100"
                :src="imgPreviewUrl"
                alt="preview"
              />
            </div>
          </transition>
          <div class="form-group choose-photo-container">
            <label class="choose-label d-block text-capitalize"
              >اختر صوره</label
            >
            <div class="choose-photo">
              <label class="upload-photo rounded-circle" for="photo"
                ><fa class="icon" icon="image"
              /></label>
              <input
                @change="useHandelUploadFileImage($event)"
                class="file-input"
                type="file"
                id="photo"
              />
            </div>
          </div>
        </div>
        <!-- @submit.prevent="submitPost" -->
        <button @click="submitPost" class="custom-btn d-block">
          {{ checkId }}
        </button>
      </form>
    </div>
  </transition>
</template>

<script>
import useChangePhoto from "@/use/choose-image";
import { reactive, computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "AddPost",
  // props
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    addMode: {
      type: Boolean,
      default: true,
    },
  },
  setup(props, { emit }) {
    const close = () => {
      emit("close");
    };
    const store = useStore();
    const forChangePhoto = useChangePhoto();
    const knowimg = computed(() => {
      return forChangePhoto.img.value;
    });
    const getPostId = ref(null);
    const postData = reactive({
      body: null,
      image: knowimg,
    });
    const checkId = computed(() => {
      return props.addMode ? "نشر" : "حفظ";
    });

    function submitPost() {
      let payload = new FormData();
      payload.append("body", postData.body);
      payload.append("image", postData.image);
      if (!props.addMode) {
        payload.append("post_id", getPostId.value);
      }
      const checkMode = props.addMode
        ? { name: "Social/addPost" }
        : { name: "Social/editPost" };
      store
        .dispatch(checkMode.name, payload)
        .then((response) => {
          if (response.status == 200) {
            window.location.reload();
            forChangePhoto.imgPreviewUrl.value = null;
            forChangePhoto.img.value = null;
            postData.body = null;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    function gtePostForEdit(id) {
      getPostId.value = id;
      store.dispatch("Social/getPostDataToEDit", id).then((response) => {
        postData.body = response.body;
        forChangePhoto.imgPreviewUrl.value = response.image;
      });
    }
    return {
      close,
      ...forChangePhoto,
      postData,
      knowimg,
      submitPost,
      gtePostForEdit,
      checkId,
    };
  },
};
</script>

<style lang="scss" scoped>
.post-photo {
  .preview-img-post {
    position: relative;
    max-width: 450px;
    margin: 0 auto 20px;
    background-color: $bgcard;
    padding: 10px;
    border-radius: $radius;
    max-height: 350px;
    .preview-img {
      max-width: 450px;
      max-height: 350px;
    }
  }
}
</style>
