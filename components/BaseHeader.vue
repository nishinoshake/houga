<template>
  <header class="header">
    <h1 class="header-logo">
      <picture>
        <source srcset="/img/logo02.svg" media="(max-width: 980px)" />
        <img src="/img/logo01.svg" alt="邦画の予告を、朝まで" />
      </picture>
    </h1>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @include max {
    padding: 7rem 2rem 6rem;
  }
  @include desktop {
    position: absolute;
    top: 0;
    right: 0;
  }
  &-logo {
    @include max {
      width: 24rem;
      img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
    @include desktop {
      width: 8.45vh;
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
}
</style>
