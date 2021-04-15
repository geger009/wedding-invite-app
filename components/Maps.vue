<template>
  <div class="w-full relative">
    <div class="maps-wrapper mx-auto p-6">
      <SectionTitle title="Location"/>
      <iframe class="maps-frame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.726184840265!2d111.0974182147756!3d-7.384551094671609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjMnMDQuNCJTIDExMcKwMDUnNTguNiJF!5e0!3m2!1sen!2sid!4v1618502015208!5m2!1sen!2sid" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.maps-wrapper {
  min-width: 300px;
  max-width: 800px;
  width: 100%;
}
</style>

<script>
export default {
  mounted() {
    window.addEventListener('resize', this.recalculateFrame);
    this.recalculateFrame();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.recalculateFrame);
  },
  methods: {
    recalculateFrame() {
      const wrapperW = document.querySelector('.maps-wrapper').offsetWidth
      document.querySelector('iframe.maps-frame').style.width = `${wrapperW}px`
    }
  }
}
</script>