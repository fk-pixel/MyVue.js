<template>
  <v-app-bar
    class="main-header"
    height="64"
    fixed
    color="blue-grey darken-4"
    dark
  >
    <v-btn icon class="mx-1" @click.stop="TOGGLE_DRAWER">
      <template v-if="DRAWER_STATE">
        <v-icon style="font-size: 28px">mdi-arrow-left</v-icon>
      </template>
      <template v-else>
        <v-icon style="font-size: 28px">mdi-menu</v-icon>
      </template>
    </v-btn>
    <v-icon style="font-size: 28px" color="orange">mdi-leaf</v-icon>
    <v-toolbar-title style="font-size: 24px">Admin</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-menu min-width="180" offset-y bottom left nudge-bottom="10">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mr-0" icon v-bind="attrs" v-on="on">
          <v-icon style="font-size: 28px" :color="config.light.iconColor">
            mdi-account-box
          </v-icon>
        </v-btn>
      </template>
      <v-list>
        <div class="text-h5 grey--text text--darken-3 px-4 pt-4">
          {{ this.$store.state.benutzer.firma }}
        </div>

        <div class="subtitle-2 deeporange--text font-weight-regular px-4">
          {{ this.$store.state.benutzer.email }}
        </div>
        <v-list-item-group color="deeporange">
          <v-list-item
            v-for="(item, i) in account"
            :key="i"
            @click="actionClick(item.link)"
          >
            <v-list-item-icon class="mr-4">
              <v-icon :color="item.color" v-text="item.icon"> </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title
                :color="config.light.textColor"
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
        <div class="d-flex justify-center my-3">
          <v-btn
            width="80%"
            large
            color="deeporange"
            class="text-capitalize white--text"
            @click="logOut"
            >Sign Out
          </v-btn>
        </div>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapActions, mapState } from "vuex";
import config from "../../config";
//import Search from "@/components/Search/Search";

export default {
  name: "Header",
  //components: { Search },
  data: () => ({
    benutzer: [],
    user: {},
    config,
    searchCollapse: true,
    account: [
      {
        text: "Profile",
        icon: "mdi-account",
        color: "textColor",
        link: "/profile"
      },
      { text: "Tasks", icon: "mdi-thumb-up", color: "textColor", link: "/" },
      { text: "Messages", icon: "mdi-flag", color: "textColor", link: "/" }
    ]
  }),
  computed: {
    ...mapState(["drawer"]),
    DRAWER_STATE: {
      get() {
        return this.drawer;
      }
    }
  },
  methods: {
    actionClick(link) {
      if (link === "/profile") {
        this.$router.push("/profile");
      }
    },
    ...mapActions(["TOGGLE_DRAWER"]),
    logOut: function() {
      window.localStorage.setItem("authenticated", false);
      this.$router.push("/login");
    }
    /* getUser() {
        this.axios.get(`/api/Benutzers`,
        {
        params: {
          access_token: this.$store.state.token.id,
          filter: { where: {} },
        },
      })
      .then((res) => {
        this.users = res.data;
      });
      }, */
  },
  mounted() {
    if (localStorage.getItem("benutzer")) {
      this.benutzer = JSON.parse(localStorage.getItem("benutzer"));
    }
  }
  /* created() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.users.loading = true;
    userService.getAll().then(users => this.users = users);
  } */
};
</script>

<style src="./Header.scss" lang="scss"></style>
