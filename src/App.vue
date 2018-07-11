<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/meeples">Meeples</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <br />
    <TGCSession :user-name="userName"
      @login="onLogin($event)"
      @logout="onLogout($event)"
    />
  </div>
</template>

<script>
import Vue from 'vue';
import {wing} from "./wing.vue.js";
wing.base_uri = "https://www.thegamecrafter.com";
const StaticTGC_api_key_id = "034F04B4-7329-11E8-BA7A-8BFD93A6FE1D";

import TGCSession from '@/components/TGCSession.vue'

export default {
  name: 'App',
  components: {
    TGCSession
  },
  data() {
    return {
      session: wing.object({
        with_credentials: false,
        create_api: "/api/session",
        on_create: function(properties) {
          localStorage.setItem("tgc_session_id", properties.id);
          console.log("Created session: " + properties.id);
        },
        fetch_api: "/api/session/" + localStorage.getItem("tgc_session_id"),
        on_fetch: function(properties) {
          console.log("Restored session: " + properties.id);
        },
        on_delete: function(properties) {
          localStorage.removeItem("tgc_session_id");
          console.log("Ended session: " + properties.id);
        },
        params: {
          _include_related_objects: ["user"],
          api_key_id: StaticTGC_api_key_id
        }
      })
    }
  },
  computed: {
    loggedIn: function() {
      return (this.session.properties.id != null);
    },
    userName: function() {
      if (this.session.properties.user === undefined) {
        return "";
      } else {
        return this.session.properties.user.display_name;
      }
    }
  },
  methods: {
    onLogin: function(event) {
      this.session.create({
        username: event.username,
        password: event.password
      });
    },
    onLogout: function(event) {
      this.session.delete();
    }
  },
  mounted() {
    if (localStorage.getItem("tgc_session_id")) {
      this.session.fetch();
    }
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

li {
  text-align: left;
}

</style>
