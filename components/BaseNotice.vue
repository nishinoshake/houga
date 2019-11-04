<template>
  <BaseAlert :is-active="isActive" :handle-close="hide">
    <p class="alert-text">
      映画のタイトルをクリックすると、<br /><span>予告が再生</span
      >されますので、<br />音量に注意してください！
    </p>
  </BaseAlert>
</template>

<script>
import Cookies from 'js-cookie'
import BaseAlert from '@/components/BaseAlert'

const COOKIE_VISIT_KEY = 'is_visited'
const COOKIE_VISIT_VALUE = 1
const COOKIE_EXPIRES = 365
const MODAL_DELAY = 1200

export default {
  components: {
    BaseAlert
  },
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
  max-width: 26rem;
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
  @include desktop {
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
    @include font-s;
    span {
      padding: 0 0.3rem;
      background-color: rgba($color-yellow, 0.6);
    }
  }
  &-button {
    width: 6em;
    margin: 2rem auto 0;
    padding: 0.5rem;
    color: $color-white;
    background-color: $color-darker;
    @include font-s;
    @include desktop {
      &:hover {
        background-color: $color-black;
      }
    }
  }
}
</style>
