<template>
  <header class="header" :class="{ 'is-hidden': isHidden }">
    <h1
      class="header-logo"
      :style="{ width: logoWidth ? `${logoWidth}px` : null }"
    >
      <img src="/img/logo01.svg" alt="邦画の予告を、朝まで" />
    </h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      logoWidth: null,
      currentY: 0
    }
  },
  computed: {
    isHidden() {
      return this.currentY >= 5
    }
  },
  mounted() {
    const ua = navigator.userAgent
    const isIOS = ua.indexOf('iPhone') >= 0 || ua.indexOf('iPad') >= 0

    if (isIOS) {
      this.logoWidth = window.innerHeight * 0.084558824
    }

    this.watchScroll()
  },
  methods: {
    watchScroll() {
      window.addEventListener(
        'scroll',
        () => {
          window.requestAnimationFrame(() => {
            this.currentY = window.pageYOffset
          })
        },
        {
          passive: true,
          capture: false
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 100%;
  transform: translateX(-100%);
  transition: left 0.3s $easeOutQuart, transform 0.3s $easeOutQuart,
    opacity 0.2s linear;
  will-change: opacity;
  @include min($width-max + 60px) {
    left: $width-max;
    transform: translateX(-50%);
  }
  &.is-hidden {
    opacity: 0;
  }
  &-logo {
    width: 8.45vh;
    margin-bottom: 3rem;
    position: relative;
    pointer-events: none;
    &:before {
      content: '';
      display: block;
      padding-top: 1183.43%;
    }
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      object-fit: cover;
    }
  }
}
</style>
