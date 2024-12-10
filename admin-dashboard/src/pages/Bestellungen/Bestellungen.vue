<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">Bestellungen</h1>
      <v-row>
        <v-col cols="12">
          <v-card class="mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Alle Bestellungen</p>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                clearable
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="items"
              :search="search"
              :options.sync="options"
              class="elevation-1"
            >
              <template v-slot:item="props">
                <tr>
                  <td class="text-xs-left">{{ props.item.OrderID }}</td>
                  <td class="text-xs-center">{{ props.item.Beschreibung }}</td>
                  <td class="text-xs-center">{{ props.item.Nutzer }}</td>
                  <td class="text-xs-center">{{ props.item.Land }}</td>
                  <td class="text-xs-center">
                    {{
                      props.item.Zahlungsdatum | moment("dddd, MMMM Do YYYY")
                    }}
                  </td>
                  <td class="text-xs-center">{{ props.item.Marketplace }}</td>
                  <td class="text-xs-center">{{ props.item.Gesamt }}</td>
                  <td class="text-xs-center">
                    <v-dialog
                      v-model="dialogOpen[props.item.OrderID]"
                      :key="props.item.OrderID"
                      width="500px"
                      :retain-focus="false"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          small
                          color="primary"
                          dark
                          v-bind="attrs"
                          v-on="on"
                          >{{ props.item.Rechnungsnummer }}
                        </v-btn>
                      </template>
                      <v-card>
                        <v-card-title
                          class="text-h7 blue-grey darken-4 white--text"
                        >
                          Rechnung: {{ props.item.Rechnungsnummer }}
                        </v-card-title>
                        <v-card-text>
                          <br />
                          <strong>Kunden Name:</strong> {{ props.item.Nutzer }}
                          <br />
                          <strong>Email:</strong> {{ props.item.Email }}
                          <br />
                          <strong>Telefon:</strong> {{ props.item.Tel }}
                          <br />
                          -------------------------------------------------
                          <br />
                          <strong>Order ID:</strong> {{ props.item.OrderID }}
                          <br />
                          <strong>Produkt:</strong>
                          {{ props.item.Beschreibung }}
                          <br />
                          <strong>Gesamt:</strong> {{ props.item.Gesamt }} €
                          <br />
                          --------------------------------------------------
                          <br />
                          <strong>Versandart:</strong>
                          {{ props.item.Versandart }}
                          <br />
                          <strong>Sendungsnummer:</strong>
                          {{ props.item.Sendungsnummer }}
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn
                            color="pastelred"
                            class="mr-4 white--text"
                            @click.stop="
                              $set(dialogOpen, props.item.OrderID, false)
                            "
                          >
                            Schließen
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </td>

                  <td
                    class="text-xs-right"
                    v-if="props.item.OrderStatus === 'Abgeschlossen'"
                  >
                    <v-chip color="success" class="ma-2 ml-0" small>
                      Abgeschlossen
                    </v-chip>
                  </td>
                  <td
                    class="text-xs-right"
                    v-if="props.item.OrderStatus === 'Storniert'"
                  >
                    <v-chip color="error" class="ma-2 ml-0" small>
                      Storniert
                    </v-chip>
                  </td>
                  <td
                    class="text-xs-right"
                    v-if="props.item.OrderStatus === 'In Bearbeitung'"
                  >
                    <v-chip color="warning" class="ma-2 ml-0" small>
                      Bearbeiten
                    </v-chip>
                  </td>
                </tr>
              </template>
            </v-data-table>
            <!-- <v-simple-table
              fixed-header
                height="1000px">
                <template>
                  <thead>
                  <tr>
                    <th class="text-left pa-6">ORDER-ID</th>
                    <th class="text-left">PRODUKT</th>
                    <th class="text-left">KUNDENNAME</th>
                    <th class="text-left">STANDORT</th>
                    <th class="text-left">BESTELLDATUM</th>
                    <th class="text-left">SHOP</th>
                    <th class="text-left">PREIS</th>
                    <th class="text-left">RECHNUNG-ID</th>
                    <th class="text-left">STATUS</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in items" :key="item.OrderID">
                    <td class="pa-6">{{ item.OrderID }}</td>
                    <td>{{ item.Beschreibung }}</td>
                    <td>{{ item.Nutzer }}</td>
                    <td>{{ item.Land }}</td>
                    <td>{{ item.Zahlungsdatum | moment("DD.MM.YY") }}</td>
                    <td>{{ item.Marketplace }}</td>
                    <td>{{ item.Gesamt }}</td>
                    <td><v-chip
                        link
                        outlined
                        color="blue"
                        class="ma-2 ml-0"
                      >{{ item.Rechnungsnummer }}
                      </v-chip></td>
                       <td v-if="item.OrderStatus === 'Storniert'">
                         <v-chip
                            link
                            color="error"
                            class="ma-2 ml-0"
                          >
                          Storniert
                          </v-chip></td>
                        <td v-if="item.OrderStatus === 'In Bearbeitung'">
                          <v-chip
                            link
                            color="warning"
                            class="ma-2 ml-0"
                          >
                          Bearbeiten
                          </v-chip></td>
                        <td v-if="item.OrderStatus === 'Abgeschlossen'">
                          <v-chip
                            link
                            color="success"
                            class="ma-2 ml-0"
                          >
                          Abgeschlossen
                          </v-chip></td>
                  </tr>
                  </tbody>
                </template>
              </v-simple-table> -->
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from "./mock";

export default {
  name: "Bestellungen",
  data() {
    return {
      mock,
      items: [],
      search: "",
      dialogOpen: {},
      dialog: false,
      //selected: [],
      loading: true,
      options: {},
      headers: [
        { text: "ORDER-ID", align: "start", value: "OrderID" }, //class:"deeporange white--text"},
        { text: "PRODUKT", value: "Beschreibung" }, //class:"deeporange white--text"},
        { text: "KUNDENNAME ", value: "Nutzer" }, //class:"deeporange white--text"},
        { text: "STANDORT", value: "Land" }, //class:"deeporange white--text"},
        { text: "BESTELLDATUM", value: "Zahlungsdatum" }, //class:"deeporange white--text"},
        { text: "SHOP", value: "Marketplace" }, //class:"deeporange white--text"},
        { text: "GESAMT", value: "Gesamt" }, //class:"deeporange white--text"},
        { text: "RECHNUNG-ID", value: "Rechnungsnummer" }, //class:"deeporange white--text"},
        { text: "STATUS", value: "OrderStatus" } //class:"deeporange white--text"}
      ]
    };
  },
  methods: {},
  created() {
    this.axios
      //.get(`https://${this.$store.state.token.apiUrl}/api/Exshopbestellungens`, { params: { access_token : this.$store.state.token.id, filter: {where : { }} } })
      .get(`/api/Exshopbestellungens`, {
        params: {
          access_token: this.$store.state.token.id,
          filter: {
            where: {}
          }
        }
      })
      .then(res => {
        this.items = res.data;
      });
  }
};
</script>

<style src="./Bestellungen.scss" lang="scss"></style>
