<template>
  <v-footer class="px-0 mt-10" color="transparent">
    <v-row no-gutters>
      <div>
        <v-btn
          v-for="link in links"
          :key="link.link"
          color="orange"
          text
          :href="link.link"
          class="text-capitalize ml-1 font-weight-regular"
        >
          {{ link.text }}
        </v-btn>
      </div>
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon.icon"
          :href="icon.link"
          class="mr-1"
          :color="config.light.textColor"
          icon
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </div>
    </v-row>
  </v-footer>
</template>

<script>
import config from "../../config";

export default {
  name: "Footer",

  data: () => ({
    config,
    icons: [
      { icon: "mdi-leaf", link: `${process.env.VUE_APP_AUTH_URL}` },
      { icon: "mdi-email", link: "mailto:kontakt@sale.de" },
      { icon: "mdi-phone", link: "callto:02173 269 71 83" }
    ],
    links: [{ text: "Sale", link: "https://www.example.de/" }]
  })
};
</script>

<style src="./Footer.scss" lang="scss" />
