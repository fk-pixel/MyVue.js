<template>
  <div
    id="reportrange"
    style="background: #fff; cursor: pointer, padding: 5px 10px; borde: 1px solid #ccc; width: 100%"
  >
    <i class="fa fa-calendar"></i>&nbsp;
    <span></span>
    <i class="fa fa-caret-down"></i>
  </div>
</template>

<script>
//import mock from './mock'
import axios from "axios";
import moment from "moment";

export default {
  name: "TimePicker",
  /* props: {
    columns: Array,
    entries: Array
  }, */
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},

  methods: {
    $function() {
      var start = moment().subtract(29, "days");
      var end = moment();

      function cb(start, end) {
        "#reportrange span".html(
          start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
        );
      }

      "#reportrange".daterangepicker(
        {
          startDate: start,
          endDate: end,
          ranges: {
            Today: [moment(), moment()],
            Yesterday: [
              moment().subtract(1, "days"),
              moment().subtract(1, "days")
            ],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [
              moment()
                .subtract(1, "month")
                .startOf("month"),
              moment()
                .subtract(1, "month")
                .endOf("month")
            ]
          }
        },
        cb
      );

      cb(start, end);
    },
    getColor() {
      if (this.produkte.Stok > 0) return "green";
      else return "red";
    },

    getProdukte() {
      axios
        .get(`/api/ExProducts`, {
          params: {
            access_token: this.$store.state.token.id,
            filter: {
              where: {}
            }
          }
        })
        .then(res => {
          //this.loading = false;
          this.produkte = res.data;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    axiosItems() {
      axios
        .get(`/api/ExProducts`, {
          params: {
            access_token: this.$store.state.token.id,
            filter: { where: {} }
          }
        })
        .then(res => {
          this.items = res.data;
        });
    },
    initialize() {
      this.axiosItems();
    }
  },

  mounted() {}
};
</script>

<style src="./TimePicker.scss" lang="scss"></style>
