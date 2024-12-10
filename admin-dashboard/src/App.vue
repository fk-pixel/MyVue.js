<template>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      token: {}
    };
  },
  methods: {
    setAuthenticated(status) {
      this.$store.commit("auth", status);
    },
    logout() {
      this.$store.commit("auth", false);
    }
  }
};
</script>

<style src="./styles/app.scss" lang="scss" />
