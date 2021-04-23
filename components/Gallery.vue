<template>
  <Section>
    <SectionTitle title="Gallery" />
    <vue-flux
      :options="vfOptions"
      :images="vfImages"
      :transitions="vfTransitions"
      ref="slider"
    >
      <template v-slot:preloader>
        <flux-preloader />
      </template>

      <template v-slot:pagination>
        <flux-pagination />
      </template>
    </vue-flux>
  </Section>
</template>

<script>
import { VueFlux, FluxPagination, FluxPreloader } from 'vue-flux'

export default {
  components: {
    VueFlux,
    FluxPagination,
    FluxPreloader,
  },
  data() {
    return {
      vfOptions: {
        allowFullscreen: false,
        allowToSkipTransition: true,
        autohideTime: 1500,
        autoplay: true,
        bindKeys: false,
        delay: 3000,
        enableGestures: false,
        infinite: true,
        lazyLoad: true,
        lazyLoadAfter: 3,
      },
      vfImages: [
        '/DSC02982-min.jpg',
        '/DSC02987-min.jpg',
        '/DSC02993-min.jpg',
        '/DSC03009-min.jpg',
        '/DSC03024-min.jpg',
        '/DSC03044-min.jpg',
        '/DSC03065-min.jpg',
        '/DSC03095-min.jpg',
      ],
      vfTransitions: ['fade', 'kenburn', 'explode', 'warp', 'zip']
    }
  }
}
</script>