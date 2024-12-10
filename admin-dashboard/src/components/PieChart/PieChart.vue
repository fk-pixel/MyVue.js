<template>
  <v-col cols="12" md="6">
    <v-card class="mx-1 mb-1">
      <v-card-title class="pa-6 pb-3">
        <p>Verkäufe nach Kategorie</p>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text class="pa-6 pt-6">
        <v-row no-gutters>
          <v-col cols="12" class="pb-7">
            <ApexChart
              height="350"
              type="donut"
              :series="apexPie.series"
              :options="apexPie.options"
            ></ApexChart>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
import ApexChart from "vue-apexcharts";
import config from "@/config";

export default {
  name: "PieChart",
  components: {
    ApexChart
  },
  data() {
    return {
      //Verkäufe nach Kategorie Daten
      apexPie: {
        options: {
          dataLabels: {
            enabled: true
          },
          colors: [
            config.light.bluedarken,
            config.light.secondary,
            config.light.amber,
            config.light.deeporange,
            config.light.greendarken,
            config.light.pastelred
          ],
          labels: [],
          legend: { position: "bottom", horizontalAlign: "center" },
          series: []
        }
      }
    };
  },
  created() {
    // Kategorik satislar icin updateseries
    this.axios.get("/api/Exkategoriens/umsatzKategorie").then(res => {
      const resData = res.data;
      this.apexPie.options = {
        labels: resData.map(item => item.KategorieName),
        series: resData.map(item => item.Stück)
      };
    });
  }
};
</script>
