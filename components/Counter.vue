<template>
  <div class="w-full font-montserrat p-4">
    <div class="grid grid-cols-4 gap-3 lg:w-1/2 mx-auto">
      <div class="text-center">
        <div class="text-6xl">{{days}}</div>
      </div>
      <div class="text-center">
        <div class="text-6xl">{{hours}}</div>
      </div>
      <div class="text-center">
        <div class="text-6xl">{{minutes}}</div>
      </div>
      <div class="text-center">
        <div class="text-6xl">{{seconds}}</div>
      </div>
    </div><div class="grid grid-cols-4 gap-3 lg:w-1/2 mx-auto mt-4">
      <div class="text-center">
        <div class="text-lg">Hari</div>
      </div>
      <div class="text-center">
        <div class="text-lg">Jam</div>
      </div>
      <div class="text-center">
        <div class="text-lg">Menit</div>
      </div>
      <div class="text-center">
        <div class="text-lg">Detik</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  mounted() {
    const currentDate = new Date().getTime()
    this.generateCounter(currentDate)
    this.startCounter()
  },
  methods: {
    generateCounter(now) {
      // Get wedding date
      const countDownDate = new Date("Jun 5, 2021 08:00:00").getTime()
      // Find the distance between now and the count down date
      const distance = countDownDate - now

      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24)) >= 10 ? `${Math.floor(distance / (1000 * 60 * 60 * 24))}` : `0${Math.floor(distance / (1000 * 60 * 60 * 24))}`
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) >= 10 ? `${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}` : `0${Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) >= 10 ? `${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}` : `0${Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))}`
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000) >= 10 ? `${Math.floor((distance % (1000 * 60)) / 1000)}` : `0${Math.floor((distance % (1000 * 60)) / 1000)}`
    },
    startCounter() {
      const _self = this;
      setTimeout(function regenerateCounter() {
        const currentDate = new Date().getTime()
        _self.generateCounter(currentDate)
        setTimeout(regenerateCounter, 1000)
      }, 1000)
    }
  }
}
</script>
