import { ref } from "vue";

export default () => {
  const img = ref(null);
  const imgPreviewUrl = ref(null);

  function useHandelUploadFileImage(event) {
    let reader = new FileReader();
    reader.onload = function () {
      imgPreviewUrl.value = reader.result;
    };
    img.value = event.target.files[0];
    if (img.value) {
      reader.readAsDataURL(img.value);
    }
  }

  function cancelChangePhoto() {
    imgPreviewUrl.value = null;
    img.value = null;
  }
  return { img, imgPreviewUrl, useHandelUploadFileImage, cancelChangePhoto };
};
