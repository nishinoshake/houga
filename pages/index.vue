<template>
  <div class="container">
    <BaseNotice />
    <BaseError />
    <div class="main">
      <BaseHeader />
      <BaseMovie />
      <BaseShuffle />
    </div>
    <div class="sub">
      <BasePrivacy />
      <BaseAbout />
    </div>
    <BasePlayer />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader'
import BaseMovie from '@/components/BaseMovie'
import BaseShuffle from '@/components/BaseShuffle'
import BasePrivacy from '@/components/BasePrivacy'
import BaseAbout from '@/components/BaseAbout'
import BasePlayer from '@/components/BasePlayer'
import BaseNotice from '@/components/BaseNotice'
import BaseError from '@/components/BaseError'

export default {
  components: {
    BaseHeader,
    BaseMovie,
    BaseShuffle,
    BasePrivacy,
    BaseAbout,
    BasePlayer,
    BaseNotice,
    BaseError
  }
}
</script>

<style lang="scss" scoped>
.container {
  background-color: $color-white;
}
.main {
  position: relative;
  padding: 1.8rem 0 4.6rem;
  @include desktop {
    padding: 2rem 0 5.8rem;
  }
  &-block {
    position: relative;
    z-index: 1;
    + .main-block {
      margin-top: 4rem;
    }
  }
  &-title {
    position: relative;
    margin-bottom: 1.5rem;
    padding-left: 2rem;
    letter-spacing: 0.15em;
    @include font-xl;
    @include desktop {
      margin-bottom: 2rem;
      padding-left: 3rem;
    }
    span {
      display: inline-block;
      border-bottom: 1px solid currentColor;
      @include desktop {
        border-bottom: 2px solid currentColor;
      }
    }
  }
}
</style>
