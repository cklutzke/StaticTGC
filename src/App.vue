<template>
  <div id="app">
    <b-container>
      <b-row id="header">
        <!-- TODO
          SM: Hamburger Nav, Logo, Search Button, Cart
          MD: Logo, Motto, Search Bar, Cart <br/> Nav, Account
          LG+: Logo, Motto, Search Bar, Account, Cart <br/> Nav
        -->
        <b-col>
          <img src="@/assets/logo-tgc-small.png">
        </b-col>
        <b-col>
          <div id="nav">
            <!-- TEMP: Nav should list departments, deals?, help / support, account stuff -->
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
        </b-col>
        <b-col>
          <tgc-session :user-name="userName"
          @login="onLogin($event)"
          @logout="onLogout($event)"
          />
        </b-col>
        <b-col>
          <tgc-cart-icon :cart="cart" />
        </b-col>
      </b-row>
      <b-row id="body">
        <router-view
          :cart="cart"
          @tgc-product-buy="onProductBuy($event)"
        />
      </b-row>
      <b-row id="footer">
        <!-- TEMP: We'll need more detailed footer matter here eventually. -->
        <p>©2018 The Game Crafter, LLC. All rights reserved.</p>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Vue from 'vue';
import {wing} from "./wing.vue.js";
wing.base_uri = "https://www.thegamecrafter.com";
const StaticTGC_api_key_id = "034F04B4-7329-11E8-BA7A-8BFD93A6FE1D";

import TGCSession from '@/components/TGCSession.vue'
import TGCCartIcon from '@/components/TGCCartIcon.vue'

export default {
  name: 'App',
  components: {
    'tgc-session': TGCSession,
    'tgc-cart-icon': TGCCartIcon
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
    onProductBuy: function(event) {
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

/* #app {
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
} */

</style>
