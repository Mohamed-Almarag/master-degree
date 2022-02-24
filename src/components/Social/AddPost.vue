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
          <textarea class="form-input text-area"></textarea>
        </div>
        <div class="post-photo">
          <transition name="fade">
            <div class="preview-container-image swip" v-if="imgPreviewUrl">
              <img
                draggable="false"
                class="preview-image d-block m-auto"
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
              <!-- @change="handelUploadFileImage($event)" -->
              <input
                @change="fortest($event)"
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
import { ref } from "vue";
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
    const fortest = (event) => {
      emit("fortest", event.target.value);
      console.log(event.target.value);
    };
    const image = ref(null);
    const imgPreviewUrl = ref(null);
    function handelUploadFileImage(event) {
      let reader = new FileReader();
      reader.onload = function () {
        imgPreviewUrl.value = reader.result;
      };
      image.value = event.target.files[0];
      if (image.value) {
        reader.readAsDataURL(image.value);
      }
    }
    return { fortest, close, image, imgPreviewUrl, handelUploadFileImage };
  },
};
</script>

<style lang="scss" scoped></style>
