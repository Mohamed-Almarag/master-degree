<template>
  <transition name="fade">
    <div class="form-modal-container clip-path" v-if="show">
      <form
        @submit.prevent="submitPost"
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
        <button class="custom-btn d-block">نشر</button>
      </form>
    </div>
  </transition>
</template>

<script>
import useChangePhoto from "@/use/choose-image";
import { reactive, computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "AddPost",
  props: {
    show: {
      type: Boolean,
      default: false,
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
    const postData = reactive({
      body: null,
      image: knowimg,
    });
    const fortest = (event) => {
      emit("fortest", event.target.value);
      console.log(event.target.value);
    };
    function submitPost() {
      let payload = new FormData();
      payload.append("body", postData.body);
      payload.append("image", postData.image);
      store
        .dispatch("Social/addPost", payload)
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
    return {
      fortest,
      close,
      ...forChangePhoto,
      postData,
      knowimg,
      submitPost,
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
