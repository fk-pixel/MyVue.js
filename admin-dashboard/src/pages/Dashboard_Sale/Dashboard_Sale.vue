<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Dashboard</h1>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="secondary"
              class="text-capitalize button-shadow mr-1"
              @click="download()"
              >Neueste Berichte</v-btn
            >
          </template>
        </v-menu>
      </v-row>
      <v-row>
        <v-col lg="3" sm="6" md="5" cols="12">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>Aktiv Kunden</p>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters class="pb-5">
                <v-col cols="5" class="my-auto">
                  <span
                    class="font-weight-medium card-dark-grey"
                    style="font-size: 48px"
                    >43</span
                  >
                </v-col>
                <v-col cols="6">
                  <Trend
                    :data="getRandomDataForTrends()"
                    :gradient="mock.trend.gradient"
                    :height="40"
                    stroke-width="4"
                    smooth
                  />
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between pb-3">
                <v-col cols="12">
                  <div class="card-light-grey">Heute:</div>
                  <div class="text-h6 card-dark-grey font-weight-regular">
                    {{ new Date() | moment("dddd, MMMM Do YYYY") }}
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3" sm="6" md="7" cols="12">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>Meine Bestellungen</p>
              <v-btn to="/bestellungen" icon>
                <v-icon color="primary">mdi-shopping-search</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters>
                <v-col cols="6" class="my-auto">
                  <span class="" style="font-size: 42px"
                    >{{ versandErfolg() }} % <span class="md-caption"></span>
                  </span>
                </v-col>
                <v-row no-gutters class="pb-3">
                  <v-col>
                    <div class="text-h6 card-light-grey font-weight-regular">
                      Sendungsstatus
                    </div>
                    <v-progress-linear
                      :value="versandErfolg()"
                      background-color="#ececec"
                      color="success"
                    ></v-progress-linear>
                  </v-col>
                </v-row>
              </v-row>
              <v-row no-gutters class="justify-space-between">
                <div>
                  <div class="subtext">
                    12 <v-icon color="red"> mdi-basket-fill</v-icon>
                  </div>
                  <div class="subtext-index">Bestellt</div>
                </div>
                <div>
                  <div class="subtext">
                    45 <v-icon color="warning"> mdi-truck-check</v-icon>
                  </div>
                  <div class="subtext-index">Geschickt</div>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3" sm="6" md="7" cols="12">
          <v-card class="mx-1 mb-1" style="min-height: 228px">
            <v-card-title class="pa-6 pb-3">
              <p>Anzahl Produkte</p>
              <v-btn to="/produkte" icon>
                <v-icon color="primary">mdi-forklift</v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters>
                <v-col
                  cols="6"
                  md="5"
                  lg="6"
                  xl="4"
                  class="my-auto text-truncate"
                >
                  <span>Ebay Lager</span>
                </v-col>
                <v-col cols="6" md="7" lg="6" xl="8">
                  <ApexChart
                    v-if="apexLoading"
                    height="35"
                    type="area"
                    :options="mock.apexArea1.options"
                    :series="mock.apexArea1.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="my-3">
                <v-col
                  cols="6"
                  md="5"
                  lg="6"
                  xl="4"
                  class="my-auto text-truncate"
                >
                  <span>Amazon Lager</span>
                </v-col>
                <v-col cols="6" md="7" lg="6" xl="8">
                  <ApexChart
                    v-if="apexLoading"
                    height="35"
                    type="area"
                    :options="mock.apexArea2.options"
                    :series="mock.apexArea2.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col
                  cols="6"
                  md="5"
                  lg="6"
                  xl="4"
                  class="my-auto text-truncate"
                >
                  <span>Inhaber Lager</span>
                </v-col>
                <v-col cols="6" md="7" lg="6" xl="8">
                  <ApexChart
                    v-if="apexLoading"
                    height="35"
                    type="area"
                    :options="mock.apexArea3.options"
                    :series="mock.apexArea3.series"
                  ></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col lg="3" sm="6" md="5" cols="12">
          <v-card class="mx-1 mb-1" style="height: 228px">
            <v-card-title class="flex-nowrap pa-6 pb-3">
              <p class="text-truncate">Auftragsaufschlüsselung</p>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pa-6 pt-0 mb-1">
              <v-row no-gutters>
                <v-col cols="12">
                  <ApexChart
                    height="144"
                    type="donut"
                    class="mt-1"
                    :options="mock.apexPie.options"
                    :series="mock.apexPie.series_order"
                  ></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-0">
              <v-row no-gutters>
                <v-col
                  cols="7"
                  sm="4"
                  md="4"
                  lg="5"
                  class="d-flex align-center"
                >
                  <p>Umsätze</p>
                </v-col>
                <v-col
                  sm="6"
                  md="6"
                  lg="5"
                  class="d-none d-sm-flex align-center"
                >
                  <v-icon size="18" color="warning">mdi-circle-medium</v-icon
                  ><span
                    class="card-dark-grey font-weight-regular mr-3"
                    style="font-size: 18px"
                    >Ebay</span
                  >
                  <v-icon size="18" color="success">mdi-circle-medium</v-icon
                  ><span
                    class="card-dark-grey font-weight-regular mr-3"
                    style="font-size: 18px"
                    >Amazon</span
                  >
                  <v-icon size="18" color="secondary">mdi-circle-medium</v-icon
                  ><span
                    class="card-dark-grey font-weight-regular"
                    style="font-size: 18px"
                    >Inhaber</span
                  >
                </v-col>
                <v-col cols="5" sm="2" md="2" lg="1" offset-lg="1">
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-select
                        class="main-chart-select"
                        v-model="mainApexAreaSelect"
                        v-bind="attrs"
                        v-on="on"
                        dense
                        flat
                        single-line
                        hide-details
                        :items="mock.select"
                        outlined
                      ></v-select>
                    </template>
                  </v-menu>
                </v-col>
              </v-row>
            </v-card-title>
            <v-card-text class="pa-6">
              <v-row>
                <v-col>
                  <ApexChart
                    v-if="apexLoading"
                    height="350"
                    type="area"
                    :options="mock.mainApexArea.options"
                    :series="
                      mainApexAreaSelect === 'Letzte Woche'
                        ? mock.mainApexArea.series
                        : mainApexAreaSelect === 'Letzten Monat'
                        ? mock.mainApexArea.series2
                        : mock.mainApexArea.series3
                    "
                  ></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from "./mock";
import Trend from "vuetrend";
import ApexChart from "vue-apexcharts";
import moment from "moment";

export default {
  name: "Dashboard",
  components: {
    Trend,
    ApexChart
  },
  data() {
    return {
      mock,
      apexLoading: false,
      mainApexAreaSelect: "Letzte Woche"
    };
  },
  methods: {
    getRandomDataForTrends() {
      const arr = [];
      for (let i = 0; i < 12; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }
      return arr;
    },
    generatePieSeries() {
      let series = [];

      for (let i = 0; i < 4; i++) {
        let y = Math.floor(Math.random() * (500 - 100 + 100)) + 100;
        series.push(y);
      }
      return series;
    },
    getRandomInt(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
    versandErfolg() {
      let x = Math.round((45 * 100) / 57);
      return x;
    }
    /* generatePdf(){
       var doc = new jsPDF('p', 'pt', 'A4');
         margins = {
            top: 80,
            bottom: 60,
            left: 40,
            width: 522
        };

      doc.fromHTML(this.$refs.mypdf, margins.left, margins.top,{
        'width' : margins.width
      });

      doc.save('test.pdf');
    }, */
  },
  mounted() {
    setTimeout(() => {
      this.apexLoading = true;
    });
  }
};
</script>

<style src="./Dashboard_Sale.scss" lang="scss" />
