<template>
  <Section>
    <SectionTitle title="Location"/>
    <div class="maps-wrapper">
      <iframe class="maps-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.726184840265!2d111.0974182147756!3d-7.384551094671609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjMnMDQuNCJTIDExMcKwMDUnNTguNiJF!5e0!3m2!1sen!2sid!4v1618502015208!5m2!1sen!2sid" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>

    <div class="text-center font-montserrat">
      <button class="rounded-full py-2 px-6 bg-yellow-600 text-white mt-6" @click="gotoMaps">
        <MapIcon class="text-white mr-2 inline-block" /> Open Google Maps
      </button>
    </div>
  </Section>
</template>

<style lang="scss" scoped>
.maps-wrapper {
  width: 100%;

  .maps-frame {
    width: 100%;
  }
}
</style>

<script>
import { MapIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    MapIcon
  },
  methods: {
    gotoMaps() {
      window.open("https://goo.gl/maps/jABQ8yrobqZT9ee49", "_blank")
    }
  }
}
</script>