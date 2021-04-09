<template>
  <div class="hero flex justify-center items-center bg-purple-400 text-white">
    <div class="hero-text px-4">
      <h5 class="text-center font-pacifico mb-9 text-2xl">Undangan Pernikahan</h5>
      <h1 class="md:text-8xl text-6xl font-ballet antialiased">Faza</h1>
      <h4 class="text-center md:text-6xl text-4xl font-ballet pr-2">&</h4>
      <h1 class="text-right md:text-8xl text-6xl font-ballet antialiased pr-6">Didit</h1>
    </div>
  </div>
</template>

<style scoped>
.hero {
  width: 100%;
}
.hero .hero-text {
  min-width: 300px;
  max-width: 600px;
  width: 100%;
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