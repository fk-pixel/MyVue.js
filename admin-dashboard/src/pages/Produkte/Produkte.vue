<template>
  <v-container fluid>
    <div>
      <div class="tab-header">
        <h1 class="page-title mt-10 mb-6">Produkte</h1>
        <div class="btn-header">
          <v-btn
            class="mr-2"
            id="print-btn"
            @click="printMe"
            value="Print"
            color="deeporange white--text"
          >
            <v-icon id="print-icon" left> mdi-printer </v-icon>
            Print
          </v-btn>
          <download-excel
            :data="items"
            :fields="excel_headers"
            :name="fileName"
          >
            <v-btn id="excel-btn" color="svgreen white--text">
              <v-icon id="excel-icon" left> mdi-file-excel </v-icon>
              Dokument
            </v-btn>
          </download-excel>
        </div>
      </div>
      <v-row class="row">
        <v-col cols="12">
          <v-card class="mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Auf Lager</p>
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
            <v-dialog v-model="isOpen" :retain-focus="false" width="500px">
              <v-card>
                <v-card-title class="text-h7 blue-grey darken-4 white--text">
                  Aktualisieren Sie:
                  {{ aktivProdukt && aktivProdukt.BestanEinheit }}
                </v-card-title>
                <v-card-text class="text-h7">
                  <br />
                  Aktuell Stok:
                  <strong> {{ aktivProdukt && aktivProdukt.Stok }} </strong>
                  <br />

                  <template>
                    <v-form ref="form">
                      <v-text-field
                        v-model="newStok"
                        type="number"
                        :counter="3"
                        :rules="stokRules"
                        label="neue Nummer eingeben"
                        required
                      >
                      </v-text-field>

                      <br />
                      <v-card-actions>
                        <v-btn
                          @click="saveItem(newStok)"
                          color="success"
                          class="mr-4"
                          type="submit"
                        >
                          Bestätigen
                        </v-btn>
                        <v-btn
                          color="pastelred"
                          class="mr-4 white--text"
                          @click="isOpen = false"
                        >
                          Schließen
                        </v-btn>
                      </v-card-actions>
                    </v-form>
                    <br />
                  </template>
                </v-card-text>
              </v-card>
            </v-dialog>
            <v-data-table
              :headers="headers"
              :items="items"
              :search="search"
              :options.sync="options"
              item-key="ProduktID"
              class="elevation-1"
            >
              <template v-slot:item="props">
                <tr>
                  <td>
                    <v-img
                      class="mini"
                      v-if="props.item.ImageUrl"
                      :src="
                        `https://thumbs.ebaystatic.com/pict/${props.item.EbayItemID}_1.jpg`
                      "
                      alt="Responsive image"
                    ></v-img>
                  </td>
                  <td class="text-xs-center">{{ props.item.BestanEinheit }}</td>
                  <td class="text-xs-center">{{ props.item.Name }}</td>
                  <td class="text-xs-center">
                    {{ props.item.KategoryID }}
                  </td>
                  <td class="text-xs-center">
                    <v-chip
                      small
                      color="primary"
                      class="white--text"
                      @click="openDialog(props)"
                      >{{ props.item.Stok }}
                      <v-icon id="edit" right small>mdi-pencil</v-icon>
                    </v-chip>
                  </td>
                  <td class="text-xs-center" v-if="props.item.EbayItemID">
                    <v-chip
                      :href="`https://ebay.de/itm/${props.item.EbayItemID}`"
                      target="_blank"
                      color="amber white--text"
                      class="ma-2 ml-0"
                    >
                      Ebay
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

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.16.2/xlsx.full.min.js"></script>

<script>
//import moment from 'moment';

export default {
  name: "Produkte",
  data() {
    return {
      output: null,
      isOpen: false,
      aktivProdukt: null,
      newStok: {
        type: Number,
        default: 0
      },
      items: [],
      dialog: false,
      dialogStok: {},
      search: "",
      options: {},
      stokRules: [
        v => !!v || "Dieses Feld darf nicht leer sein",
        v => (v && v <= 999) || "Nummer muss weniger als 1000 sein",
        v => (v && v >= 0) || "Nummer muss größer als 0 oder 0", //negatif sayilar girilemesin
        v =>
          (v && Number.isInteger(Number(v))) ||
          "Der Wert muss eine ganze Zahl sein"
      ],
      editedItem: { stok: 0 },
      editedIndex: -1,
      headers: [
        { text: "IMAGE", align: "left", value: "ImageUrl" }, //class:"deeporange white--text"},
        { text: "SKU", value: "BestanEinheit" }, //class:"deeporange white--text"},
        { text: "NAME", value: "Name" }, //class:"deeporange white--text"},
        { text: "KATEGORIE", value: "KategoryID" }, //class:"deeporange white--text"},
        { text: "STOK", value: "Stok" }, //class:"deeporange white--text"},
        { text: "SHOP", value: "EbayItemID" } //class:"deeporange white--text"}
      ],
      excel_headers: {
        SKU: "BestanEinheit",
        NAME: "Name",
        KATEGORIE: "KategoryID",
        STOK: "Stok"
      },
      fileName: "report_lager"
    };
  },
  methods: {
    printMe() {
      window.print();
    },
    openDialog(props) {
      let produkt = props.item;
      this.aktivProdukt = produkt;
      //this.newStok = 0;
      this.newStok = this.aktivProdukt.Stok;
      console.log(produkt);
      this.isOpen = !this.isOpen;
      return true;
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editedID = this.editedItem._id;
      this.stok = this.editedItem.Stok;
      this.dialog = true;
    },
    getItems() {
      this.axios
        .get(`/api/ExProducts`, {
          params: {
            access_token: this.$store.state.token.id,
            filter: { where: {} }
          }
        })
        .then(res => {
          this.items = res.data;
        });
      return items;
    },
    saveItem(stok) {
      console.log(stok);
      this.axios
        .patch(`/api/Exproducts/${this.aktivProdukt.BestanEinheit}`, {
          Stok: stok
        })
        .then(res => {
          console.log(res);
          this.isOpen = false;
          this.aktivProdukt.Stok = stok;
        });
    },
    updateItem() {
      const { stok } = this;
      const data = { stok };
      const URL = `https://${this.$store.state.token.apiUrl}/api/Exproducts?access_token=${this.$store.state.token.client.id}`;
      this.axios({
        method: "patch",
        url: URL,
        data: data
      })
        .then(() => {
          this.reset();
        })
        .catch(err => {
          console.log(err);
        });
    },
    reset() {
      this.item = {};
    },
    updateStok() {
      this.axios
        .post(`/api/Exproducts`, { stok: this.item.Stok })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitStok() {
      this.$emit("stok-submit", {
        stok: this.item.Stok
      });
      this.item = null;
      this.axios.post(`/api/ExProducts`, {
        stok: this.item.Stok
      });
    },
    onUpload() {
      const formData = new FormData();
      formData.append("stok", this.Stok);
      this.axios.post("/api/Exproducts", formData, {}).then(response => {
        console.log(response);
      });
    },
    onChange(event) {
      this.stok = event.target;
    }
  },
  created() {
    this.axios
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
  mounted() {
    /* this.getItems(); */
  }
};
</script>

<style src="./Produkte.scss" lang="scss"></style>
