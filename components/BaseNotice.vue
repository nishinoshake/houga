<template>
  <BaseAlert
    :is-active="isActive"
    :handle-close="handleClose"
    :handle-animation-end="clsearPleaseAgree"
    error-message="映画のタイトルを選択すると、<br /><span>予告が再生</span>されますので、<br />音量に注意してください！"
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
        Cookies.set(COOKIE_VISIT_KEY, COOKIE_VISIT_VALUE, {
          expires: COOKIE_EXPIRES,
          sameSite: 'lax'
        })
      }, MODAL_DELAY)
    }
  },
  methods: {
    ...mapMutations(['agree', 'clsearPleaseAgree']),
    async handleClose() {
      this.isActive = false
      this.agree()
    }
  }
}
</script>

<style lang="scss" scoped>
.notice {
  &.mod-please {
    animation: scale-attention 0.3s $easeOutExpo both;
  }
}

@keyframes scale-attention {
  0%,
  100% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.1);
  }
}
</style>
