<template>
  <nuxt />
</template>

<script>
export default {
  beforeCreate() {
    if (this.$route.path !== '/') {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
html {
  font-size: 12px;
  @include phablet {
    font-size: 14px;
  }
  @include desktop {
    font-size: 16px;
  }
}

* {
  -webkit-tap-highlight-color: rgba($color-darker, 0.5);
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
}

body {
  color: $color-dark;
  line-height: 1.6;
  letter-spacing: 0.06em;
  font-family: YakuHanMP_Noto, 'Noto Serif JP', serif;
  font-weight: 200;
  background-color: $color-snow;
}

button {
  font-family: inherit;
}

.pc {
  @include max($width-large) {
    display: none;
  }
}

.sp {
  @include min($width-large + 1px) {
    display: none;
  }
}
</style>
