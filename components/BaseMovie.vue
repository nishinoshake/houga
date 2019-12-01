<template>
  <ul class="movie">
    <li v-for="(movie, index) in movies" :key="movie.id" class="movie-item">
      <button class="movie-button" @click="select({ order: 'desc', index })">
        <span class="movie-date">{{ movie.releaseDate }}</span>
        <span class="movie-title">{{ movie.title }}</span>
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    ...mapMutations(['select'])
  }
}
</script>

<style lang="scss" scoped>
.movie {
  flex-grow: 1;
  padding: 3rem 0 0 1rem;
  @include desktop {
    padding: 2.5rem 2rem 0;
  }
  &-item {
    &:nth-child(n + 2) {
      margin-top: 2.5rem;
      @include desktop {
        margin-top: 1.3rem;
      }
    }
  }
  &-button {
    color: $color-dark;
    line-height: 1.5;
    text-align: left;
    @include desktop {
      display: flex;
      align-items: baseline;
      &:hover {
        background-color: $color-darker;
        color: $color-white;
        .movie-title {
          background-color: $color-black;
        }
      }
    }
  }
  &-date {
    padding: 0 1rem 0.1rem;
    font-family: 'Roboto Mono', monospace;
    @include font-m;
    @include max {
      display: block;
      line-height: 1.2;
    }
  }
  &-title {
    padding: 0 1rem 0.1rem;
    letter-spacing: 0.14em;
    @include font-l;
    @include max {
      display: block;
    }
  }
}
</style>
