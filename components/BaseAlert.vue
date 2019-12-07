<template>
  <transition name="alert">
    <section
      class="alert"
      v-if="isActive"
      :class="{ 'mod-please': pleaseAgree }"
      @animationend="handleAnimationEnd"
    >
      <slot />
      <button class="alert-button" @click="handleClose">
        OK
      </button>
    </section>
  </transition>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    isActive: Boolean,
    handleClose: Function
  },
  computed: {
    ...mapState(['pleaseAgree'])
  },
  methods: {
    ...mapMutations(['clsearPleaseAgree']),
    handleAnimationEnd() {
      console.log('end')
      this.clsearPleaseAgree()
    }
  }
}
</script>

<style lang="scss" scoped>
.alert {
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
  transition: transform 0.5s $easeInQuart, visibility 0s 0.5s;
  @include desktop {
    max-width: 36rem;
  }
  &.mod-please {
    animation: scale-attention 0.8s linear both;
  }
  &-enter,
  &-leave-to {
    transform: translateY(100%) translateY(3rem);
  }
  &-enter-active {
    transition: transform 0.5s $easeOutQuart;
  }
  &-leave-active {
    transition: transform 0.5s $easeInQuart;
  }
  &-button {
    width: 6em;
    margin: 2rem auto 0;
    padding: 0.5rem;
    color: $color-white;
    background-color: $color-darker;
    @include font-s;
    @include focus-visible {
      background-color: $color-black;
    }
    @include desktop {
      &:hover {
        background-color: $color-black;
      }
    }
  }
  /deep/ .alert-text {
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
}

/* Generated with Bounce.js. Edit at http://bouncejs.com#%7Bs%3A%5B%7BT%3A%22c%22%2Ce%3A%22b%22%2Cd%3A500%2CD%3A0%2Cf%3A%7Bx%3A1.1%2Cy%3A1.1%7D%2Ct%3A%7Bx%3A1%2Cy%3A1%7D%2Cs%3A3%2Cb%3A4%7D%5D%7D */
@keyframes scale-attention {
  0% {
    transform: matrix3d(1.1, 0, 0, 0, 0, 1.1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  4.3% {
    transform: matrix3d(1.049, 0, 0, 0, 0, 1.049, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  8.61% {
    transform: matrix3d(1.012, 0, 0, 0, 0, 1.012, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  12.91% {
    transform: matrix3d(0.995, 0, 0, 0, 0, 0.995, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  17.22% {
    transform: matrix3d(0.991, 0, 0, 0, 0, 0.991, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  28.33% {
    transform: matrix3d(0.998, 0, 0, 0, 0, 0.998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  39.44% {
    transform: matrix3d(1.001, 0, 0, 0, 0, 1.001, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  61.66% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  83.98% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
  100% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  }
}
</style>
