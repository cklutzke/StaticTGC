<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/parts">Parts</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view
      :cart="cart"
      @tgc-part-buy="onPartBuy($event)"
    />
    <br />
    <tgc-session :user-name="userName"
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
    'tgc-session': TGCSession
  },
  data() {
    return {
      session: wing.object({
        with_credentials: false,
        create_api: "/api/session",
        on_create: function(properties) {
          localStorage.setItem("tgc_session_id", properties.id);
        },
        fetch_api: "/api/session/" + localStorage.getItem("tgc_session_id"),
        on_fetch: function(properties) {
        },
        on_delete: function(properties) {
          localStorage.removeItem("tgc_session_id");
        },
        params: {
          _include_related_objects: ["user"],
          api_key_id: StaticTGC_api_key_id
        }
      }),
      cart: wing.object({
        // We never explicitly create a cart. It's created the first time the
        // user adds an item, and then we put the ID in localStorage.
        with_credentials: false,
        fetch_api : "/api/cart/" + localStorage.getItem("tgc_cart_id"),
        params: {
          _include_related_objects: ["items"],
          api_key_id: StaticTGC_api_key_id
        },
        on_error: function(properties) {
          wing.error("An error occurred with the cart object: check the log.");
          console.dir(properties);
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
    },
    onPartBuy: function(event) {
      // If we already have a cart ID, use it.
      let cartId = localStorage.getItem("tgc_cart_id");
      if (!cartId) {
        cartId = "";
      }

      this.cart.call('POST', "/api/cart/" + cartId + "/sku/" +
        event.sku_id, {quantity : event.quantity},
          { on_success : function(properties) {
            wing.success('Added!');

            // If we don't already have a cart ID, store the one we just got.
            if (!localStorage.getItem("tgc_cart_id")) {
              localStorage.setItem("tgc_cart_id", properties.id);
            };
          }
      });
    }
  },
  mounted() {
    if (localStorage.getItem("tgc_session_id")) {
      this.session.fetch();
    }

    if (localStorage.getItem("tgc_cart_id")) {
      this.cart.fetch();
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
