<template>
  <v-timeline-item small>
    <template v-slot:icon>
      <v-icon></v-icon>
    </template>
    <template v-slot:opposite>
      <span>{{ produkteDate }}</span>
    </template>
    <v-card>
      <v-card-title class="h5--text"
        >Kunden: {{ produkte.Nutzer }}</v-card-title
      >
      <v-card-subtitle>Produkte: {{ produkte.Beschreibung }}</v-card-subtitle>
      <v-card-text>Gesamt: {{ produkte.Gesamt }}</v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import moment from "moment";

export default {
  props: ["produkte"],
  name: "TimelinesItem",

  computed: {
    produkteDate() {
      return moment(this.produkte.Verkauftam).format("MMMM Do YYYY");
    }
  }
};
</script>

<style src="./TimelinesItem.scss" lang="scss"></style>
