<template>
  <span class="rating">
    <span class="rating-num">{{ rating }}</span>/10
  </span>
</template>

<script>
export default {
  name: "Rating",
  props: {
    rating: String
  }
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
@import "../styles/_mixins.scss";
.rating {
  padding-top: 1.25rem;
  font-size: 0.7rem;
  color: $gray;
  .rating-num {
    font-size: 1rem;
    @include highlight;
  }
}
</style>
