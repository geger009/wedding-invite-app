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
        '/DSC02978.jpg',
        '/DSC02981.jpg',
        '/DSC02982.jpg',
        '/DSC02987.jpg',
        '/DSC02991.jpg',
        '/DSC02992.jpg',
        '/DSC02993.jpg',
        '/DSC02978.jpg',
        '/DSC03060.jpg',
        '/DSC03065.jpg',
      ],
      vfTransitions: ['fade', 'kenburn', 'explode', 'warp', 'zip']
    }
  }
}
</script>