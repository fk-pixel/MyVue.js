<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Dashboard</h1>
      </v-row>
      <v-row>
        <v-col xs="4" md="4" cols="12">
          <v-card
           color="warning"
           elevation="4"
           to="/bestellungen3"
          >
          <v-row no-gutters>
          <v-card-text class="mini-card-text pb-3 white--text">
            <v-btn to="/bestellungen3" icon>
              <v-icon
              class="mini-icon"
              left
              size="2rem"
              color="white"
              >mdi-alert-circle-outline
              </v-icon></v-btn>
            Ausstehende Bestellungen:
            {{ inbearbeitungItems.length }}
          </v-card-text>
          </v-row>
          </v-card>
        </v-col>

        <v-col xs="4" md="4" cols="12">
          <v-card
          color="pastelred"
          elevation="4"
          to="/bestellungen4"
          >
          <v-row no-gutters>
            <v-card-text class="mini-card-text justify-around pb-3 white--text">
            <v-btn to="/bestellungen4" icon>
                <v-icon
                class="mini-icon"
                left
                size="2rem"
                color="white"
                >mdi-cart-remove
                </v-icon></v-btn>
            Stornierung der letzten Woche:
            {{ storniertItems.length }}
          </v-card-text>
           </v-row>
          </v-card>
        </v-col>

        <v-col xs="4" md="4" cols="12">
          <v-card
           color="success"
           elevation="4"
           to="/bestellungen2"
           >
            <v-row no-gutters>
              <v-card-text class="mini-card-text justify-around pb-3 white--text">
                <v-btn to="/bestellungen2" icon>
                  <v-icon
                  class="mini-icon"
                  left
                  size="2rem"
                  color="white"
                  >mdi-truck-check
                  </v-icon></v-btn>
              Versandung der letzten Woche:
              {{ abgeschlossenItems.length }}
              </v-card-text>
            </v-row>
          </v-card>
        </v-col>

        <v-col xs="4" md="4" cols="12">
          <v-card
          class="mb-1"
          color="amber"
          dark
          >
            <v-card-title  class="text-h5 justify-space-between pb-0">
              Bestellungen
              <v-card-subtitle>(30 Tage)</v-card-subtitle>
              <v-spacer></v-spacer>
            </v-card-title>
              <v-row auto no-gutters class="justify-space-around pa-1">
                <v-icon
                color="white"
                size="4rem"
                >mdi-basket
                </v-icon>
                <div class="h1-font-size" style="font-size: 3rem">
                  <div v-for="item in shopAnzahl" :key="item.Anzahl">
                    {{item.Anzahl}}
                  </div>
                </div>
              </v-row>
          </v-card>
        </v-col>

        <v-col  xs="4" md="4" cols="12">
          <v-card
            class="mb-1"
            color="deep-orange"
            dark>
            <v-card-title class="text-h5 justify-space-between pb-0" no-gutters>
              Umsätze
              <v-card-subtitle>(30 Tage)</v-card-subtitle>
              <v-spacer></v-spacer>
            </v-card-title>
             <v-row auto no-gutters class="justify-space-around pa-1">
                <div>
                <v-icon color="white" size="4rem">mdi-currency-eur</v-icon>
                </div>
                <div class="h1-font-size" style="font-size:3rem">
                  <div v-for="item in getlastmonthGesamt" :key="item.Insgesamt">
                  {{item.Insgesamt}}
                  </div>
                </div>
             </v-row>
          </v-card>
        </v-col>

        <v-col xs="4" md="4" cols="12">
          <v-card
            class="mb-1"
            color="teal accent-4"
            dark>
            <v-card-title class="text-h5 justify-space-between pb-0">
              Prozentsatz
              <v-card-subtitle>(Zwischen 2 Monat)</v-card-subtitle>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-row auto no-gutters class="justify-space-around pa-1">
              <div>
                <v-icon color="white" size="4rem">mdi-chart-areaspline</v-icon>
              </div>
              <div class="h1-font-size" style="font-size: 3rem">
              {{ prozentGewinn && prozentGewinn.prozent }} %
              </div>
            </v-row>
          </v-card>
        </v-col>

        <PieChart />

        <Scatter />

        <ApexLineChart />

        <v-col xs="6" md="12" cols="12">
          <v-card class="margin: 0 auto">
            <v-card-title class="pa-6 pb-0">
              <p>Meistverkaufte Produkte</p>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-simple-table

              >
                <template v-slot:default>
                  <thead class="pl-2">
                    <tr height="50%">
                      <th class="text-left pa-6">PRODUKT-ID</th>
                      <th class="text-left">PRODUKT</th>
                      <th class="text-left">STÜCK</th>
                      <th class="text-left">ZUM PRODUKT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in meistVerkaufte" :key="item.BestanEinheit">
                      <td class="pa-6">{{ item.BestanEinheit }}</td>
                      <td>{{ item.Name }}</td>
                      <td>
                        <v-chip
                          link
                          text-color="white"
                          color="primary"
                          class="ma-2 ml-0"
                        >
                          {{ item.Verkauftemenge }}
                        </v-chip>
                      <td>
                        <v-chip
                          :href="`${item.Auktionslink}`"
                          target="_blank"
                          color="orange"
                          class="ma-2 ml-0"
                        >
                          <v-icon color="white" middle> mdi-store </v-icon>
                        </v-chip>
                      </td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col
          xs="4" md="4" cols="12">
          <v-row no-gutters>
            <v-card
              v-if="ausstehendeRechnungen.length > 0"
              class="mx-1 mb-1">
              <v-img
                max-height="150"
                src="https://cdn.pixabay.com/photo/2021/07/11/20/20/receipt-6404855_960_720.jpg"
              >
              </v-img>
              <v-card-title class="pa-6 pb-4">
                <p>Ausstehende Bestellungen</p>
              </v-card-title>
              <v-card-text class="pb-0 pa-2">
              <v-timeline
                align-top
                dense
              >
                <v-timeline-item
                  v-for="message in ausstehendeRechnungen"
                  :key="message.OrderID"
                  small
                  color="orange"
                >
                  <div>
                    <div class="font-weight-normal">
                      <strong>{{ message.Nutzer }}</strong> @{{ message.Verkauftam | moment("dddd, MMMM Do") }}
                    </div>
                    <div>
                      {{ message.Beschreibung }}
                    </div>
                    <div>
                        <v-chip
                        class="mt-1"
                        small
                        color="primary white--text"
                        :href="`mailto:${ message.Email }`"
                        >E-Mail senden
                        </v-chip>
                    </div>
                  </div>
                </v-timeline-item>
              </v-timeline>
              </v-card-text>
            </v-card>
          </v-row>
        </v-col>

        <v-col xs="8" xl="8" md="8" cols="12">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-4">
             <p>Letzte Verkäufe</p>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-simple-table>
                <template v-slot:default>
                  <thead class="pl-2">
                    <tr>
                      <th>
                      <v-icon color="grey"></v-icon>
                      </th>
                      <th class="text-left pa-6">KUNDEN</th>
                      <th class="text-left">PRODUKT</th>
                      <th class="text-left">MARKETPLACE</th>
                      <th class="text-left">GESAMT</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in last5produkte" :key="item.Nutzer">
                      <td>
                        <v-icon color="primary">mdi-account</v-icon>
                      </td>
                      <td class="pa-6">{{ item.Nutzer }}</td>
                      <td>{{ item.Beschreibung }}</td>
                      <td>{{ item.Marketplace }}</td>
                      <td>{{ item.Gesamt }}€</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from "./mock";
import PieChart from '../../components/PieChart/PieChart.vue'
import ApexLineChart from "../../components/ApexLineChart/ApexLineChart.vue"
import Scatter from "../../components/Scatter/Scatter.vue"

export default {
  name: "Dashboard",
  components: {
    //Trend,
    //ApexChart,
    ApexLineChart,
    Scatter,
    PieChart,
  },
  data() {
    return {
    menu: [
          'Edit',
          'Copy',
          'Delete',
          'Print'
    ],
    mock,
    best10kunden:[],
    last5produkte: [],
    verkaufteMenge: [],
    prozentGewinn: null,
    lastweekOrderstatus: [],
    lastmonthGesamt: [],
    umsatzKategorie: [],
    shopAnzahl:[],
    shopLager: [],
    ausstehendeRechnungen: [],
    items: [],
    meistVerkaufte: [],
    }
  },
  methods: {
    versandErfolg() {
      let versandsstatus = Math.round((12 * 100) / (12 + 45));
      return versandsstatus;
    },
  },
  computed: {
    storniertItems() {
      return this.lastweekOrderstatus.filter(
        (s) => s.OrderStatus == "Storniert"
      );
    },
    ebaynullverkaufteMenge() {
      return this.verkaufteMenge.filter(
        (i) => i.verkauftemenge == 0 && i.InEbay == 1
      );
    },
    amazonnullverkaufteMenge() {
      return this.verkaufteMenge.filter(
        (i) => i.verkauftemenge == 0 && i.InAmazon == 1
      );
    },
    inhabernullverkaufteMenge() {
      return this.verkaufteMenge.filter(
        (i) => i.verkauftemenge == 0 && i.InShop == 1
      );
    },
    getlastmonthGesamt() {
      return this.lastmonthGesamt.filter(
        (l) => l.OrderStatus == "Abgeschlossen"
      );
    },
    inbearbeitungItems() {
      return this.items.filter((i) => i.OrderStatus == "In Bearbeitung");
    },
    abgeschlossenItems() {
      return this.lastweekOrderstatus.filter(
        (a) => a.OrderStatus == "Abgeschlossen"
      );
    },
    ebayStok() {
      return this.shopLager.filter((ebay) => ebay.InEbay == 1);
    },
    amazonStok() {
      return this.shopLager.filter((amazon) => amazon.InAmazon == 1);
    },
    inhaberStok() {
      return this.shopLager.filter((shop) => shop.InShop == 1);
    },
    urlExshopbestellungens() {
      // return `https://${this.$store.state.token.apiUrl}/api/ExKunden`;
      return `/api/Exshopbestellungens`;
    },
    urlExShopbestellungdetails() {
      // return `https://${this.$store.state.token.apiUrl}/api/ExKunden`;
      return `/api/ExShopbestellungdetails`;
    },
  },
  created() {
    // En cok satan 10 ürün
    this.axios
      .get(`/api/Exbestellungdetails/meistVerkaufte`, {
        params: {
          access_token: this.$store.state.token.id,
          filter: { where: {} },
        },
      })
      .then((res) => {
        this.meistVerkaufte = res.data;
      });
    // Tüm satislar
    this.axios
      .get(`/api/Exshopbestellungens`, {
        params: {
          access_token: this.$store.state.token.id,
          filter: { where: {} },
        },
      })
      .then((res) => {
        this.items = res.data;
      });
    // Top 10 Kunden
    this.axios
      .get(`/api/Exshopbestellungens/best10kunden`, {
        params: {
          access_token: this.$store.state.token.id,
          filter: { where: {} },
        },
      })
      .then((res) => {
        this.x = res.data.Nutzer;
        this.y = res.data.Gesamt;
      });
    //Son 7 gün icindeki storniert ve abgeschlossen
    this.axios
      .get(
        `/api/ExShopbestellungens/lastweekOrderstatus`,
        {
          params: {
            access_token: this.$store.state.token.id,
            filter: {
              where: {
                //Datum: { gt: Date.now() - 7 * 24 * 60 * 60 * 1000, lt: Date.now() }
              },
            },
          },
        }
      )
      .then((res) => {
        this.lastweekOrderstatus = res.data;
      });
    //console.log(Date.now() - 7 * 24 * 60 * 60 * 1000)

    //Son 30 gün icindeki toplam ciro
    this.axios
      .get(`/api/ExShopbestellungens/lastmonthGesamt`, {
        params: {
          access_token: this.$store.state.token.id,
          filter: {
            where: {},
          },
        },
      })
      .then((res) => {
        this.lastmonthGesamt = res.data;
      });
    // Marketplace e göre toplam satilan ürün sayisi
    this.axios
      .get(`/api/Exshopbestellungdetails/shopAnzahl`, {
        params: {
          access_token: this.$store.state.token.id,
          filter: {
            where: {},
          },
        },
      })
      .then((res) => {
        this.shopAnzahl = res.data;
      });
    // Marketplace e göre stoktaki ürün sayisi
    this.axios
      .get("/api/Exproducts/shopLager", {
        params: {
          access_token: this.$store.state.token.id,
          filter: {
            where: {
              InAmazon: { neq: 0 || "" },
              InEbay: { neq: 0 || "" },
              InShop: { neq: 0 || "" },
            },
          },
        },
      })
      .then((res) => {
        this.shopLager = res.data;
      });
    // Rechnung kesilen son 2 ayin kiyaslamasi
    this.axios
    .get('/api/Exrechnungen/prozentGewinn', {
      params: { access_token : this.$store.state.token.id,
        filter: {
          where: { } }} })
    .then((res) => {
      this.prozentGewinn = res.data;
    });
    // 0 satan ürün bilgisi
    this.axios
      .get("/api/ExShopbestellungdetails/verkaufteMenge", {
        params: {
          access_token: this.$store.state.token.id,
          filter: { where: {} },
        },
      })
      .then((res) => {
        this.verkaufteMenge = res.data;
      });
    // Son satan 5 ürün ve alicilar
    this.axios
      .get(`/api/Exshopbestellungens/last5produkte`, {
        params: {
          access_token: this.$store.state.token.id,
          filter: { where: {} },
        },
      })
      .then((res) => {
        this.last5produkte = res.data;
      });
    // Bekleyen Rechnunglar icin
    this.axios.get(`/api/Exshopbestellungens/ausstehendeRechnungen`, {
      params: { access_token: this.$store.state.token.id,
      filter: { where: { } } } })
      .then((res) => {
        this.ausstehendeRechnungen = res.data;
      });

  },
  mounted() {
    setTimeout(() => {
      this.apexLoading = true;
    });
  }
};
</script>

<style src="./Dashboard.scss" lang="scss" />
