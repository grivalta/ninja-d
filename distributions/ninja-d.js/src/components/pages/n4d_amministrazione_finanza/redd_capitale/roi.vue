<template>
  <v-card class="mx-auto" width="75%" color="#a9efe0">

    <v-card-text>
      <p class="text-h5 text--primary">
        ROI
      </p>
      <p class="text-h4 text--primary text-center">
        {{ valore }}%
      </p>
      <div class="text--primary">
        Redd. Op.ivo (RO) / Cap. Inv. (KI)
      </div>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="teal accent-4" @click="reveal = true">
        Obi: {{ obiettivo }}%: Vis. Progresso
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card v-if="reveal" class="v-card--reveal"
        style="height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center; z-index: 10;">

        <v-card-text class="flex-grow-1 d-flex flex-column justify-center align-center">
          <v-progress-circular :rotate="-90" :size="95" :width="15" :model-value="progresso" :color="getProgressoColor">
            {{ progresso }}%
          </v-progress-circular>

          <!-- div class="text-caption mt-2 text-grey">Target: {{ obiettivo }}%</div -->

          <v-card-actions class="justify-center w-100">
            <v-btn text color="teal" @click="reveal = false"><span class="text-grey">Target: {{ obiettivo }}% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Chiudi</v-btn>
          </v-card-actions>

        </v-card-text>

        <!-- v-card-actions class="justify-start w-100">
          <v-btn text color="teal" @click="reveal = false">Close</v-btn>
        </v-card-actions -->
      </v-card>
    </v-expand-transition>

  </v-card>
</template>

<script>
export default {
    data: () => ({
        reveal: false,
        valore: 0,
        obiettivo: 0,
        progresso: 0,
        label_formula: "Caricamento...",
    }),
	
	computed: {
    getProgressoColor() {
      if (this.progresso < 50) return 'orange-darken-1';
      if (this.progresso < 90) return 'blue-darken-1';
      return 'green-darken-2';
    }
	},
	
    watch: {
        msg: function (newMsg) {
            if (!newMsg || newMsg.topic !== "ROI") return; 

            this.valore = newMsg.payload.valore || 0;
            this.obiettivo = newMsg.payload.obi || 0;
            this.label_formula = newMsg.payload.label || "ROI";

            if (this.obiettivo !== 0) {
                this.progresso = Math.min(Math.round((this.valore / this.obiettivo) * 100), 100);
            } else {
                this.progresso = 0;
            }
        }
    }
}
</script>

<style scoped>
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 1 !important;
    position: absolute;
    width: 100%;
    border-top: 2px solid #009688;
  }
</style>