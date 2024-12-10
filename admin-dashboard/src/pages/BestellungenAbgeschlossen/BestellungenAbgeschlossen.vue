<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">Bestellungen</h1>
      <v-row>
        <v-col cols="12">
          <v-card class="mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Meine Versandungen</p>
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
              item-key="ORDER-ID"
              class="elevation-1"
            >
              <template v-slot:item="props">
                <tr>
                  <td class="text-xs-left">{{ props.item.OrderID }}</td>
                  <td class="text-xs-center">{{ props.item.Beschreibung }}</td>
                  <td class="text-xs-center">{{ props.item.Nutzer }}</td>
                  <td class="text-xs-center">{{ props.item.Land }}</td>
                  <td class="text-xs-center">
                    {{ props.item.Zahlungsdatum | moment("LL") }}
                  </td>
                  <td class="text-xs-center">{{ props.item.Marketplace }}</td>
                  <td class="text-xs-center">{{ props.item.Gesamt }}</td>
                  <td class="text-xs-center">
                    {{ props.item.Rechnungsnummer }}
                  </td>
                  <td
                    class="text-xs-right"
                    v-if="props.item.OrderStatus === 'Abgeschlossen'"
                  >
                    <v-chip color="success" class="ma-2 ml-0" small>
                      Abgeschlossen
                    </v-chip>
                  </td>
                </tr>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from "./mock";

export default {
  name: "BestellungenAbgeschlossen",
  data() {
    return {
      mock,
      items: [],
      search: "",
      selected: [],
      loading: true,
      options: {},
      headers: [
        { text: "ORDER-ID", align: "start", value: "OrderID" },
        { text: "PRODUKT", value: "Beschreibung" },
        { text: "KUNDENNAME ", value: "Nutzer" },
        { text: "STANDORT", value: "Land" },
        { text: "BESTELLDATUM", value: "Zahlungsdatum" },
        { text: "SHOP", value: "Marketplace" },
        { text: "GESAMT", value: "Gesamt" },
        { text: "RECHNUNG-ID", value: "Rechnungsnummer" },
        { text: "STATUS", value: "OrderStatus" }
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
        this.items = res.data.filter(d => d.OrderStatus === "Abgeschlossen");
      });
  }
};
</script>

<style src="./BestellungenAbgeschlossen.scss" lang="scss"></style>
