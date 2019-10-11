<template>
  <div id="app">
    <b-container>
      <b-row align-h="center">
        <b-col cols="10">
          <router-view></router-view>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// TODO: Display something if data is not

import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
export default {
  name: "app"
};
</script>

<style lang="scss">
@import "./styles/_variables.scss";

#app {
  background-color: $bg-color;
  font-family: $regular-font;
}
</style>
