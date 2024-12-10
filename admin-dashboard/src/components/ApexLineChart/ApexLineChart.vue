<template> 
<v-col cols="12" md="12">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <v-row no-gutters>
                <p>Umsätze</p>
                <v-spacer></v-spacer>
              </v-row>
            </v-card-title>
            
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters>
                <v-col cols="12">
                  <ApexChart
                    type="area"
                    height='350'
                    :options="apexArea.options"
                    :series=" apexArea.series"
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
  name: "ApexLineChart",
  components: {
    ApexChart,
  },
  data() {
    return {
      ApexAreaSelect: "Letzte Woche",
      //select: ['Letzte Woche', 'Letzten Monat', 'Letztes Jahr'],
      apexArea: {
        options: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          colors: [config.light.primary, config.light.success],
          dataLabels: {
            enabled: false,
          },
          xaxis: {
            type: "datetime",
            categories: [],
          },
          tooltip: {
            x: {
              format: "dd/MM/yy",
            },
          },
          legend: {
            show: false,
          },
          fill: {
            type: 'solid',
            opacity: 0.2,
            colors: [config.light.primary, config.light.success],
          },
          stroke: {
            width: 1,
            curve: 'smooth'
          },
        },
        series: [{
            name: "Ebay",
            data: [],
        }],
        series2: [{
            name: "Ebay",
            data: [],
        }],
        series3: [{
            name: "Ebay",
            data: [],
        }]        
      },
    }
  },      
  computed: {
},
   created() {
    
    //Umsätze Grafik 365 Tage
    this.axios.get("/api/Exshopbestellungens/UmsatzLetztesjahr")
    .then((res) => {
        const resData = res.data
        this.apexArea = { ...this.apexArea, 
          series: [{...this.apexArea.series[0],
            data: resData.map(item => item.Gesamt)}
          ],
          options: {...this.apexArea.options,
            xaxis: {...this.apexArea.options.xaxis, 
            categories: [
              ...resData.map(item => item.Verkauftam)
            ]}
          }
        }
      }
    );
  }, 
  
  methods: {
    getColor () {
              if (this.produkte.Stok > 0) return 'green'
              else return 'red'
    },
  }, 
mounted() {
  }, 
};

</script>

<style src="./ApexLineChart.scss" lang="scss"></style>

