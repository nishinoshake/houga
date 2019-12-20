<template>
  <div class="container">
    <BaseNotice />
    <BaseError />
    <div class="main">
      <BaseHeader />
      <section class="main-block">
        <h2 class="main-title"><span>集合予告</span></h2>
        <BasePlaylist />
      </section>

      <section class="main-block">
        <h2 class="main-title"><span>連続単品</span></h2>
        <BaseMovie />
      </section>
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
import BasePlaylist from '@/components/BasePlaylist'
import BaseMovie from '@/components/BaseMovie'
import BasePrivacy from '@/components/BasePrivacy'
import BaseAbout from '@/components/BaseAbout'
import BasePlayer from '@/components/BasePlayer'
import BaseNotice from '@/components/BaseNotice'
import BaseError from '@/components/BaseError'

export default {
  components: {
    BaseHeader,
    BasePlaylist,
    BaseMovie,
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
  max-width: $width-max;
  background-color: $color-white;
}
.main {
  position: relative;
  padding: 3rem 0;
  @include desktop {
    padding: 4rem 0;
  }
  &-block {
    position: relative;
    z-index: 1;
    + .main-block {
      margin-top: 3rem;
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
