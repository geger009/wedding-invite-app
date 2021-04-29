<template>
  <div class="bg-gray-900 bg-image" style="width: 100%">
    <template v-if="openState" >
      <Hero />
      <Opening />
      <Couple />
      <Schedule />
      <Counter />
      <Maps />
      <Gallery />
      <Quotes />
      <CovidProtocol />
      <Closing />

      <ActionButton class="fixed bottom-3 right-3 z-10" />
    </template>

    <template v-if="!openState">
      <Cover />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.bg-image {
  background-repeat: repeat;
  background-image: url('~assets/images/bg-min.png');
}
</style>

<script>
import { Howl, Howler } from 'howler'

export default {
  data() {
    return {
      audio: null
    }
  },
  computed: {
    openState: function() {
      return this.$store.state.config.openStatus
    }
  },
  watch: {
    openState(newVal, oldValue) {
      if (newVal == true) {
        this.audio.play();
      }
    }
  },
  beforeMount() {
    this.audio = null
    this.audio = new Howl({
      src: ['/Pamungkas_To_The_Bone.mp3'],
      loop: true
    })
  }
}
</script>
