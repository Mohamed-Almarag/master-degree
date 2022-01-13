<template>
  <div class="single-elementk">
    <fa icon="coffee" />
    <fa icon="user" />
    <fa icon="dove" />
    <fa icon="window-close" />
    <fa :icon="['fas', 'coffee']" />
    <fa :icon="['fab', 'youtube']" />
    <fa :icon="['fab', 'github']" />
    <h1>content</h1>
    <div class="container-links">
      <a class="test" href="https://google.com">todos</a>
      <p>
        Lorem ipsum dolor
        <a class="test" href="https://jsonplaceholder.typicode.com/users"
          >users</a
        >
        sit amet consectetur, adipisicing elit porro,
      </p>
      <div>
        <p>
          Lorem ipsum dolor
          <a class="test" href="https://jsonplaceholder.typicode.com/todos"
            >todos</a
          >
          sit amet consectetur, adipisicing elit porro,
        </p>
      </div>
      <p>
        Lorem ipsum dolor
        <a class="test" href="https://jsonplaceholder.typicode.com/albums"
          >albums</a
        >
        sit amet consectetur, adipisicing elit porro,
      </p>
    </div>
    <transition name="fade">
      <div
        class="content-data d-flex justify-content-center align-items-center"
        v-if="hideContentDiv"
      >
        <div class="kkk" v-for="item in contentData" :key="item.id">
          <fa class="close-modal-btn" @click="closeModal" icon="window-close" />
          <p>{{ item.title }}</p>
          <p>{{ item.name }}</p>
        </div>
        <!-- <button > -->
        <!-- </button> -->
      </div>
    </transition>
  </div>
</template>

<script>
// import { ref } from "vue";
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "TheContent",
  setup() {
    const contentData = ref([]);
    const hideContentDiv = ref(false);
    function closeModal() {
      hideContentDiv.value = false;
    }
    onMounted(() => {
      let allLinks = document.querySelectorAll(".container-links .test");
      allLinks.forEach((item) => {
        item.addEventListener("click", (e) => {
          let someDetail = e.target.getAttribute("href");
          if (someDetail.includes("jsonplaceholder")) {
            e.preventDefault();
            // console.log("right");
            axios.get(`${someDetail}`).then((response) => {
              // console.log(response.data.slice(0, 2));
              contentData.value = response.data.slice(0, 2);
              hideContentDiv.value = true;
            });
          }
          // console.log("yes");
        });
      });
      // console.log(allLinks);
    });
    return { contentData, hideContentDiv, closeModal };
    // const divVisibilty = ref(true);
    // const usersData = ref([]);

    // function testingfunc() {
    //   let testlink = document.querySelector(".test");
    //   let linkattr = testlink.getAttribute("href");
    //   divVisibilty.value = true;
    //   axios.get(`${linkattr}`).then((res) => {
    //     usersData.value = res.data.slice(0, 2);
    //   });
    // }

    // function downnow() {
    //   divVisibilty.value = true;
    // }
  },
};
</script>

<style lang="scss" scoped>
.content-data {
  position: fixed;
  z-index: 2000;
  inset: 0;
  background-color: rgba(#000, 0.7);
  color: #fff;
  &.fade-enter-from {
    opacity: 0;
  }
  &.fade-enter-to {
    opacity: 1;
  }
  &.fade-enter-active {
    transition: opacity 0.5s ease;
  }
  &.fade-leave-from {
    opacity: 1;
  }
  &.fade-leave-to {
    opacity: 0;
  }
  &.fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .close-modal-btn {
    position: absolute;
    top: 50px;
    right: 50px;
  }
}
.kkk {
  position: relative;
}
</style>
