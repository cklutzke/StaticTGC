<!--
The TGCSession component is responsible for creating session connections to The Game Crafter.
It controls the tgc_session_id value in localStorage.
Props: n/a
TEMP: Have the events provide useful information.
TODO: Allow login via Facebook
TODO: Allow use to create a new account
 -->

<template>
  <div>
    <div id="LoggedIn" v-if="loggedIn">
      <b-button-group>
        <!-- HACK: Embed the icon below within the actual dropdown. -->
        <b-button variant="secondary"><i class="fa fa-user fa-fw"></i></b-button>
        <b-dropdown :text="userName">
          <b-dropdown-item @click="logOutClick">Log Out</b-dropdown-item>
        </b-dropdown>
      </b-button-group>
    </div>
    <div id="NotLoggedIn" v-else>
      <b-button variant="primary" @click="onShowLogin" v-if="!showLoginControls">Log In</b-button>
      <b-form @submit="onLoginSubmit" @reset="onLoginReset" v-else>
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
        <b-button type="submit" variant="primary">Log In</b-button>
        <b-button type="reset" variant="secondary">Cancel</b-button>
      </b-form>
    </div>

  </div>
</template>

<script>
import Vue from 'vue';
import {wing} from "../wing.vue.js";
wing.base_uri = "https://www.thegamecrafter.com";
const StaticTGC_api_key_id = "034F04B4-7329-11E8-BA7A-8BFD93A6FE1D";

// Provide access to this.$emit within session's on_* events handlers.
let emitter = null;

export default {
  name: 'TGCSession',
  data: function () {
    return {
      showLoginControls: false,
      username: "",
      password: "",
      session: wing.object({
        with_credentials: false,
        create_api: "/api/session",
        on_create: function(properties) {
          localStorage.setItem("tgc_session_id", properties.id);
          emitter.$emit("session-begin", properties);
        },
        fetch_api: "/api/session/" + localStorage.getItem("tgc_session_id"),
        on_fetch: function(properties) {
          emitter.$emit("session-begin", properties);
        },
        on_delete: function(properties) {
          localStorage.removeItem("tgc_session_id");
          emitter.$emit("session-end", "");
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
        return "Log In";
      } else {
        return this.session.properties.user.display_name;
      }
    }
  },
  methods: {
    onShowLogin (evt) {
      this.showLoginControls = true;
    },
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
      this.showLoginControls = false;
    },
    logOutClick (evt) {
      this.session.delete();
      this.showLoginControls = false;
    }
  },
  mounted() {
    emitter = this;
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
