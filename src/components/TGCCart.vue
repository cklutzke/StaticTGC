
<!--

Eliminate defects:
TODO: This is a mess. Store the cart inside App.vue instead of here.

Replicate existing TGC functionality:
TODO: Create and display a cart when an item is added.
TODO: Restore a cart when reconnecting.
TODO: Display the count of cart items in all views.

Add improvements:

-->

<template>
  <div>
    <h1>Shopping Cart</h1>
    <p>Added item's SKU: {{ sku_id }}</p>
    <p>Added item's quantity: {{ quantity }}</p>
    <p>Cart ID: {{ cart.properties.id }}</p>
    <div class="table-responsive">
      <table class="table">
        <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        </thead>
        <tbody>
          <!-- TODO: Display this using a Bootstrap-Vue table. -->
          <tr v-for="item in cart.properties.items">
            <td>{{ item.name }}</td>
            <td>{{ item.price_each }}</td>
            <td>{{ item.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {wing} from "../wing.vue.js";
wing.base_uri = "https://www.thegamecrafter.com";
const StaticTGC_api_key_id = "034F04B4-7329-11E8-BA7A-8BFD93A6FE1D";

export default {
  name: 'TGCCart',
  props: [
    'partId'
  ],
  components: {
  },
  data: function () {
    return {
      sku_id: "n/a", // TEMP: For testing communication between components.
      quantity: 0,

      cart: wing.object({
        // We never explicitly create a cart. It's created the first time the
        // user adds an item, and then we put the ID in localStorage.
        with_credentials: false,
        fetch_api : "/api/cart/" + localStorage.getItem("tgc_cart_id"),
        params: {
          _include_related_objects: ["items"],
          api_key_id: StaticTGC_api_key_id
        }
      })
    }
  },
  methods: {
    addItem: function(sku_id, quantity) {
      this.sku_id = sku_id;
      this.quantity = quantity;
    }
    // buyClick: function(event) {
    //     let cartId = localStorage.getItem("tgc_cart_id");
    //     if (!cartId) {
    //         cartId = "";
    //     }
    //     this.cart.call('POST', "/api/cart/" + cartId + "/sku/" +
    //         this.product.properties.sku_id, {quantity : 1},
    //         { on_success : function(properties) {
    //             wing.success('Added!');
    //             if (!localStorage.getItem("tgc_cart_id")) {
    //                 localStorage.setItem("tgc_cart_id", properties.id);
    //             };
    //         }
    //     });
    // }
  },
  mounted() {
    if (localStorage.getItem("tgc_cart_id")) {
      // this.cart.fetch();
    }
  }
}
</script>
