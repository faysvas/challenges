<template>
  <main class="book-list">
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <header>
      <h1 class="text-center">Top Books of All Time</h1>
      <div class="search-wrapper">
        <b-form-input type="text" v-model="search" placeholder="Search title.." />
      </div>
    </header>
    <b-card-group deck v-for="(book, index) in filteredList" v-bind:key="book.slug">
      <Book :book="book" :index="index" />
    </b-card-group>
  </main>
</template>

<script>
import axios from "axios";
import Book from "./Book.vue";

export default {
  name: "BookList",
  components: {
    Book
  },
  data() {
    return {
      search: "",
      books: null,
      loading: false,
      post: null,
      error: null
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get("http://localhost:3000/books")
      .then(response => (this.books = response.data.books))
      .catch(error => (this.error = error))
      .finally(() => (this.loading = false));
  },
  computed: {
    filteredList() {
      return (
        this.books &&
        this.books.filter(book => {
          return book.title.toLowerCase().includes(this.search.toLowerCase());
        })
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixins.scss";

.book-list {
  margin-bottom: 20px;
  h1 {
    font-family: $header-font;
    margin-top: 20px;
    color: $highlight-color;
  }
}
.search-wrapper > input {
  @include box-shadow;
  border: none;
}
</style>
