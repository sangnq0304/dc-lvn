<template>
  <div class="not-found d-flex align-center justify-center flex-column">
    <h1>404!!!</h1>
    <p @click="$router.push({ name: 'about' })">Go Back to Home</p>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
};
</script>

<style scoped lang="scss">
.not-found {
  height: 100vh;
  // background: $primary;
  font-style: italic;
  h1 {
    font-size: 70px;
    line-height: 1;
  }
  p {
    cursor: pointer;
  }
}
</style>
