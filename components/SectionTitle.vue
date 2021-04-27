<template>
  <div class="w-full text-center mb-4">
    <img class="mx-auto" style="height: 50px;" src="~assets/images/golden-frame-top.png" alt="top-frame">
    <h2 class="text-white text-5xl font-tangerine mt-2 mb-1">{{ title }}</h2>
    <img class="mx-auto" style="height: 50px;" src="~assets/images/golden-frame-bottom.png" alt="bottom-frame">
  </div>
</template>

<style lang="scss" scoped>
.text-separator {
  margin-left: 4px;
  width: 40px;
  height: 4px;
  border-radius: 8px;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
    }
  }
}
</script>