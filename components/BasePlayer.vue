<template>
  <div class="player" :class="{ 'is-active': isPlaying }" ref="player">
    <div class="player-frame" ref="frame">
      <div ref="playerYoutube" />
    </div>
    <div class="player-control">
      <h2 class="player-control-title">
        <transition name="player-control-title-text">
          <span
            class="player-control-title-text"
            v-if="currentMovie"
            :key="currentMovie.id"
            >{{ currentMovie.title }}</span
          >
        </transition>
      </h2>
      <div class="player-control-actions">
        <div class="player-control-action">
          <button
            class="player-control-action-button player-control-action-prev"
            aria-label="次の動画"
            @click="prev"
          ></button>
        </div>
        <div class="player-control-action">
          <button
            class="player-control-action-button player-control-action-next"
            aria-label="前の動画"
            @click="next"
          ></button>
        </div>
        <div class="player-control-action">
          <button
            class="player-control-action-button player-control-action-close"
            aria-label="プレイヤーを閉じる"
            @click="unselect"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      player: null,
      intervalId: null
    }
  },
  computed: {
    ...mapState(['order', 'movies', 'currentIndex', 'previousIndex']),
    ...mapGetters(['selectedTrailerIds', 'isPlaying', 'currentMovie'])
  },
  watch: {
    isPlaying(newVal) {
      if (newVal) {
        disableBodyScroll(this.$refs.player)

        this.intervalId = setInterval(() => {
          if (this.player && this.player.getPlaylistIndex) {
            const index = this.player.getPlaylistIndex()

            if (index !== this.currentIndex) {
              this.setPreviousIndex({ index })
              this.setCurrentIndex({ index })
            }
          }
        }, 200)
      } else {
        enableBodyScroll(this.$refs.player)

        clearInterval(this.intervalId)
        this.player.stopVideo()
      }
    },
    selectedTrailerIds(trailerIds) {
      if (trailerIds.length) {
        this.pageY = window.pageYOffset

        if (this.player) {
          this.loadPlaylist(trailerIds, this.currentIndex)
        } else {
          alert('プレイヤーの読み込みが終わるまでお待ちください！')
        }
      }
    }
  },
  mounted() {
    this.createPlayer(this.movies[0].trailerId)
  },
  methods: {
    ...mapMutations([
      'select',
      'unselect',
      'setCurrentIndex',
      'setPreviousIndex'
    ]),
    createPlayer(trailerId) {
      window.onYouTubeIframeAPIReady = () => {
        this.player = new YT.Player(this.$refs.playerYoutube, {
          width: '1280',
          height: '720',
          videoId: trailerId,
          playerVars: {
            controls: 2,
            playsinline: 1
          },
          events: {
            onStateChange: ({ data }) => {
              switch (data) {
                case YT.PlayerState.ENDED:
                  this.setCurrentIndex({
                    index: this.player.getPlaylistIndex()
                  })
                  this.$nextTick(() => {
                    if (this.currentIndex === this.previousIndex) {
                      this.unselect()
                    }
                  })
                  break
                case YT.PlayerState.PLAYING:
                  this.setPreviousIndex({
                    index: this.player.getPlaylistIndex()
                  })
                  break
              }
            }
          }
        })
      }

      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'

      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
    },
    loadPlaylist(movies, index) {
      this.player.loadPlaylist(movies, index)
    },
    playMovie() {
      if (this.isPlaying && this.player && this.player.playVideoAt) {
        this.player.playVideoAt(this.currentIndex)
      }
    },
    next() {
      if (this.isPlaying && this.player && this.player.nextVideo) {
        this.player.nextVideo()
      }
    },
    prev() {
      if (this.isPlaying && this.player && this.player.previousVideo) {
        this.player.previousVideo()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.player {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  &:before {
    content: '';
    background-color: $color-black;
    transform-origin: left center;
    transform: scaleX(0);
    will-change: transform;
    @include fit-full;
  }
  &.is-active {
    visibility: visible;
    &:before {
      transform: scaleX(1);
      transition: transform 0.8s $easeInOutQuart;
    }
    .player-frame /deep/ iframe {
      opacity: 1;
      transition: opacity 0.5s linear 1s;
    }
    .player-control {
      transform: translate3d(0, 0, 0);
      transition: transform 0.5s $easeOutQuart 0.9s;
    }
  }
  &-frame {
    flex-grow: 1;
    position: relative;
    /deep/ iframe {
      opacity: 0;
      z-index: 1;
      will-change: opacity;
      @include fit-full;
    }
  }
  &-control {
    height: 4.5rem;
    display: flex;
    background-color: $color-white;
    transform: translate3d(0, 100%, 0);
    will-change: transform;
    &-title {
      flex-grow: 1;
      position: relative;
      overflow: hidden;
      &:after {
        content: '';
        width: 1.6rem;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        background: linear-gradient(
          to right,
          rgba($color-white, 0),
          rgba($color-white, 1)
        );
        @include desktop {
          width: 2rem;
        }
      }
      &-text {
        line-height: 1;
        display: flex;
        padding: 0 1.6rem 0.1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        align-items: center;
        letter-spacing: 0.18em;
        will-change: transform;
        @include fit-full;
        @include font-m;
        @include desktop {
          padding: 0 2rem 0.1rem;
        }
        &-enter-active {
          transition: transform 0.6s $easeOutQuart 0.5s;
        }
        &-leave-active {
          transition: transform 0.6s $easeInQuart;
        }
        &-enter {
          transform: translate3d(0, 100%, 0);
        }
        &-leave-to {
          transform: translate3d(0, -100%, 0);
        }
      }
    }
    &-actions {
      display: flex;
    }
    &-action {
      width: 4.5rem;
      height: 4.5rem;
      &:nth-child(n + 2) {
        border-left: 1px solid $color-gray-dark;
      }
      &-button {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: $color-gray;
        @include desktop {
          &:hover {
            background-color: $color-gray-dark;
          }
        }
      }
      &-prev,
      &-next {
        &:before {
          content: '';
          width: 40%;
          height: 40%;
          position: absolute;
          top: 50%;
          left: 50%;
          border-top: 1px solid $color-dark;
          border-right: 1px solid $color-dark;
        }
      }
      &-prev:before {
        transform: translate(-25%, -50%) rotate(-135deg);
      }
      &-next:before {
        transform: translate(-75%, -50%) rotate(45deg);
      }
      &-close {
        &:before,
        &:after {
          content: '';
          width: 60%;
          height: 1px;
          position: absolute;
          top: 50%;
          left: 50%;
          background-color: $color-dark;
        }
        &:before {
          transform: translate(-50%, -50%) rotate(45deg);
        }
        &:after {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }
    }
  }
}
</style>