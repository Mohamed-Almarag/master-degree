<template>
  <div class="profile view-padding">
    <Loading :loading="loading"></Loading>
    <div class="container">
      <div class="main-details">
        <div class="row">
          <div class="student-photo-container col-md-4">
            <div class="photo">
              <div class="images">
                <img
                  v-if="imgPreviewUrl"
                  class="student-img img-preview w-100 h-100"
                  :src="imgPreviewUrl"
                  alt="student"
                />
                <img
                  v-if="studentData.image"
                  class="student-img w-100 h-100"
                  :src="studentData.image"
                  alt="student"
                />
                <img
                  v-else
                  class="student-img w-100 h-100"
                  src="@/assets/images/default.png"
                  alt="student"
                />
              </div>
              <div
                class="
                  change-photos
                  w-100
                  h-100
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <label class="upload-photo d-block" for="upload-photo"
                  ><fa class="icon" icon="camera"
                /></label>
                <input
                  @change="handelUploadFileImage($event)"
                  class="file-input d-none"
                  type="file"
                  id="upload-photo"
                />
              </div>
            </div>
            <div
              v-if="imgPreviewUrl"
              class="btn-container d-flex align-items-center mt-4"
            >
              <button
                class="img-btn custom-btn save d-block"
                @click="changeImage"
              >
                حفظ
              </button>
              <button
                class="img-btn custom-btn cancel d-block"
                @click="cancelChangePhoto"
              >
                الغاء
              </button>
            </div>
          </div>
          <div class="student-details col-md-8">
            <fa @click="showPersoanlForm" class="edit-icon edit" icon="pen" />
            <div class="parts">
              <fa class="icons" icon="user" />
              <span class="user-info">{{ studentData.name }}</span>
            </div>
            <div class="parts">
              <fa class="icons" icon="envelope" />
              <span class="user-info">{{ studentData.email }}</span>
            </div>
            <div class="parts">
              <fa class="icons" icon="phone-alt" />
              <span class="user-info">{{ studentData.phone }}</span>
            </div>
            <div class="parts">
              <fa class="icons" icon="eye" />
              <span class="user-info">بصرى</span>
            </div>
            <div class="parts change-password">
              <button
                @click="showPasswordForm"
                class="custom-btn profile d-block"
              >
                تغيير كلمة السر
              </button>
            </div>
          </div>
          <!-- start edit personal data  -->
          <transition name="fade">
            <div v-if="showEdit" class="form-modal-container clip-path">
              <form
                class="form-modal"
                action=""
                @submit.prevent="submitPersoanlData"
              >
                <fa
                  @click="showPersoanlForm"
                  class="edit-icon cancel"
                  icon="times"
                />
                <h3 class="title text-center">تعديل البيانات الشخصيه</h3>
                <div class="form-group">
                  <label class="form-label" for="">الأسم</label>
                  <input class="form-input" v-model="name" type="text" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="">الأيميل</label>
                  <input class="form-input" v-model="email" type="email" />
                </div>
                <div class="form-group">
                  <label class="form-label" for="">رقم الهاتف</label>
                  <input class="form-input" v-model="phone" type="text" />
                </div>
                <button class="custom-btn d-block">حفظ</button>
              </form>
            </div>
          </transition>
          <!-- start edit personal data  -->
          <!-- start change password  -->
          <transition name="fade">
            <div v-if="showPassword" class="form-modal-container clip-path">
              <form
                class="form-modal"
                action=""
                @submit.prevent="changePassword"
              >
                <fa
                  @click="showPasswordForm"
                  class="edit-icon cancel"
                  icon="times"
                />
                <h3 class="title text-center">تغيير كلمة السر</h3>
                <div class="form-group">
                  <label class="form-label" for="">كلمة السر الحاليه</label>
                  <div class="input-container">
                    <input
                      autocomplete
                      class="password-input"
                      v-model="current_password"
                      type="password"
                    />
                    <fa
                      @click="showAndHidePassword"
                      class="icon show-password"
                      icon="eye"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="">كلمة السر الجديده</label>
                  <div class="input-container">
                    <input
                      autocomplete
                      class="password-input"
                      v-model="password"
                      type="password"
                    />
                    <fa
                      @click="showAndHidePassword"
                      class="icon show-password"
                      icon="eye"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <label class="form-label" for="">تاكيد كلمة السر</label>

                  <div class="input-container">
                    <input
                      autocomplete
                      class="password-input"
                      v-model="password_confirmation"
                      type="password"
                    />
                    <fa
                      @click="showAndHidePassword"
                      class="icon show-password"
                      icon="eye"
                    />
                  </div>
                </div>
                <button class="custom-btn d-block">تغيير</button>
              </form>
            </div>
          </transition>
          <!-- start change password  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, computed, toRefs } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { append_Object_Items_ToFormData } from "@/axios/helpers";
export default {
  name: "Profile",

  setup() {
    const store = useStore();
    const router = useRouter();
    const image = ref(null);
    const imgPreviewUrl = ref(null);
    const showEdit = ref(false);
    const showPassword = ref(false);
    const loading = ref(false);
    const personalData = reactive({
      name: null,
      email: null,
      phone: null,
    });
    const passwordData = reactive({
      current_password: null,
      password: null,
      password_confirmation: null,
    });
    onMounted(() => {
      store.dispatch("Profile/getStudentData");
    });
    const studentData = computed(() => {
      return store.state.Profile.student;
    });
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
    function changeImage() {
      loading.value = true;
      let payload = new FormData();
      payload.append("image", image.value);
      store.dispatch("Profile/updateImage", payload).finally(() => {
        loading.value = false;
        router.go(router.currentRoute);
      });
    }
    function cancelChangePhoto() {
      imgPreviewUrl.value = null;
    }
    function showPersoanlForm() {
      showEdit.value = !showEdit.value;
      personalData.name = studentData.value.name;
      personalData.email = studentData.value.email;
      personalData.phone = studentData.value.phone;
    }
    function submitPersoanlData() {
      loading.value = true;
      let payload = append_Object_Items_ToFormData(personalData);
      store
        .dispatch("Profile/updatePersoanlData", payload)
        .then(() => {
          showEdit.value = false;
        })
        .finally(() => {
          loading.value = false;
          router.go(router.currentRoute);
        });
    }
    function showPasswordForm() {
      showPassword.value = !showPassword.value;
    }
    function showAndHidePassword() {
      let passwordInputs = document.querySelectorAll(".password-input");
      passwordInputs.forEach((input) => {
        input.getAttribute("type") == "password"
          ? input.setAttribute("type", "text")
          : input.setAttribute("type", "password");
      });
    }
    function changePassword() {
      loading.value = true;
      let payload = append_Object_Items_ToFormData(passwordData);
      store
        .dispatch("Profile/updatPassword", payload)
        .then(() => {
          showPassword.value = false;
        })
        .finally(() => {
          loading.value = false;
        });
    }
    return {
      image,
      imgPreviewUrl,
      handelUploadFileImage,
      cancelChangePhoto,
      showPersoanlForm,
      showEdit,
      showPassword,
      showPasswordForm,
      ...toRefs(personalData),
      ...toRefs(passwordData),
      submitPersoanlData,
      studentData,
      loading,
      changeImage,
      showAndHidePassword,
      changePassword,
    };
  },
};
</script>

<style lang="scss" scoped>
.profile {
  .main-details {
    padding: 60px 0 90px;
  }
  .student-photo-container {
    .photo {
      width: 300px;
      margin: auto;
      height: 300px;
      position: relative;
      overflow: hidden;
      filter: brightness(0.8);
      transition: $transition;
      -webkit-clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
      );
      clip-path: polygon(
        30% 0%,
        70% 0%,
        100% 30%,
        100% 70%,
        70% 100%,
        30% 100%,
        0% 70%,
        0% 30%
      );
      &:hover {
        filter: brightness(1);
        .change-photos {
          transform: scale(1);
        }
      }
      .images {
        position: relative;
        z-index: 6;
        width: 100%;
        height: 100%;
        .student-img {
          // object-fit: cover;
        }
      }
    }
    .change-photos {
      background-color: rgba($black, 0.2);
      position: absolute;
      z-index: 7;
      inset: 0;
      transition: 0.3s;
      color: $white;
      transform: scale(0);
      .upload-photo {
        .icon {
          transition: $transition;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          padding: 8px;
          &:hover {
            color: $secondcolor;
          }
        }
        .file-input {
          display: none;
        }
      }
    }
    // .btn-container {

    // }
  }
  .student-details {
    background-color: $bgcard;
    padding: 20px;
    border-radius: $radius;
    position: relative;
    height: fit-content;
    .parts {
      margin-bottom: 30px;
      font-weight: bold;
      &.change-password {
        margin-bottom: 0;
      }
      .icons {
        color: $maincolor;
        margin-left: 10px;
      }
      .user-info {
        color: $textcolor;
      }
    }
  }
}
</style>
