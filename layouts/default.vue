<template>
  <nuxt />
</template>

<style lang="scss">
html {
  font-size: 12px;
  line-height: 1.6;
  letter-spacing: 0.06em;
  font-family: 'Noto Serif JP', serif;
  @include min {
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
}

button {
  font-family: 'Noto Serif JP', serif;
}

.pc {
  @include max {
    display: none;
  }
}

.sp {
  @include min {
    display: none;
  }
}
</style>
