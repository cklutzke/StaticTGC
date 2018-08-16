
<!--
  Displays the current count of items in the shopping cart. For use in the nav bar.

  TODO: Make the popover display the cart contents.
-->

<template>
  <div>
    <b-card id="cart-card">
      <p class="card-text">
        <span class="fas fa-shopping-cart"></span> {{ cartCount }}
      </p>
    </b-card>
    <b-popover target="cart-card" title="Popover!" placement="bottomleft" triggers="hover focus">
      <p>This is the popover text.</p>
    </b-popover>
</div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'TGCCartIcon',
  props: [
    'cart'
  ],
  data: function () {
    return {
    }
  },
  computed: {
    cartCount: function() {
      if (this.cart.properties) {
        return this.cart.properties.item_count;
      } else {
        return "0"; // TEMP
      }
    }
  },
}
</script>
