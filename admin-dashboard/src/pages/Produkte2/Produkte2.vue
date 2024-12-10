<template>
  <v-container fluid>
    <div class="tables-basic">
      <h1 class="page-title mt-10 mb-6">Produkte</h1>
      <v-row>
        <v-col cols="12">
          <v-card class="mb-1">
            <v-card-title class="pa-5 pb-3">
              <p>Null Verkauft</p>
              <v-spacer></v-spacer>
            </v-card-title>

            <v-simple-table
              fixed-header
              height="1000px">
                <template>
                  <thead>
                  <tr>
                    <th class="text-left">SKU</th>
                    <th class="text-left">PRODUKT</th>
                    <th class="text-left">SHOP</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="item in verkaufteMenge" :key="item.SKU">
                    <td class="pa-6">{{ item.BestanEinheit }}</td>
                    <td>{{ item.Name }}</td>
                    <td v-if="item.InAmazon === 1">
                         <v-chip
                            link
                            color="secondary"
                            class="ma-2 ml-0"
                          >
                          Amazon
                          </v-chip></td>
                        <td v-if="item.InEbay === 1">
                          <v-chip
                            :href="`https://www.ebay.de/itm/${item.EbayItemID}`"
                            target="_blank"
                            color="amber white--text"
                            class="ma-2 ml-0"
                          >
                          Ebay
                          </v-chip></td>
                        <td v-if="item.InShop === 1">
                          <v-chip
                            link
                            color="success"
                            class="ma-2 ml-0"
                          >
                          Inhaber
                          </v-chip></td>
                         <td :disabled="item.verkauftemenge!==0">
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

export default {
  name: 'Produkte2',
  data() {
    return {
      mock,
      verkaufteMenge: [],
    }
  },
  methods: {},
  computed: {},
  created() {
    // 0 satan ürün bilgisi
    this.axios
    .get('/api/ExShopbestellungdetails/verkaufteMenge')
    .then(response => {
      this.verkaufteMenge = response.data.filter(b => b.verkauftemenge === 0)
    });
  },
    /* }) , {
      params: { access_token : this.$store.state.token.id,
        filter: {
          where: {verkauftemenge:'0' },
        }
      }
    })
    .then((res) => {
      this.verkaufteMenge = res.data;
    }); */

}

</script>

<style src="./Produkte2.scss" lang="scss"></style>