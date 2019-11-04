<template>
  <div class="container">
    <BaseHeader />
    <main class="main">
      <BaseMovie />
      <BasePrivacy />
      <BaseAbout />
    </main>
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
</style>
