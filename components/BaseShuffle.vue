<template>
  <div class="shuffle">
    <button class="shuffle-button" @click.stop="toggle({ order: 'random' })">
      <span></span>適当に再生
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['toggle'])
  }
}
</script>

<style lang="scss" scoped>
.shuffle {
  margin-top: 2.8rem;
  padding: 0 1rem;
  @include desktop {
    margin-top: 3.5rem;
    padding: 0 2rem;
  }
  &-button {
    padding: 1rem;
    letter-spacing: 0.1em;
    @include font-l;
    @include center-flex;
    @include desktop {
      border-width: 2px;
    }
    @include focus-visible {
      color: $color-white;
      background-color: $color-black;
      span {
        border-color: $color-white;
        &:before {
          border-color: transparent transparent transparent $color-white;
        }
      }
    }
    @include desktop {
      &:hover {
        color: $color-white;
        background-color: $color-black;
        span {
          border-color: $color-white;
          &:before {
            border-color: transparent transparent transparent $color-white;
          }
        }
      }
    }
    span {
      width: 2.8rem;
      height: 2.8rem;
      margin: 0.2rem 1.4rem 0 0;
      padding-left: 0.3rem;
      border: 1px solid $color-black;
      border-radius: 50%;
      @include center-flex;
      @include desktop {
        border-width: 2px;
      }
      &:before {
        content: '';
        width: 0;
        height: 0;
        display: block;
        border-style: solid;
        border-width: 0.6rem 0 0.6rem 1.1rem;
        border-color: transparent transparent transparent $color-black;
      }
    }
  }
}
</style>
