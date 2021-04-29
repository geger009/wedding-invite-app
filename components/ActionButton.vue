<template>
  <div
    style="width: 45px; height: 45px;"
    class="flex items-center justify-center rounded-full bg-yellow-400 cursor-pointer"
    @click="muteClicked"
  >
    <VolumeOffIcon
      size="25"
      class="text-white"
      v-if="muteState"
    />

    <VolumeUpIcon
      size="25"
      class="text-white"
      v-if="!muteState"
    />
  </div>
</template>

<script>
import { Howler } from 'howler'
import { VolumeOffIcon, VolumeUpIcon } from '@vue-hero-icons/outline'

export default {
  data() {
    return {
      muteState: false
    }
  },
  components: {
    VolumeOffIcon,
    VolumeUpIcon
  },
  methods: {
    muteClicked() {
      this.muteState = !this.muteState
      Howler.mute(this.muteState)
    }
  }
}
</script>
