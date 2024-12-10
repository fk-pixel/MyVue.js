<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">Kunden</h1>
      <v-row>
        <v-col cols=12>
          <v-card class="mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Kundenliste</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    v-bind="attrs"
                    v-on="on">
                    <v-icon color="textColor">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in mock.menu"
                    :key="i"
                    @click="() => {}">
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-simple-table>
                <template v-slot:default>
                  <thead>
                  <tr>
                    <th class="text-left pa-6">KUNDEN-ID</th>
                    <th class="text-left">FIRMA</th>
                    <th class="text-left">NAME</th>
                    <th class="text-left">EMAIL</th>
                    <th class="text-left">TELEFON</th>
                    <th class="text-left">RECHNUNGEN</th>
                    <th class="text-left">STATUS</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in items" :key="item.KundenID">
                    <td class="pa-6">{{ item.KundenID }}</td>
                    <td>{{ item.Firma }}</td>
                    <td>{{ item.Vorname}}  {{ item.Nachname }}</td>
                    <td>{{ item.Email }}</td>
                    <td>{{ item.Telefon }}</td>
                    <td>
                      <v-chip
                        link to="/error"
                        outlined
                        color="blue"
                        class="ma-2 ml-0"
                      >
                        {{countRechnung}}  Rechnung gestellt
                      </v-chip></td>
                    <td v-if="item.Status === 'Aktiv'">
                      <v-chip
                        link
                        color="success"
                        class="ma-2 ml-0"
                      >
                        Aktiv
                      </v-chip>
                    </td>
                    <td v-else-if="item.Status === 'Demo'">
                      <v-chip
                        link
                        color="warning"
                        class="ma-2 ml-0"
                      >
                        Demo
                      </v-chip>
                    </td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from './mock'
//import moment from 'moment';

//const url = (window.location.origin.indexOf('localhost')? window.location.origin.replace('8080', '3300'):"");
//const API_URL = url + "/api/ExKunden/";
//const API_URL_PRODUCT_COUNT = url + "/api/ExProducts/count";
//const API_URL_USE = url + "/api/ExKunden/use";
//const API_URL_RECHNUNGEN_COUNT = url + "/api//ExRechnungnens";
//let today = new Date().toISOString().slice(0, 10)

export default {
  name: 'Kunden',
  data() {
    return {
      mock,
      selected: null,
      kunden: {},
      kundenList: [],
      software: {},
      items: [],
      rechnungen: []
    }
  },
  computed: {
    countRechnung() {
      return this.rechnungen.count
    },
    urlExKunden() {
     // return `https://${this.$store.state.token.apiUrl}/api/ExKunden`;
      return `/api/ExKunden`;
    },
    urlExRechnungen() {
     // return `https://${this.$store.state.token.apiUrl}/api/ExKunden`;
      return `/api/ExRechnnungen/count`;
    },
  },
  created () {

      this.axios
      .get(`/api/ExKunden`, {
        params: {access_token : this.$store.state.token.id,
          filter: {
            where: {
              Status: {neq: 'Storniert'},
              //StartDatum: {between: [today], [today]},
              //KundenID: "1378"
            },
            //include: ["ExRechnungen"]
            //include: ["ExSoftwares"]
          }
        }
      }).then((res)=> {
        this.items = res.data;
      });
       /*  this.item.forEach ( i => {
          let kundenID = i.KundenID;

        }) */

        //this.change(1378);

         this.axios
          .get(`/api/ExRechnungen/count`, {
            params: { access_token : this.$store.state.token.id,
              find: {
                include: {
                  relation: "ExKunden",
                  fields: ['KundenID'],
                  where: {
                    //Status: { eq: 'Demo' && 'Aktiv'},
                    //Status: {'Demo'}olmali ama nasil?,
                    RechnungDatum: {gt: Date.now() - 30 * 24 * 60 * 60 * 1000},

                  },
                },
              },
            }
          }
          ).then((res2) => {
            //if (items.KundenID == 1378)
            this.rechnungen= res2.data;
              //if (i.KundenID == 1378)
                /* i.RechCount = rechnung.Count; */
            //this.countRechnung = this.rechnungen.Count;
            });

        //this.kundenList = res.data;
        //this.items = res.data.map( r=> {r.value = r.KundenID; r.text = `${r.KundenID} ${r.Vorname} ${r.Email}`; return r;});
        //this.change(1378);
        //this.selected = 1378;//res.data[0].KundenID;

    },
    methods: {
      /* change(item) {
        this.kunden = this.kundenList.filter(k => k.KundenID == item)[0];
        this.$store.state.aktivKunden = this.kunden.text
        this.axios
        .get(API_URL_USE, { params: {kundenId: item.toString()} })
        .then((res) => {
          this.software = res.data;
          this.axios.get(API_URL_PRODUCT_COUNT)
          .then((res2) => {
            this.productCount = res2.data.count
            this.makeToast();
          });
        })
      },
      makeToast(append = false) {
        this.$bvToast.toast(`Aktiv Kunden: ${this.kunden.text}
        Artikel: ${this.productCount}`, {
          title: 'Kunden Info',
          autoHideDelay: 50000,
          appendToast: append
        });
      } */
    }
}
</script>

<style src="./Kunden.scss" lang="scss"></style>