<template>
  <div :class="['container', { 'is-playing': isPlaying }]" @click="unselect">
    <div class="main">
      <h1 class="logo">
        <IndexLogo />
      </h1>
      <nav class="nav">
        <ul class="list">
          <li class="item">
            <button
              :class="['button mod-desc', { 'is-selected': order === 'desc' }]"
              @click.stop="select({ order: 'desc' })"
            >
              新着再生
            </button>
          </li>
          <li class="item">
            <button
              :class="[
                'button mod-random',
                { 'is-selected': order === 'random' }
              ]"
              @click.stop="select({ order: 'random' })"
            >
              適当再生
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div class="player">
      <div ref="player" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import IndexLogo from '~/assets/icon/logo.svg'

export default {
  components: {
    IndexLogo
  },
  data() {
    return {
      player: null
    }
  },
  computed: {
    ...mapState(['order', 'selectedMovies']),
    isPlaying() {
      return this.order !== null
    }
  },
  watch: {
    selectedMovies(movies) {
      if (movies.length) {
        if (this.player) {
          this.loadPlaylist(movies)
        } else {
          this.createPlayer(movies)
        }
      } else {
        this.player.stopVideo()
      }
    }
  },
  methods: {
    ...mapMutations(['select', 'unselect']),
    createPlayer(movies) {
      const [firstMovie, ...playlist] = movies

      window.onYouTubeIframeAPIReady = () => {
        this.player = new YT.Player(this.$refs.player, {
          width: '1280',
          height: '720',
          videoId: firstMovie,
          playerVars: {
            autoplay: 1,
            controls: 2,
            playlist
          }
        })
      }

      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'

      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    },
    loadPlaylist(movies) {
      this.player.loadPlaylist(movies)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: 3rem;
  display: flex;
  align-items: flex-end;
  background-color: $color-white;
  transition: background-color 0.2s linear;
  &.is-playing {
    background-color: $color-black;
    .logo {
      path {
        fill: $color-white;
      }
    }
    .button {
      color: $color-white;
      border-bottom-color: $color-white;
      &.is-selected {
        color: $color-black;
      }
      &:not(.is-selected) {
        background-color: transparent;
      }
    }
    .player {
      opacity: 1;
      visibility: visible;
      transition: opacity linear 0.2s 0.2s, visibility 0s;
    }
  }
}

.main {
  width: 100%;
  @include min {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
.logo {
  @include max {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 2rem;
  }
  svg {
    width: 20rem;
    display: block;
  }
  path {
    transition: fill 0.4s $easeOutExpo;
  }
}

.nav {
  margin-left: 3rem;
}

.list {
  display: flex;
  @include max {
    justify-content: flex-end;
  }
}

.item {
  &:nth-child(n + 2) {
    margin-left: 2rem;
  }
}

.button {
  padding: 0.6rem 1rem;
  position: relative;
  z-index: 0;
  font-size: 1.4rem;
  font-family: serif;
  letter-spacing: 0.15em;
  border-bottom: 2px solid $color-black;
  transition: 0.4s $easeOutExpo;
  @include center-flex;
  &.is-selected {
    background-color: $color-white;
  }
}

.player {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  visibility: hidden;
  @include max {
    height: calc(100% - 13rem);
  }
  @include min {
    height: calc(100% - 9.5rem);
  }
  /deep/ iframe {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }
}
</style>
