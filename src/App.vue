<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <br />
    <div>Logged in as {{ userName }}</div>
  </div>
</template>

<script>
import Vue from 'vue';

import {wing} from "./wing.vue.js";
wing.base_uri = "https://www.thegamecrafter.com";
const StaticTGC_api_key_id = "034F04B4-7329-11E8-BA7A-8BFD93A6FE1D";

export default {
  name: 'App',
  data() {
    return {
      testBinding: "TEST",
      username: "carl@phos.net", // TEMP: This is here for convenience, remove it later.
      password: "statictgc", // TEMP: This is here for convenience, remove it later.
      session: wing.object({
          with_credentials: false,
          create_api: "/api/session",
          on_create: function(properties) {
          },
          params: {
              _include_related_objects: ["user"],
              api_key_id: StaticTGC_api_key_id
          }
      })
    }
  },
  computed: {
    userName: function() {
      if (this.session.properties.user === undefined) {
        return "Unknown";
      } else {
        return this.session.properties.user.display_name;
      }
    },
  },
  mounted() {
    this.session.create({
        username: this.username,
        password: this.password
    });
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
