<template>
  <v-col cols="12" md="6">
    <v-card class="mx-1 mb-1">
      <v-card-title class="pa-6 pb-2 mb-4">
        <p>Verkäufe nach Saison <small>(Top 5)</small></p>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text class="pa-1 pt-0 pb-4">
        <v-row no-gutters>
          <v-col cols="12">
            <ApexChart
              type="scatter"
              height="350"
              :options="chartOptions"
              :series="series"
            ></ApexChart>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
//import mock from './mock'
import config from "../../config";
import ApexChart from "vue-apexcharts";
//import moment from "moment";

export default {
  name: "Scatter",
  components: {
    ApexChart
  },
  data() {
    return {
      series: [
        {
          name: "750433",
          data: [
            [1, 5],
            [2, 9],
            [3, 7],
            [4, 6],
            [5, 2],
            [6, 0],
            [7, 4],
            [8, 0],
            [9, 0],
            [10, 0],
            [11, 0],
            [12, 0]
          ]
        },
        {
          name: "A27703",
          data: [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 25],
            [6, 3],
            [7, 1],
            [8, 0],
            [9, 0],
            [10, 0],
            [11, 0],
            [12, 0]
          ]
        },
        {
          name: "20979-042",
          data: [
            [1, 0],
            [2, 3],
            [3, 8],
            [4, 6],
            [5, 8],
            [6, 0],
            [7, 0],
            [8, 0],
            [9, 0],
            [10, 0],
            [11, 0],
            [12, 3]
          ]
        },
        {
          name: "13522-10",
          data: [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 6],
            [6, 0],
            [7, 22],
            [8, 0],
            [9, 0],
            [10, 0],
            [11, 0],
            [12, 0]
          ]
        },
        {
          name: "Deco45",
          data: [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
            [5, 11],
            [6, 7],
            [7, 2],
            [8, 4],
            [9, 0],
            [10, 0],
            [11, 0],
            [12, 0]
          ]
        } /* ,
          {
            name: 'Deco81',
            data: [
              [0, 1],
              [0, 2],
              [0, 3],
              [0, 4],
              [0, 5],
              [0, 6],
              [0, 7],
              [24, 8],
              [0, 9],
              [0, 10],
              [0, 11],
              [0, 12],
            ]
          },
          {
            name: '31801-068',
            data: [
              [0, 1],
              [5, 2],
              [16, 3],
              [0, 4],
              [0, 5],
              [0, 6],
              [0, 7],
              [0, 8],
              [0, 9],
              [0, 10],
              [0, 11],
              [0, 12],
            ]
          },
          {
            name: '301861',
            data: [
              [0, 1],
              [0, 2],
              [0, 3],
              [0, 4],
              [0, 5],
              [1, 6],
              [20, 7],
              [0, 8],
              [0, 9],
              [0, 10],
              [0, 11],
              [0, 12],
            ]
          },
          {
            name: '932607',
            data: [
              [0, 1],
              [0, 2],
              [0, 3],
              [2, 4],
              [4, 5],
              [0, 6],
              [11, 7],
              [4, 8],
              [0, 9],
              [0, 10],
              [0, 11],
              [0, 12],
            ]
          },
          {
            name: '324494',
            data: [
              [0, 1],
              [0, 2],
              [0, 3],
              [0, 4],
              [5, 5],
              [5, 6],
              [10, 7],
              [1, 8],
              [0, 9],
              [0, 10],
              [0, 11],
              [0, 12],
            ]
          }, */
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "scatter",
          animations: {
            enabled: false
          },
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          }
        },
        colors: [
          "#056BF6",
          "#D2376A",
          config.light.success,
          config.light.amber,
          config.light.deeporange
        ],
        xaxis: {
          tickAmount: 11,
          min: 1,
          max: 12
        },
        yaxis: {
          tickAmount: 24,
          min: 0,
          max: 26
        },
        markers: {
          size: 7
        },
        /* fill: {
              type: 'image',
              opacity: 1,
              image: {
                src: ['https://i.ebayimg.com/images/g/ThEAAOSw~sJgA2V~/s-l300.png',
                      'https://i.ebayimg.com/images/g/-vYAAOSwr2FgYdeq/s-l500.png',
                      'https://i.ebayimg.com/images/g/l0gAAOSwc1FfvW9Q/s-l500.jpg',
                      'https://i.ebayimg.com/images/g/Z~sAAOSwU1pgjoOJ/s-l500.jpg',
                      'https://i.ebayimg.com/images/g/Fx4AAOSw6Utgjv5h/s-l1600.jpg',
                      'https://i.ebayimg.com/images/g/nZkAAOSwFHFgp~b9/s-l500.jpg',
                      'https://i.ebayimg.com/images/g/yPQAAOSwKLpgCYu9/s-l500.jpg',
                      'https://i.ebayimg.com/images/g/eu0AAOSwMdNgbcMo/s-l500.jpg',
                      'https://i.ebayimg.com/images/g/YmIAAOSweDBgbHSI/s-l500.jpg',
                      'https://i.ebayimg.com/images/g/NF0AAOSwVw9gjoFd/s-l500.jpg'
                ],
                width: 40,
                height: 40
              }
            }, */
        legend: {
          labels: {
            useSeriesColors: true
          },
          markers: {
            customHTML: [
              function() {
                return "";
              },
              function() {
                return "";
              }
            ]
          }
        }
      }
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>

<style src="./Scatter.scss" lang="scss"></style>
