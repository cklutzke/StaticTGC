
<!--

Eliminate defects:

Replicate existing TGC functionality:
TODO: Restore a cart when reconnecting.
TODO: Display the cart column only when there's a cart.
TODO: Display the cart contents in a Bootstrap-Vue table.
TODO: Display the count of cart items in all views.

Add improvements:

-->

<template>
  <div>
    <h1>Shopping Cart</h1>
    <p>Cart ID: {{ cartId }}</p>
    <!-- <div class="table-responsive">
      <table class="table">
        <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart.properties.items">
            <td>{{ item.name }}</td>
            <td>{{ item.price_each }}</td>
            <td>{{ item.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TGCCart',
  props: [
    'cart'
  ],
  data: function () {
    return {
    }
  },
  computed: {
    cartId: function() {
      if (this.cart) {
        return this.cart.properties.id;
      } else {
        return "no cart";
      }
    }
  },
  methods: {
  }
}
</script>
