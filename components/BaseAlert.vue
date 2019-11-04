<template>
  <transition name="alert">
    <section class="alert" v-if="isActive">
      <slot />
      <button class="alert-button" @click="handleClose">OK</button>
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    isActive: Boolean,
    handleClose: Function
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
</style>
