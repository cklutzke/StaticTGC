<!--
The TGCSession component is responsible for creating session connections to The Game Crafter.
It controls the tgc_session_id value in localStorage.
Props: n/a
TODO: Fix warning re: Unknown custom element: <b-progress>
TODO: Display current session info more appropriately.
  When logged in, show a "user" glyphicon, followed by user's name, on a dropdown that allows logout.
  When not logged in, show a Log In link that can be clicked to request credentials.
TODO: Events: sessionBegin, sessionEnd
 -->

<template>
  <div id="TGCSession">
    <div id="login">
      <b-form @submit="onLoginSubmit" @reset="onLoginReset" v-show="session.properties.id == null">
        <h1>Log In</h1>
        <b-form-group id="userNameInputGroup" label="User Name:" label-for="userNameInput">
          <b-form-input id="userNameInput" type="text" v-model="username" required
            autocomplete="username" placeholder="Enter username">
          </b-form-input>
        </b-form-group>
        <b-form-group id="passwordInputGroup" label="Password:" label-for="passwordInput">
          <b-form-input id="passwordInput" type="password" v-model="password" required
            autocomplete="current-password" placeholder="Enter password">
          </b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="secondary">Reset</b-button>
        <p />
      </b-form>
    </div>
    <div id="sessionData">
      <h1>Session Info</h1>
      <p>Session ID: {{ session.properties.id }}</p>
      <p>User ID: {{ session.properties.user_id }}</p>
      <p>User Name: {{ userName }}</p>
      <b-button variant="secondary" @click="logOutClick" v-if="session.properties.id != null">
        Log Out
      </b-button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import {wing} from "../wing.vue.js";
wing.base_uri = "https://www.thegamecrafter.com";
const StaticTGC_api_key_id = "034F04B4-7329-11E8-BA7A-8BFD93A6FE1D";

export default {
  name: 'TGCSession',
  props: {
  },
  data: function () {
    return {
      username: "carl@phos.net", // TEMP: This is here for convenience, remove it later.
      password: "statictgc", // TEMP: This is here for convenience, remove it later.
      session: wing.object({
          with_credentials: false,
          create_api: "/api/session",
          on_create: function(properties) {
            localStorage.setItem("tgc_session_id", properties.id);
          },
          on_delete: function(properties) {
            localStorage.removeItem("tgc_session_id");
          },
          fetch_api: "/api/session/" + localStorage.getItem("tgc_session_id"),
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
  methods: {
    onLoginSubmit (evt) {
        evt.preventDefault();
        this.session.create({
            username: this.username,
            password: this.password
        });
    },
    onLoginReset (evt) {
        evt.preventDefault();
        this.username = "";
        this.password = "";
    },
    logOutClick: function(event) {
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

<style scoped>
div {
  text-align: left;
}
</style>
