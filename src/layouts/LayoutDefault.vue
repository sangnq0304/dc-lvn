<template>
  <div class="layout-default">
    <header>
      <v-container> dasdas </v-container>
    </header>
    <nav>Sidebar</nav>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.layout-default {
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template:
    [header-left] 'head head' 90px [header-right]
    [main-left] 'nav  main' 1fr [main-right]
    / 230px 1fr;
}

header {
  background-color: lime;
  grid-area: head;
  // @include device(mobile) {
  //   background: red;
  // }
}

nav {
  background-color: lightblue;
  grid-area: nav;
}

main {
  height: calc(100vh - 90px);
  background-color: yellow;
  grid-area: main;
  overflow-y: scroll;
}
</style>
