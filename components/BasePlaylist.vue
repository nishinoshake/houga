<template>
  <ul class="playlist">
    <li class="playlist-item">
      <button class="playlist-button" @click.stop="toggle({ order: 'random' })">
        ランダム
      </button>
    </li>
    <li v-for="playlist in playlists" :key="playlist.id" class="playlist-item">
      <button
        class="playlist-button"
        :aria-label="`${playlist.title}のプレイリストを再生する`"
        @click="selectPlaylist({ id: playlist.id })"
      >
        {{ playlist.title }}
      </button>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState(['playlists'])
  },
  methods: {
    ...mapActions(['toggle']),
    ...mapMutations(['selectPlaylist'])
  }
}
</script>

<style lang="scss" scoped>
.playlist {
  width: 30rem;
  max-width: 100%;
  padding: 0 1rem;
  @include desktop {
    width: 50rem;
    margin-top: 1rem;
    padding: 0 2rem;
  }
  &-item {
    display: inline-block;
    margin: 0.2rem 0;
    @include font-l;
    @include desktop {
      margin: 0.3rem 0;
    }
  }
  &-button {
    display: block;
    padding: 0.4rem 0.8rem;
    @include focus-visible {
      background-color: $color-black;
      color: $color-white;
    }
    @include desktop {
      padding: 0.3rem 1rem 0.4rem;
      &:hover {
        background-color: $color-black;
        color: $color-white;
      }
    }
  }
}
</style>
