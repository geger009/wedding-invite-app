<template>
  <div class="cover flex justify-center items-center text-white">
    <div class="cover-overlay bg-gray-900 opacity-50" />
    <div class="cover-text relative px-4">
      <h3 class="font-greatvibes font-bold text-4xl">
        Rofah & Didit Wedding
      </h3>

      <div class="text-center font-montserrat">
        <button class="rounded-full py-2 px-6 border-solid border-white border-2 text-white mt-6" @click="enterInvitation">
          <MailIcon class="text-white mr-2 inline-block" /> Open Invitation
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  width: 100%;
  background-image: url('~assets/images/DSC02993.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .cover-overlay {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;

    .cover-text {
      min-width: 300px;
      max-width: 600px;
      width: 100%;
      z-index: 1;
    }
  }
}
</style>

<script>
import { MailIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    MailIcon
  },
  mounted() {
    const h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.querySelector('.cover').style.height = h + 'px';
  },
  methods: {
    enterInvitation() {
      this.$store.commit('config/updateOpenStatus', true)
    }
  }
}
</script>
