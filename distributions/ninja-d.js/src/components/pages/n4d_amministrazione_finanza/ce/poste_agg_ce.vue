<template>

<v-expansion-panels>
    <v-expansion-panel focusable>
        <v-expansion-panel-title class="text-h5 text--primary text-center">Dettaglio poste aggiuntive</v-expansion-panel-title>
        <v-expansion-panel-text>

			<v-row class="mb-6" no-gutters>

			  <v-col>
				<v-sheet class="pa-2 ma-2">
				  <v-card
					class="mx-auto"
					width="75%"
					color="#a9daef">
					<v-card-text>
					  <p class="text-h6 text--primary">
						Mar. Op. L. (EBITDA)
					  </p>
					  <p class="text-h5 text--primary text-center">
						€505,5k
					  </p>
					</v-card-text>
					<v-sparkline class="nrdb-ui-sparkline" :auto-line-width="false" :fill="false"
						:gradient="gradient"
						:gradient-direction="'top'" :line-width="3" :model-value="value2" :padding="8"
						:smooth="10" :stroke-linecap="'round'" :type="'trend'" auto-draw>
					</v-sparkline>
				  </v-card>
				</v-sheet>
			  </v-col>

			  <v-col>
				<v-sheet class="pa-2 ma-2">
				  <v-card
					class="mx-auto"
					width="75%"
					color="#a9daef">
					<v-card-text>
					  <p class="text-h6 text--primary">
						Prodotto Netto (PNA)
					  </p>
					  <p class="text-h5 text--primary text-center">
						€648.5k
					  </p>
					</v-card-text>
					<v-sparkline class="nrdb-ui-sparkline" :auto-line-width="false" :fill="false"
						:gradient="gradient"
						:gradient-direction="'top'" :line-width="3" :model-value="value2" :padding="8"
						:smooth="10" :stroke-linecap="'round'" :type="'trend'" auto-draw>
					</v-sparkline>
				  </v-card>
				</v-sheet>
			  </v-col>

			  <v-col>
				<v-sheet class="pa-2 ma-2">
				  <v-card
					class="mx-auto"
					width="75%"
					color="#a9daef">
					<v-card-text>
					  <p class="text-h6 text--primary">
						Redditi distribuiti
					  </p>
					  <p class="text-h5 text--primary text-center">
						€158k
					  </p>
					</v-card-text>
					<v-sparkline class="nrdb-ui-sparkline" :auto-line-width="false" :fill="false"
						:gradient="gradient"
						:gradient-direction="'top'" :line-width="3" :model-value="value2" :padding="8"
						:smooth="10" :stroke-linecap="'round'" :type="'trend'" auto-draw>
					</v-sparkline>
				  </v-card>
				</v-sheet>
			  </v-col>

			  <v-col>
				<v-sheet class="pa-2 ma-2">
				  <v-card
					class="mx-auto"
					width="75%"
					color="#a9daef">
					<v-card-text>
					  <p class="text-h6 text--primary">
						Reddito Op.ivo (RO)
					  </p>
					  <p class="text-h5 text--primary text-center">
						€491k
					  </p>
					</v-card-text>
					<v-sparkline class="nrdb-ui-sparkline" :auto-line-width="false" :fill="false"
						:gradient="gradient"
						:gradient-direction="'top'" :line-width="3" :model-value="value2" :padding="8"
						:smooth="10" :stroke-linecap="'round'" :type="'trend'" auto-draw>
					</v-sparkline>
				  </v-card>
				</v-sheet>
			  </v-col>

			</v-row>

        </v-expansion-panel-text>
	</v-expansion-panel>
</v-expansion-panels>

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