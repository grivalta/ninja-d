<template>

<!-- v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>Dettaglio vendite per cliente</v-expansion-panel-title>
        <v-expansion-panel-text-->
    <h3 class="text-h5 text--primary text-center">Trattamenti colturali Parcelle-campi-serre (2024-2025)</h3>
    <div id="app">
        <v-text-field v-model="search" label="Search" prepend-inner-icon="mdi-magnify" single-line variant="outlined"
        hide-details></v-text-field>
        <v-data-table v-model:search="search" :items="msg?.payload" :headers="msg?.payload.key" :items-per-page="10" height="50vh" 
        fixed-header></v-data-table>
        <!-- group-by="AA consegna ordine" show-group-by></v-data-table -->
    </div>
        <!-- /v-expansion-panel-text-->
      <!-- /v-expansion-pane--l>

  <!-- /v-expansion-panel -->
<!-- /v-expansion-panels-->
</template>

<script>
    export default {
    data () {
      return {
        search: '',
      }
    },
  }
</script>