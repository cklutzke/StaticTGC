
<template>
  <div>
    <p style="padding:30px;">
      <span class="fas fa-shopping-cart"></span> {{ cartCount }}
    </p>
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
