<template>
  <BaseAlert :is-active="hasErrorMessage" :handle-close="clearErrorMessage">
    <p class="alert-text" v-html="errorMessage"></p>
  </BaseAlert>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BaseAlert from '@/components/BaseAlert'

export default {
  components: {
    BaseAlert
  },
  computed: {
    ...mapState(['errorMessage']),
    hasErrorMessage() {
      return !!this.errorMessage
    }
  },
  methods: {
    ...mapMutations(['clearErrorMessage'])
  }
}
</script>
