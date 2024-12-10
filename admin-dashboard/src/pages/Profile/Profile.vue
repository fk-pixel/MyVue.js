<template>
  <v-container fluid>
    <div class="profile-page">
      <v-row no-gutters class="d-flex justify-space-between mt-10 mb-6">
        <h1 class="page-title">Profile</h1>
      </v-row>
      <v-card width="1500" hight="2000" class="mx-auto">
        <v-row no-gutters class="justify-space-around">
          <v-card-title no-gutters class="pl-2 pt-2">
            <div class="text-h4 pl-2 pt-2">
              {{ this.$store.state.benutzer.name }}
            </div>

            <div class="text-h6 pl-2 pl-6">
              © {{ this.$store.state.benutzer.firma }}
            </div>
          </v-card-title>
          <v-avatar color="deeporange" class="mt-6 mb-6">
            <v-icon size="75px">
              mdi-account-circle
            </v-icon>
          </v-avatar>
        </v-row>

        <v-list two-line>
          <v-list-item>
            <v-list-item-icon>
              <v-icon color="deeporange">
                mdi-phone
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{
                this.$store.state.benutzer.telefonnummer
              }}</v-list-item-title>
              <v-list-item-subtitle>Mobile</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="deeporange">
                mdi-email
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{
                this.$store.state.benutzer.email
              }}</v-list-item-title>
              <v-list-item-subtitle>Mail</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="deeporange">
                mdi-alpha-s-box
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{
                this.$store.state.benutzer.username
              }}</v-list-item-title>
              <v-list-item-subtitle>Sale Username</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="deeporange">
                mdi-web
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{
                this.$store.state.benutzer.apiUrl
              }}</v-list-item-title>
              <v-list-item-subtitle>Sale Domain</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider inset></v-divider>

          <v-list-item>
            <v-list-item-icon>
              <v-icon color="success">
                mdi-account-check
              </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Aktiv Kunden </v-list-item-title>
              <v-list-item-subtitle
                >Seit: {{ checkUser | moment("LL") }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import mock from "./mock";

export default {
  name: "Profile",
  components: {},
  data() {
    return {
      mock,
      software: []
    };
  },
  methods: {},
  computed: {
    checkUser() {
      let id = this.$store.state.benutzer.mysqluserid;
      let softwareUser = this.software.find(x => x.KundenID == id);
      return softwareUser ? softwareUser.StartDatum : false;
    }
  },
  created() {
    this.axios.get(`api/ExSoftwares`).then(res => {
      this.software = res.data;
    });
  },
  mounted() {}
};
</script>

<style src="./Profile.scss" lang="scss" />
