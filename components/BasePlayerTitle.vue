<template>
  <span class="player-control-title-text" :class="{ 'is-long': isLong }">
    <a
      class="player-control-title-link"
      :href="`https://www.google.co.jp/search?q=${encodeURIComponent(title)}`"
      target="_blank"
      rel="noopener"
      :aria-label="`Googleで${title}を検索する`"
    >
      <span ref="title" :style="{ animationDuration }">{{ title }}</span>
      <span v-if="isLong" :style="{ animationDuration }">{{ title }}</span>
    </a>
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    wrapWidth: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      titleWidth: false
    }
  },
  computed: {
    isLong() {
      if (!this.titleWidth || !this.wrapWidth) {
        return false
      }

      return this.titleWidth > this.wrapWidth
    },
    animationDuration() {
      if (!this.isLong) {
        return 0
      }

      return `${(4000 * this.titleWidth) / 100}ms`
    }
  },
  watch: {
    wrapWidth: {
      handler(val) {
        if (!this.$refs.title) {
          return
        }
        this.titleWidth = this.$refs.title.clientWidth
      },
      immediate: true
    }
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth
  }
}
</script>

<style lang="scss" scoped>
.player-control-title {
  &-text {
    line-height: 1;
    display: flex;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    align-items: center;
    letter-spacing: 0.18em;
    will-change: transform;
    @include fit-full;
    @include font-m;
    &.is-long {
      span {
        animation: ticker 100s 2.5s linear infinite;
        will-change: transform;
      }
    }
  }
  &-link {
    display: flex;
    @include focus-visible {
      color: $color-link;
    }
    @include desktop {
      padding: 0 2rem 0.1rem;
      &:hover {
        color: $color-link;
      }
    }
    span {
      padding: 0 1.6rem;
    }
  }
}

@keyframes ticker {
  0% {
    transform: translate3d(0, 0, 0);
  }
  50%,
  100% {
    transform: translate3d(-100%, 0, 0);
  }
}
</style>
