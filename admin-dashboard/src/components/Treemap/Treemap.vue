<template>
  <v-col lg="6" sm="6" md="6" cols="12">
    <v-card class="mx-1 mb-1">
      <v-card-title class="pa-6 pb-4">
        <p>Top 10 Kunden</p>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text class="pa-6 pt-5">
        <v-row no-gutters>
          <v-col cols="12" class="pb-7">
            <ApexChart
              height="350"
              type="treemap"
              :series="series"
              :options="chartOptions"
            ></ApexChart>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
//import mock from './mock'
//import axios from "axios";
import ApexChart from "vue-apexcharts";

export default {
  name: "Treemap",
  components: {
    ApexChart
  },
  data() {
    return {
      //mock,
      series: [
        {
          data: [
            {
              x: [],
              y: []
            }
          ]
        }
      ],
      chartOptions: {
        legend: {
          show: false
        },
        chart: {
          height: 350,
          type: "treemap"
        },
        title: {
          text: "Distibuted Treemap (different color for each cell)",
          align: "center"
        },
        colors: [
          "#3B93A5",
          "#F7B844",
          "#ADD8C7",
          "#EC3C65",
          "#CDD7B6",
          "#C1F666",
          "#D43F97",
          "#1E5D8C",
          "#421243",
          "#7F94B0"
        ],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false
          }
        }
      }
    };
  },
  computed: {},
  /* series: [
            {
              data: [
                {
                  x: '',
                  y: ''
                }
              ]
            }
          ], */
  created() {
    this.axios.get(`/api/Exshopbestellungens/best10kunden`).then(res => {
      const resData = res.data;
      this.series[0].data = [
        {
          ...this.series[0].data,
          data: [
            {
              ...this.series[0].data[0],
              x: resData.map(i => i.Nutzer),
              y: resData.map(i => i.Gesamt)
            }
          ]
        }
      ];
      /* [{...this.series,
      data: [{...this.series.data,
      x: resData.map(item => item.Nutzer)}
      ],
      }] */
    });
    /* this.axios.get(`/api/Exshopbestellungens/best10kunden`)
    .then((res) => {
      const resData = res.data
      this.series = [{...this.series,
      data: [{...this.series.data,
      y: resData.map(item => item.Gesamt)}
      ],
      }]
    }); */
  },

  methods: {
    getColor() {
      if (this.produkte.Stok > 0) return "green";
      else return "red";
    }
  }

  /*  mounted() {
    this.getProdukte();
  },  */
};
</script>

<style src="./Treemap.scss" lang="scss"></style>
