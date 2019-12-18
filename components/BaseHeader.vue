<template>
  <header class="header">
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
      logoWidth: null
    }
  },
  mounted() {
    const ua = navigator.userAgent
    const isIOS = ua.indexOf('iPhone') >= 0 || ua.indexOf('iPad') >= 0

    if (isIOS) {
      this.logoWidth = window.innerHeight * 0.084558824
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.36s $easeOutQuart;
  @include min($width-max + 60px) {
    transform: translateX(50%);
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
