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
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeader'
import BaseMovie from '@/components/BaseMovie'
import BasePrivacy from '@/components/BasePrivacy'
import BaseAbout from '@/components/BaseAbout'
import BasePlayer from '@/components/BasePlayer'
import BaseNotice from '@/components/BaseNotice'

export default {
  components: {
    BaseHeader,
    BaseMovie,
    BasePrivacy,
    BaseAbout,
    BasePlayer,
    BaseNotice
  }
}
</script>
