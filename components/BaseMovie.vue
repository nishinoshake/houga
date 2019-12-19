<template>
  <ul class="movie">
    <li v-for="(movie, index) in movies" :key="movie.id" class="movie-item">
      <button
        class="movie-button"
        :aria-label="`${movie.title}を再生する`"
        @click="select({ order: 'desc', index })"
      >
        <span class="movie-button-inside">
          <span
            class="movie-date"
            v-html="movie.releaseDate.replace(/\./g, '<span>.</span>')"
          />
          <span class="movie-title">{{ movie.title }}</span>
        </span>
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    ...mapActions(['toggle']),
    ...mapMutations(['select'])
  }
}
</script>

<style lang="scss" scoped>
.movie {
  flex-grow: 1;
  padding: 1.2rem 0 0 1rem;
  @include desktop {
    padding: 0 2rem;
  }
  &-item {
    &:nth-child(n + 2) {
      @include max {
        margin-top: 2rem;
      }
    }
  }
  &-button {
    color: $color-dark;
    line-height: 1.5;
    text-align: left;
    @include focus-visible {
      .movie-title {
        background-color: $color-black;
      }
      .movie-button-inside {
        background-color: $color-darker;
        color: $color-white;
      }
    }
    @include desktop {
      width: 100%;
      display: flex;
      align-items: baseline;
      padding: 0.4rem 0;
      &:hover {
        .movie-title {
          background-color: $color-black;
        }
        .movie-button-inside {
          background-color: $color-darker;
          color: $color-white;
        }
      }
    }
    &-inside {
      display: block;
      @include desktop {
        display: flex;
        align-items: baseline;
      }
    }
  }
  &-date {
    font-family: 'Roboto Mono', monospace;
    font-weight: 300;
    line-height: 1;
    white-space: nowrap;
    font-size: 1.2rem;
    @include max {
      display: inline-block;
      padding: 0 0 0.1rem 1rem;
    }
    @include tablet {
      font-size: 1.3em;
    }
    @include desktop {
      padding: 0 1rem 0.1rem;
      font-size: 1.6rem;
    }
    /deep/ span {
      margin: 0 -1px;
      display: inline-block;
    }
  }
  &-title {
    padding: 0rem 0.5rem 0.1rem 1rem;
    letter-spacing: 0.14em;
    @include font-l;
    @include max {
      display: block;
    }
    @include desktop {
      padding: 0.3rem 1rem 0.4rem;
    }
  }
}
</style>
