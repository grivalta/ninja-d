<template>
  <v-card class="mx-auto" width="75%" color="#eff6ff">

    <v-card-text>
      <p class="text-h6 text--primary text-center">
        Ordine medio
      </p>
      <p class="text-h5 text--primary text-center">
        €21.5k
      </p>
    </v-card-text>

    <v-sparkline class="nrdb-ui-sparkline" :auto-line-width="false" :fill="false" :gradient="gradient"
      :gradient-direction="'top'" :line-width="3" :model-value="value2" :padding="8" :smooth="10"
      :stroke-linecap="'round'" :type="'trend'" auto-draw>
    </v-sparkline>

  </v-card>
</template>

<script>
  export default {
    data: function () {
      return {
        gradient: ['#04f104', '#ffd200', '#f70000'],
        value2: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]
      }
    },
  }
</script>

<style>
  .v-sheet--offset {
    /*top: -24px;*/
    position: relative;
  }

  .nrdb-ui-sparkline path {
    stroke-dasharray: 0 !important;
  }
</style>