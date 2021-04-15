<template>
  <div>
    <h2 class="text-white text-2xl font-montserrat mb-2">{{ title }}</h2>
    <div class="bg-white text-separator mb-4"></div>
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