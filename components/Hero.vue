<template>
  <div class="hero flex justify-center items-center bg-purple-400 text-white">
    <div class="hero-overlay bg-gradient-to-b from-transparent to-gray-900" />
    <div class="hero-text px-4">
      <h5 class="text-center font-tangerine font-bold mb-9 text-4xl">Undangan Pernikahan</h5>
      <div class="bg-white text-separator mx-auto -mt-6 mb-14"></div>
      <h1 class="md:text-8xl text-6xl font-ballet antialiased">Rofah</h1>
      <h4 class="text-center md:text-6xl text-4xl font-ballet pr-2">&</h4>
      <h1 class="text-right md:text-8xl text-6xl font-ballet antialiased pr-6">Didit</h1>
      <div class="text-center mt-6 text-sm underline font-montserrat">
        SABTU, 5 JUNI 2021
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  background-image: url('~assets/images/DSC02993.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .hero-overlay {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
  }

  .hero-text {
    min-width: 300px;
    max-width: 600px;
    width: 100%;
    z-index: 1;

    .text-separator {
      width: 100px;
      height: 4px;
      border-radius: 8px;
    }
  }
}
</style>

<script>
export default {
  mounted() {
    const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.querySelector('.hero').style.height = h + 'px';
  }
}
</script>