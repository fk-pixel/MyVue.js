<template>
  <v-container style="max-width: 500px;">
    <v-timeline>
      <v-timeline-item small>
        <template v-slot:opposite>
          <span :class="`.text-sm-body-2`" v-text="produkteDate"></span>
        </template>
        <div class="py-4">
          <h2 :class="`headline font-weight-light mb-4 --text`">
            Kunden: {{ produkte.Nutzer }}
          </h2>
          <div>
            {{ produkte.Beschreibung }}
          </div>
          <div>{{ produkte.Gesamt }} €</div>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
import moment from "moment";

export default {
  props: ["produkte"],
  name: "TimelinesCard",

  computed: {
    produkteDate() {
      return moment(this.produkte.Verkauftam).format("MMMM Do YYYY");
    }
  }
};
</script>

<style src="./TimelinesCard.scss" lang="scss"></style>
