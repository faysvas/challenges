<template>
  <header>
    <b-row>
      <b-col cols="8" class="text-left">
        <h1>{{ book.title }}</h1>
        <div class="text-left author">{{ book.author }}</div>
      </b-col>
      <b-col cols="4" class="text-right upvote-col">
        <div class="rating-container text-right">
          Rating:
          <Rating :rating="book.rating" />
        </div>
        <Upvotes :upvoted="book.upvoted" :upvotes="book.upvotes" />
      </b-col>
    </b-row>
  </header>
</template>

<script>
import Upvotes from "./Upvotes.vue";
import Rating from "./Rating.vue";

export default {
  name: "Header",
  components: {
    Rating,
    Upvotes
  },
  props: {
    book: Object
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";

h1 {
  font-family: $header-font;
  margin-top: 15px;
  color: $gray;
  margin-bottom: 0;
}

.author {
  font-size: 0.9rem;
  font-weight: bold;
  color: $highlight-color;
}

.upvote-col {
  margin-top: 15px;
}

.rating-container {
  padding-top: 1.25rem;
  font-weight: bold;
}
</style>
