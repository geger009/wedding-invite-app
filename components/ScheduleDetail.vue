<template>
  <div class="relative w-full text-center mb-10">
    <div class="w-full">
      <img src="~assets/images/golden-frame-2-top.png" alt="top-frame-2" class="mx-auto" width="280">
    </div>
    
    <div class="text-white my-2">
      <h4 class="text-4xl font-tangerine">{{ title }}</h4>

      <CalendarIcon size="55" class="my-4 mx-auto text-white" />

      <h6 class="font-montserrat text-sm">{{ dateString }}</h6>
      <h6 class="font-montserrat text-sm">Pukul: {{ timeString }}</h6>

      <MapIcon size="55" class="my-4 mx-auto text-white" />

      <h6 class="font-montserrat text-sm">{{ place }}</h6>
      <h6 class="font-montserrat text-sm">{{ address }}</h6>
    </div>

    <div class="w-full">
      <img src="~assets/images/golden-frame-2-bottom.png" alt="bottom-frame-2" class="mx-auto" width="280">
    </div>
  </div>
</template>

<script>
import { CalendarIcon, MapIcon } from '@vue-hero-icons/outline'

export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    dateString: {
      type: String,
      default: ''
    },
    timeString: {
      type: String,
      default: ''
    },
    place: {
      type: String,
      default: ''
    },
    address: {
      type: String,
      default: ''
    }
  },
  components: {
    CalendarIcon,
    MapIcon
  }
}
</script>
