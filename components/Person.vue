<template>
  <div class="relative w-full text-center mb-10">
    <!-- <div
      class="mx-auto aspect-w-1 aspect-h-1"
    >
      <img :src="`/${image}.jpg`" alt="foto-pengantin" class="foto-pengantin" />
    </div>
    
    <div class="absolute w-full" style="top: -19px;">
      <img src="~assets/images/golden-frame.png" alt="golden-frame">
    </div> -->

    <div class="text-center text-white">
      <h3 class="font-tangerine font-bold text-4xl">
        {{ name }}
      </h3>
      <p class="font-montserrat text-xs my-2">
        {{ gender == 'female' ? 'Putri dari:' : 'Putra dari:' }}
      </p>
      <h4 class="font-tangerine text-3xl">
        {{ fatherName }}
        <br>
        <span class="font-greatvibes">&</span>
        <br>
        {{ motherName }}
      </h4>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.foto-pengantin {
  border-radius: 100%;
}
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    gender: {
      type: String,
      default: 'female'
    },
    fatherName: {
      type: String,
      default: ''
    },
    motherName: {
      type: String,
      default: ''
    }
  }
}
</script>
