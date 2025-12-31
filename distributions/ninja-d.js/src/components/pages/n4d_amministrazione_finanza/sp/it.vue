<template>
  <v-card
    class="mx-auto"
    width="75%"
    color="#a9daef">

    <v-card-text>
      <p class="text-h6 text--primary">
        Impieghi Totali
      </p>
      <p class="text-h5 text--primary text-center">
        €3.536k
      </p>
      <div class="text--primary">
        Cap. Fisso + Cap. Circolante
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true"
      >
        Vis. trend
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;"
      >


	<v-sparkline class="nrdb-ui-sparkline" :auto-line-width="false" :fill="false"
		:gradient="gradient"
		:gradient-direction="'top'" :line-width="3" :model-value="value2" :padding="8"
		:smooth="10" :stroke-linecap="'round'" :type="'trend'" auto-draw>
	</v-sparkline>

        

        <v-card-text class="pb-0">
          <p class="text-h5 text--primary">
            Trend storico
          </p>
          
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal accent-4"
            @click="reveal = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>


  </v-card>
</template>

<script>
  export default {
    data: function () {
      return {
        gradient: ['#f72047', '#ffd200', '#1feaea'],
        value2: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],

        reveal: false,

      }
    }
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