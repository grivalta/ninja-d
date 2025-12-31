<template>
  <v-card
    class="mx-auto"
    width="75%"
    color="#fff7ed">

    <v-card-text>
      <p class="text-h5 text--primary text-center">
        Ricavi
      </p>
      <p class="text-h4 text--primary text-center">
        €53,4k
      </p>
      <div class="text--primary text-center">
        Actual + Forecast
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="teal accent-4"
        @click="reveal = true">
        Obi €85k: Vis. progresso
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="transition-fast-in-fast-out v-card--reveal"
        style="height: 100%;">
        <v-card-text class="pb-0">
          <div class="text-center">
			  <v-progress-circular
				:rotate="-90"
				:size="100"
				:width="15"
				:value="63"
				color="blue">
				63%
			  </v-progress-circular>
          </div>
        </v-card-text>
        <v-card-actions class="pt-0">
          <v-btn
            text
            color="teal-accent-4"
            @click="reveal = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      reveal: false,
    }),
  }
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
.v-sheet--offset {
  /*top: -24px;*/
  position: relative;
}
.v-progress-circular {
  margin: 1rem;
}
</style>