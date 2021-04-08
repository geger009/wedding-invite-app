<template>
  <div class="hero flex justify-center items-center bg-purple-400 text-white">
    <div class="hero-text">
      <h5 class="text-center text-bold font-sans mb-9">UNDANGAN<br />PERNIKAHAN</h5>
      <h1 class="text-center text-8xl font-ballet antialiased">Faza</h1>
      <h4 class="text-center mt-4 mb-8 font-serif">dan</h4>
      <h1 class="text-center text-8xl font-ballet antialiased">Didit</h1>
    </div>
  </div>
</template>

<style scoped>
.hero {
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