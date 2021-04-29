<template>
  <div class="bg-gray-900 bg-image" style="width: 100%">
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
  </div>
</template>

<style lang="scss" scoped>
.bg-image {
  background-repeat: repeat;
  background-image: url('~assets/images/bg-min.png');
}
</style>

<script>
import { Howl } from 'howler'

export default {
  beforeMount() {
    const music = new Howl({
      src: ['/Pamungkas_To_The_Bone.mp3'],
      autoplay: true,
      loop: true
    })
  }
}
</script>
