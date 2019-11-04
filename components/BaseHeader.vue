<template>
  <header class="header" :class="{ 'is-loaded': isLoaded }">
    <h1
      class="header-logo"
      :style="{ height: logoHeight ? `${logoHeight}px` : null }"
    >
      <img src="/img/logo01.svg" alt="邦画の予告を、朝まで" />
    </h1>
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <button
            :class="[
              'nav-button mod-desc',
              { 'is-selected': order === 'desc' }
            ]"
            @click.stop="toggle({ order: 'desc' })"
          >
            <span>新</span><span>着</span><span>再</span><span>生</span>
          </button>
        </li>
        <li class="nav-item">
          <button
            :class="[
              'nav-button mod-random',
              { 'is-selected': order === 'random' }
            ]"
            @click.stop="toggle({ order: 'random' })"
          >
            <span>適</span><span>当</span><span>再</span><span>生</span>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data() {
    return {
      isLoaded: false,
      logoHeight: null
    }
  },
  computed: {
    ...mapState(['order'])
  },
  mounted() {
    const ua = navigator.userAgent
    const isIOS = ua.indexOf('iPhone') >= 0 || ua.indexOf('iPad') >= 0

    if (isIOS) {
      this.logoHeight = window.innerHeight
    }

    setTimeout(() => {
      this.isLoaded = true
    }, 16)
  },
  methods: {
    ...mapActions(['toggle'])
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: opacity 0.4s linear;
  @include min($max-width + 42px) {
    right: calc(100% - #{$max-width} - 40px);
  }
  &.is-loaded {
    opacity: 1;
  }
  &-logo {
    width: 8.45vh;
    height: 100vh;
    position: relative;
    pointer-events: none;
    @include max {
      margin-bottom: 4rem;
    }
    @include min {
      margin-bottom: 6rem;
    }
    img {
      @include fit-full;
    }
  }
}
.nav {
  &-item {
    @include max {
      width: 50%;
      flex: none;
    }
    &:nth-child(n + 2) {
      @include max {
        margin-top: 3rem;
      }
      @include min {
        margin-top: 2rem;
      }
    }
  }

  &-button {
    position: relative;
    z-index: 0;
    line-height: 1.2;
    color: $color-white;
    letter-spacing: 0.15em;
    white-space: nowrap;
    background-color: $color-darker;
    @include max {
      padding: 0.5rem 0.4rem 0.8rem 0.7rem;
      font-size: 1.8rem;
    }
    @include min {
      padding: 0.3rem 0.2rem 0.6rem 0.5rem;
      font-size: 1.6rem;
      &:hover {
        background-color: $color-black;
      }
    }
    span {
      display: block;
    }
  }
}
</style>
