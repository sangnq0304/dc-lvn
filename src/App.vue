<template>
  <v-app>
    <router-view/>
    <SnackbarComponent/>
    <LoadingComponent/>
  </v-app>
</template>

<script>

import SnackbarComponent from "@/components/SnackbarComponent";
import LoadingComponent from "@/components/LoadingComponent";

export default {
  components: { LoadingComponent, SnackbarComponent},
};
</script>