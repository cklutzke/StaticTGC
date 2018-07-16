
<!--

Eliminate defects:

Replicate existing TGC functionality:
TODO: Display the cart contents in a Bootstrap-Vue table.
TODO: Display the count of cart items in all views.

Add improvements:

-->

<template>
  <div>
    <h1>Shopping Cart</h1>
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
      if (this.cart.properties.id) {
        return this.cart.properties.id;
      } else {
        return "no cart"; // TEMP
      }
    }
  },
  methods: {
  }
}
</script>
