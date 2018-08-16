<!--
The TGCSession component provides controls for the user to start and end a session.
TODO: The controls here are pretty ugly and should be completely redesigned
  for better display in the nav bar.
TODO: Allow login via Facebook
TODO: Allow user to create a new account
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

export default {
  name: 'TGCSession',
  props: {
    userName: String
  },
  data: function () {
    return {
      showLoginControls: false,
      username: "carl@phos.net", //TEMP
      password: ""
    }
  },
  computed: {
    loggedIn: function() {
      return (this.userName != "");
    }
  },
  methods: {
    onShowLogin (evt) {
      this.showLoginControls = true;
    },
    onLoginReset (evt) {
      evt.preventDefault();
      this.username = "";
      this.password = "";
      this.showLoginControls = false;
    },
    onLoginSubmit (evt) {
      evt.preventDefault();
      this.$emit("login", {
        username: this.username,
        password: this.password
      })
    },
    logOutClick (evt) {
      this.$emit("logout");
      this.showLoginControls = false;
    }
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>
