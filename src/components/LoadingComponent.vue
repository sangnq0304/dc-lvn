<template>
  <div v-if="isLoadingPage" class="wrapper">
    <div class="card">
      <div class="loader">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LoadingComponent",
  computed: {
    ...mapState("loadingPage", ["loadingPage"]),
    isLoadingPage() {
      return this.loadingPage
    },
  },
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
.loader {
  border-radius: 50%;
  position: relative;
  margin: 50px;
  display: inline-block;
  height: 0;
  width: 0;
  span {
    position: absolute;
    display: block;
    background: #ddd;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    top: -20px;
    perspective: 100000px;
    &:nth-child(1) {
      left: 60px;
      animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
      animation-delay: 0s;
      background: #ff756f;
    }
    &:nth-child(2) {
      left: 20px;
      animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
      animation-delay: 0.2s;
      background: #ffde6f;
    }
    &:nth-child(3) {
      left: -20px;
      animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
      animation-delay: 0.4s;
      background: #01de6f;
    }
    &:nth-child(4) {
      left: -60px;
      animation: bounce2 1s cubic-bezier(0.04, 0.35, 0, 1) infinite;
      animation-delay: 0.6s;
      background: #6f75ff;
    }
  }
}

@keyframes bounce2 {
  0%,
  75%,
  100% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(-30px);
  }
}
</style>