<template>
  <div style="width: 100%">
    <hero />
    <counter class="-mt-14" />
  </div>
</template>

<script>
import Counter from '~/components/Counter.vue'
import Hero from "~/components/Hero.vue"

export default {
  components: { Hero, Counter }
}
</script>
