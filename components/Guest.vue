<template>
  <Section>
    <div class="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-gray-900 to-transparent" />
    <div class="relative z-1 text-center">
      <div class="w-full">
        <img src="~assets/images/golden-frame-2-top.png" alt="top-frame-2" class="mx-auto" width="280">
      </div>

      <div class="text-white my-2">
        <span class="font-montserrat text-sm">
          Kepada Yth,
          <br>
          Bapak / Ibu / Saudara/i
        </span>
        <br>
        <br>
        <span class="font-tangerine text-6xl font-bold">
          {{ guest }}
        </span>
        <br>
        <br>
        <span class="text-xs font-bold">
          Mohon Maaf apabila ada kesalahan dalam penulisan nama
        </span>
      </div>

      <div class="w-full">
        <img src="~assets/images/golden-frame-2-bottom.png" alt="bottom-frame-2" class="mx-auto" width="280">
      </div>
    </div>
  </Section>
</template>

<script>
export default {
  props: {
    guest: {
      type: String,
      default: ''
    }
  }
}
</script>