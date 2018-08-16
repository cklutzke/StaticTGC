<!--
  This file is the heart of the application. The template is always displayed,
  showing the navbar and footer, but the router-view is switched out depending
  on the current navigation selection / URL.
-->

<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="primary" sticky>
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/">
        <img src="@/assets/logo-small.png">
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <!-- TODO: Hide the motto at size MD. -->
          <b-nav-text>{{motto}}</b-nav-text>
          <template v-for="navItem in navs">
            <b-nav-item :to="'/nav/'+navItem.route">{{navItem.title}}</b-nav-item>
          </template>
          <b-nav-item to="/about">About</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <tgc-session :user-name="userName"
      @login="onLogin($event)"
      @logout="onLogout($event)"
      />
      <tgc-cart-icon :cart="cart" />
    </b-navbar>
    <b-container>
      <b-row id="body">
        <router-view
          :cart="cart"
          @tgc-product-buy="onProductBuy($event)"
        />
      </b-row>
      <b-row class="mt-3" id="footer">
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
import StaticConfig from './StaticConfig'

document.title = StaticConfig.title;
// TODO: Add code here to set the meta description and meta properties for the site.

export default {
  name: 'App',
  components: {
    'tgc-session': TGCSession,
    'tgc-cart-icon': TGCCartIcon
  },
  data() {
    return {
      motto: StaticConfig.motto,
      navs: StaticConfig.navs,
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

</style>
