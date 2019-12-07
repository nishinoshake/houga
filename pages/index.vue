<template>
  <div class="container">
    <div class="main">
      <BaseHeader />
      <BaseMovie />
    </div>
    <div class="sub">
      <BasePrivacy />
      <BaseAbout />
    </div>
    <BasePlayer />
    <BaseNotice />
    <BaseError />
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader'
import BaseMovie from '@/components/BaseMovie'
import BasePrivacy from '@/components/BasePrivacy'
import BaseAbout from '@/components/BaseAbout'
import BasePlayer from '@/components/BasePlayer'
import BaseNotice from '@/components/BaseNotice'
import BaseError from '@/components/BaseError'

export default {
  components: {
    BaseHeader,
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
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  padding-bottom: 3rem;
  @include desktop {
    padding-bottom: 4rem;
  }
}
</style>
