<template>
  <nuxt />
</template>

<style lang="scss">
html {
  font-size: 12px;
  font-family: serif;
  @include min {
    font-size: 16px;
  }
}

* {
  -webkit-tap-highlight-color: transparent;
}

html,
body,
#__nuxt,
#__layout {
  height: 100%;
}
</style>
