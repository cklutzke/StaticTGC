<template>
  <div>
    <b-container>
      <b-row>
        <b-col v-show="productId">
          <tgc-product-viewer :product-id="productId"
            @tgc-product-buy="onProductBuy($event)"
          />
        </b-col>
        <b-col v-show="cart.properties.id">
          <tgc-cart :cart="cart" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TGCProductViewer from '@/components/TGCProductViewer.vue'
import TGCCart from '@/components/TGCCart.vue'

export default {
  name: 'Product',
  props: [
    'productId',
    'cart'
  ],
  components: {
    'tgc-product-viewer': TGCProductViewer,
    'tgc-cart': TGCCart
  },
  data: function () {
    return {
    }
  },
  methods: {
    onProductBuy: function (event) {
      this.$emit("tgc-product-buy", event);
    }
  }
}
</script>
