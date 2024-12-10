<template>
  <v-app>
    <v-container fluid>
      <v-row no-gutters>
        <v-col cols="7" class="main-part d-none d-md-none d-lg-flex">
          <div class="d-flex">
            <v-img src="@/assets/sales.png" contain></v-img>
            <a href="#" class="admin-btn">Admin </a>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="5"
          class="login-part d-flex align-center justify-center"
        >
          <v-row no-gutters class="align-start">
            <v-col
              cols="12"
              class="login-part d-flex align-center justify-center flex-column"
            >
              <div class="login-wrapper pt-md-4 pt-0 ">
                <v-tabs grow>
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab :href="`#tab-login`"> ANMELDUNG </v-tab>
                  <v-tab :href="`https://front.apps.sale/auth/registiration`">
                    NEUER BENUTZER
                  </v-tab>
                  <v-tab-item :value="'tab-login'">
                    <v-form>
                      <v-container>
                        <v-row class="flex-column">
                          <v-col>
                            <p
                              class="login-slogan display-2 text-center font-weight-medium my-10"
                            >
                              Willkommen
                            </p>
                          </v-col>
                          <v-form v-on:submit.prevent>
                            <v-col>
                              <v-text-field
                                v-model="input.email"
                                :rules="emailRules"
                                value="admin@example.com"
                                label="Email Adresse"
                                required
                                placeholder="asd@example.com"
                              ></v-text-field>
                              <v-text-field
                                v-model="input.password"
                                :rules="passRules"
                                type="password"
                                label="Password"
                                hint="Mindestens 7 Zeichen"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col class="d-flex justify-space-between">
                              <v-btn
                                type="submit"
                                class="text-capitalize"
                                large
                                :disabled="
                                  input.password.length === 0 ||
                                    input.email.length === 0
                                "
                                color="primary"
                                @click="login"
                              >
                                Anmelden</v-btn
                              >
                              <v-btn
                                :href="
                                  `https://front.apps.sale/auth/forgot-password`
                                "
                                large
                                textFF
                                class="text-capitalize primary--text"
                              >
                                Password vergessen</v-btn
                              >
                            </v-col>
                          </v-form>
                        </v-row>
                      </v-container>
                    </v-form>
                  </v-tab-item>
                </v-tabs>
              </div>
            </v-col>
            <v-col cols="12" class="d-flex justify-center">
              <v-footer>
                <div class="primary--text">
                  © 2020
                  <a
                    href="https://front.apps.sale/auth/login"
                    class="text-decoration-none"
                  >
                    Sale</a
                  >
                  , GMBH. Alle Rechte vorbehalten.
                </div>
              </v-footer>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        email: "",
        password: ""
      },
      emailRules: [
        v => !!v || "E-mail ist erforderlich",
        v => /.+@.+/.test(v) || "E-mail muss gültig sein"
      ],
      passRules: [
        v => !!v || "Password ist erforderlich",
        v => v.length >= 7 || "Mindestens 7 Zeichen"
      ],
      selected: null,
      kunden: {},
      kundenList: [], //users
      software: {} //user
    };
  },
  computed: {
    urlExKundenUse() {
      // return `https://${this.$store.state.token.apiUrl}/api/Artikels?access_token=${this.$store.state.token.client.id}`
      return `https://${this.$store.state.token.apiUrl}/api/ExKunden/use`;
    }
  },
  methods: {
    login() {
      if (this.input.email != "" && this.input.password != "") {
        this.axios
          .post(`https://back.apps.sale.de/api/Benutzers/login?include=user`, {
            email: this.input.email, //"dekooyaco@gmail.com",
            password: this.input.password //"123456"
          })
          .then(res => {
            // res.data.apiUrl = "localhost:3300"
            this.$store.commit("token", res.data);
            this.axios
              .get(`https://back.apps.sale.de/api/Benutzers`, {
                params: {
                  access_token: res.data.id,
                  filter: { where: { id: res.data.userId } }
                }
              })
              .then(res2 => {
                this.$store.commit("benutzer", res2.data[0]);
                this.axios
                  .get(this.urlExKundenUse, {
                    params: { kundenId: this.$store.state.benutzer.mysqluserid }
                  })
                  .then(res => {
                    this.software = res.data;
                  });
              });
            // this.$store.state.token = res.data;
            this.$store.commit("authenticated", true);
            this.$router.replace({ name: "Dashboard" });
            //this.$router.push('/dashboard');
          })
          .catch(err => {
            this.$toast.error(
              "Der Benutzername und / oder das Passwort sind falsch",
              {
                position: "top-right",
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: true,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: true,
                closeButton: "button",
                icon: true,
                rtl: false
              }
            );
            console.error(err);
            console.log("The username and / or password is incorrect");
          });
      } else {
        console.log("A username and password must be present");
      }
    }
  }
};
</script>

<style src="./Login.scss" lang="scss" />
