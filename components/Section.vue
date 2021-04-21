<template>
  <div class="w-full relative">
    <div class="section-wrapper mx-auto p-6">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section-wrapper {
  min-width: 300px;
  max-width: 800px;
  width: 100%;
}
</style>