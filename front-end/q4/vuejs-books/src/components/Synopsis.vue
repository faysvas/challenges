<template>
  <div>
    <hr />
    <h2 class="text-center">Synopsis</h2>
    <hr />
    <div class="synopsis text-left" v-for="(paragraph, index) in paragraphs" :key="index">
      <p>{{paragraph}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Synopsis",
  props: {
    synopsis: String
  },
  data() {
    return {
      paragraphs: this.synopsis.split("\n")
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

h2 {
  font-family: $header-font;
  font-size: 1.5rem;
}

p {
  margin-top: 15px;
}

hr {
  border-top: 1px solid $divider-color;
}
</style>
