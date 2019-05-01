<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" class="font-weight-light">Home</router-link>&nbsp;
        <router-link to="/about" class="font-weight-light">About</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <my-component></my-component>
      <my-component></my-component>
      <my-component></my-component>
      <my-component></my-component>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import MyFirst from "@/components/MyFirst.vue";
export default {
  name: "App",
  /*
  components: {
    "my-component": MyFirst,
    HelloWorld
  },
  */
  data() {
    return {
      //
    };
  }
};
</script>
