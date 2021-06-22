const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR,GBP";


const vm = new Vue({
    el: '#app',
    data: {
        results: [] /* [mock data] {
            "BTC" : {"USD": 32549.40, "EUR":27260.01,"GBP":23271.29 },
            "ETH" : {"USD":1896.32,"EUR":1588.16, "GBP":1359.57 },
            "NEW Currency":{"USD":5.60,"EUR":4.70, "GBP":6.20 }
        }  */
    },
    mounted() {
        this.upDate();
        this.timer = setInterval(this.upDate, 10000)
    },
    methods: {
        upDate() {
            axios.get(url).then(res => {
                this.results = res.data
            })
        },
        cancelAutoUpdate() {
            clearInterval(this.timer)
        },
        beforeDestroy() {
            clearInterval(this.timer)
        } 
        
    }
  });