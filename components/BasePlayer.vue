<template>
  <div
    class="player"
    :class="{ 'is-active': isPlaying && canPlay }"
    ref="player"
  >
    <div class="player-frame" ref="frame">
      <div ref="playerYoutube" />
    </div>
    <div class="player-control">
      <h2 class="player-control-title">
        <transition
          name="player-control-title-text"
          @after-enter="afterEnterTitle"
        >
          <span
            class="player-control-title-text"
            v-if="currentMovie"
            :key="currentMovie.id"
          >
            <a
              class="player-control-title-link"
              :href="
                `https://www.google.co.jp/search?q=${encodeURIComponent(
                  currentMovie.title
                )}`
              "
              target="_blank"
              rel="noopener"
              :aria-label="`Googleで${currentMovie.title}を検索する`"
              >{{ currentMovie.title }}</a
            >
          </span>
        </transition>
      </h2>
      <div class="player-control-actions">
        <div class="player-control-action">
          <button
            class="player-control-action-button player-control-action-prev"
            aria-label="前の動画を再生する"
            @click="prev"
          ></button>
        </div>
        <div class="player-control-action">
          <button
            class="player-control-action-button player-control-action-next"
            aria-label="次の動画を再生する"
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
      canPlay: false,
      isVisible: false,
      intervalId: null,
      isTitleEntered: false,
      previousActiveElement: null
    }
  },
  computed: {
    ...mapState(['order', 'movies', 'currentIndex', 'previousIndex']),
    ...mapGetters(['selectedTrailerIds', 'isPlaying', 'currentMovie'])
  },
  watch: {
    isPlaying(val) {
      if (val) {
        this.play()

        if (!this.isMouseOrTouch()) {
          this.previousActiveElement = document.activeElement
        }

        document.addEventListener('keydown', this.handleKeydown)
      } else {
        this.stop()

        if (this.previousActiveElement) {
          this.previousActiveElement.focus()
          this.previousActiveElement = null
        }

        this.isTitleEntered = false

        document.removeEventListener('keydown', this.handleKeydown)
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
      'setPreviousIndex',
      'setErrorMessage'
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
            onReady: () => {
              this.canPlay = true
            },
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
    play() {
      if (this.canPlay) {
        this.loadPlaylist(this.selectedTrailerIds, this.currentIndex)
      } else {
        this.unselect()
        this.setErrorMessage({
          message:
            'まだ準備ができていません...<br />少し時間を置いてから、<br />もう一度試してください。'
        })
        return
      }

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
    },
    stop() {
      enableBodyScroll(this.$refs.player)

      if (this.intervalId) {
        clearInterval(this.intervalId)
      }

      if (this.canPlay) {
        this.player.stopVideo()
      }
    },
    toggle() {
      switch (this.player.getPlayerState()) {
        case YT.PlayerState.PLAYING: {
          return this.player.pauseVideo()
        }
        case YT.PlayerState.PAUSED: {
          return this.player.playVideo()
        }
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
    },
    handleKeydown({ key }) {
      switch (key) {
        case 'ArrowLeft': {
          return this.prev()
        }
        case 'ArrowRight': {
          return this.next()
        }
        case 'Backspace':
        case 'Delete':
        case 'Escape': {
          return this.unselect()
        }
      }
    },
    isMouseOrTouch() {
      return ['mouse', 'touch'].includes(
        document.documentElement.dataset.whatinput
      )
    },
    afterEnterTitle(el) {
      if (!this.isTitleEntered && this.previousActiveElement) {
        this.isTitleEntered = true
        el.querySelector('a').focus()
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
        pointer-events: none;
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
        padding: 0 1.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        align-items: center;
        letter-spacing: 0.18em;
        will-change: transform;
        @include fit-full;
        @include font-m;
        @include desktop {
          padding: 0 2rem;
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
      &-link {
        @include focus-visible {
          color: $color-link;
        }
        @include desktop {
          padding: 0 2rem 0.1rem;
          &:hover {
            color: $color-link;
          }
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
        @include focus-visible {
          background-color: $color-gray-dark;
        }
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
          width: 30%;
          height: 30%;
          position: absolute;
          top: 50%;
          left: 50%;
          border-top: 1px solid $color-dark;
          border-right: 1px solid $color-dark;
        }
      }
      &-prev:before {
        transform: translate(-17%, -50%) rotate(-135deg);
      }
      &-next:before {
        transform: translate(-77%, -50%) rotate(45deg);
      }
      &-close {
        &:before,
        &:after {
          content: '';
          width: 50%;
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
