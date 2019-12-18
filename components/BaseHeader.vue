<template>
  <header class="header">
    <h1
      class="header-logo"
      :style="{ width: logoWidth ? `${logoWidth}px` : null }"
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
      logoWidth: null
    }
  },
  computed: {
    ...mapState(['order'])
  },
  mounted() {
    const ua = navigator.userAgent
    const isIOS = ua.indexOf('iPhone') >= 0 || ua.indexOf('iPad') >= 0

    if (isIOS) {
      this.logoWidth = window.innerHeight * 0.084558824
    }
  },
  methods: {
    ...mapActions(['toggle'])
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
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
.nav {
  position: sticky;
  top: 0;
  right: 0;
  padding-top: 1.5rem;
  &-item {
    &:nth-child(n + 2) {
      margin-top: 1.5rem;
    }
  }

  &-button {
    position: relative;
    padding: 0.6rem 0.8rem 0.9rem;
    z-index: 0;
    line-height: 1;
    color: $color-white;
    font-size: 1.4rem;
    white-space: nowrap;
    background-color: $color-darker;
    @include focus-visible {
      background-color: $color-black;
    }
    @include desktop {
      padding: 0.6rem 0.5rem 0.9rem 0.8rem;
      font-size: 1.4rem;
      &:hover {
        background-color: $color-black;
      }
    }
    span {
      display: block;
      + span {
        margin-top: 0.3rem;
      }
    }
  }
}
</style>
