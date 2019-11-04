<template>
  <section class="notice" :class="{ 'is-active': isActive }">
    <p class="notice-text">
      映画のタイトルをクリックすると、<br /><span>予告が再生</span
      >されますので、<br />音量に注意してください！
    </p>

    <button class="notice-button" @click="hide">OK</button>
  </section>
</template>

<script>
import Cookies from 'js-cookie'

const COOKIE_VISIT_KEY = 'is_visited'
const COOKIE_VISIT_VALUE = 1
const COOKIE_EXPIRES = 365
const MODAL_DELAY = 1200

export default {
  data() {
    return {
      isActive: false
    }
  },
  mounted() {
    setTimeout(() => {
      const isVisited = Cookies.get(COOKIE_VISIT_KEY)

      if (!isVisited) {
        this.isActive = true
        Cookies.set(COOKIE_VISIT_KEY, COOKIE_VISIT_VALUE, {
          expires: COOKIE_EXPIRES,
          sameSite: 'lax'
        })
      }
    }, MODAL_DELAY)
  },
  methods: {
    hide() {
      this.isActive = false
    }
  }
}
</script>

<style lang="scss" scoped>
.notice {
  width: 90%;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  bottom: 3rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 2rem 0.1rem 2.4rem;
  border: 2px solid $color-dark;
  background-color: $color-white;
  visibility: hidden;
  transform: translateY(100%) translateY(3rem);
  transition: transform 0.5s $easeInQuart, visibility 0s 0.5s;
  @include max {
    max-width: 26rem;
  }
  @include min {
    max-width: 36rem;
  }
  &.is-active {
    visibility: visible;
    transform: translateY(0);
    transition: transform 0.5s $easeOutQuart, visibility 0s;
  }
  &-text {
    line-height: 1.8;
    letter-spacing: 0.08em;
    text-align: center;
    white-space: nowrap;
    @include max {
      font-size: 1.2rem;
    }
    @include min {
      font-size: 1.5rem;
    }
    span {
      padding: 0 0.3rem;
      background-color: rgba($color-yellow, 0.6);
    }
  }
  &-button {
    width: 6em;
    margin: 2rem auto 0;
    padding: 0.5rem;
    border: 2px solid $color-dark;
    @include max {
      font-size: 1.2rem;
    }
    @include min {
      font-size: 1.5rem;
      &:hover {
        background-color: $color-dark;
        color: $color-white;
      }
    }
  }
}
</style>
