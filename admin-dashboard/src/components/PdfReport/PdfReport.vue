<template>
  <div id="home" class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card card-body">
          <div class="form-group">
            <input
              type="text"
              id="name"
              v-model="name"
              class="form-control"
              placeholder="Enter name here"
            />
          </div>
          <button class="btn btn-primary pl-5 pr-5" @click="download">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  props: {
    label: {
      type: String
    },
    series: {
      type: Array
    },
    options: {
      type: Object
    }
  },
  name: "PieChart",
  components: {
    apexcharts: VueApexCharts
  },
  mounted() {
    const kategorieName = this.umsatzKategorie.map(d => d.KategorieName);
    const Stück = this.umsatzKategorie.map(d => d.Stück);

    this.renderChart(
      {
        labels: kategorieName,
        datasets: [
          {
            label: this.label,
            data: Stück
          }
        ]
      },
      this.options
    );
  }
};
</script>
