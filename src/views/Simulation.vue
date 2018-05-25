<template>
  <section>
    <button @click.stop="startSimulation"> run</button>
    <button @click.stop="stopSimulation"> stop</button>
    <div class="result-area">

    </div>

  </section>
</template>

<script>
import ratesService from '../services/ratesService'
import x from '../services/ratesService'
export default {
  name: 'simulation',
  components: {},
  created() {
    // ratesService.printTickers();
    // ratesService.printBooks();
  },
  destroyed() {},

  methods: {
    startSimulation() {
      console.log('Running Simulation');
      ratesService.startSimulation();
    },
    stopSimulation() {
      console.log('Stopping Simulation');
      ratesService.stopSimulation();
    },
  }
}
</script>

<style lang="scss" scoped>

</style>
