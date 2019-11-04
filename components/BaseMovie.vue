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
  @include max {
    padding: 3rem 1rem;
  }
  @include min {
    padding: 3rem 2rem 4rem;
  }
  &-item {
    &:nth-child(n + 2) {
      @include max {
        margin-top: 2.5rem;
      }
      @include min {
        margin-top: 1.5rem;
      }
    }
  }
  &-button {
    color: $color-dark;
    line-height: 1.5;
    text-align: left;
    // transition: 0.2s linear;
    @include min {
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
    @include max {
      display: block;
      line-height: 1.2;
      font-size: 1.4rem;
    }
    @include min {
      font-size: 1.8rem;
    }
  }
  &-title {
    padding: 0 1rem 0.1rem;
    letter-spacing: 0.14em;
    @include max {
      display: block;
      font-size: 1.8rem;
    }
    @include min {
      font-size: 2.5rem;
    }
  }
}
</style>
