<template>
  <div class="upvote">
    <span v-if="upvoted">
      <b-button variant="outline-info">Upvoted</b-button>
    </span>
    <span v-else>
      <b-button variant="info">Upvote</b-button>
    </span>
    <span class="upvotes">
      Upvoted
      <span class="upvote-num">{{ upvotes }}</span> times
    </span>
  </div>
</template>

<script>
export default {
  name: "Upvotes",
  props: {
    upvoted: Boolean,
    upvotes: Number
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
div {
  margin-top: 20px;
  font-size: 0.8rem;
  button {
    font-size: 0.8rem;
    padding: 0.2rem 0.5rem;
  }
  .btn-info {
    background-color: $highlight-color;
    border-color: $highlight-color;
  }

  .btn-outline-info {
    border-color: $highlight-color;
    color: $highlight-color;
  }

  .upvotes {
    margin-left: 10px;
    .upvote-num {
      color: $highlight-color;
      font-weight: bold;
    }
  }
}
</style>
