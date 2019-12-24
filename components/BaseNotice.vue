<template>
  <BaseAlert
    :is-active="isActive"
    :handle-close="handleClose"
    :handle-animation-end="clsearPleaseAgree"
    error-message="映画のタイトルを選択すると<br /><span>予告が再生</span>されますので、<br />音量に注意してください！"
    class="notice"
    :class="{ 'mod-please': pleaseAgree }"
  />
</template>

<script>
import Cookies from 'js-cookie'
import BaseAlert from '@/components/BaseAlert'
import { mapState, mapMutations } from 'vuex'

const COOKIE_VISIT_KEY = 'is_visited'
const COOKIE_VISIT_VALUE = 'thanks'
const COOKIE_EXPIRES = 365
const MODAL_DELAY = 1000

export default {
  components: {
    BaseAlert
  },
  data() {
    return {
      isActive: false,
      isThanksVisible: false
    }
  },
  computed: {
    ...mapState(['pleaseAgree']),
    thanksMessage() {
      return this.isThanksVisible ? 'それでは、ごゆっくり' : ''
    }
  },
  mounted() {
    const isVisited = Cookies.get(COOKIE_VISIT_KEY)

    if (isVisited) {
      this.agree()
    } else {
      setTimeout(() => {
        this.isActive = true
      }, MODAL_DELAY)
    }
  },
  methods: {
    ...mapMutations(['agree', 'clsearPleaseAgree']),
    async handleClose() {
      this.isActive = false
      this.agree()

      Cookies.set(COOKIE_VISIT_KEY, COOKIE_VISIT_VALUE, {
        expires: COOKIE_EXPIRES,
        sameSite: 'lax'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.notice {
  &.mod-please {
    animation: attention 0.6s linear both;
  }
}

@keyframes attention {
  0% {
    transform: none;
  }
  15% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }
  30% {
    transform: translate3d(4%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }
  45% {
    transform: translate3d(-3%, 0, 0) rotate3d(0, 0, 1, -2deg);
  }
  60% {
    transform: translate3d(2%, 0, 0) rotate3d(0, 0, 1, 1deg);
  }
  75% {
    transform: translate3d(-1%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }
  100% {
    transform: none;
  }
}
</style>
