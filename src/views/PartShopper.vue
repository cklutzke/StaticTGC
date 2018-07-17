<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <part-selector />
        </b-col>
        <b-col v-show="partId">
          <tgc-part-viewer :part-id="partId"
            @tgc-part-buy="onPartBuy($event)"
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
import PartSelector from '@/components/PartSelector.vue'
import TGCPartViewer from '@/components/TGCPartViewer.vue'
import TGCCart from '@/components/TGCCart.vue'

export default {
  name: 'PartShopper',
  props: [
    'partId',
    'cart'
  ],
  components: {
    'part-selector': PartSelector,
    'tgc-part-viewer': TGCPartViewer,
    'tgc-cart': TGCCart
  },
  data: function () {
    return {
    }
  },
  methods: {
    onPartBuy: function (event) {
      this.$emit("tgc-part-buy", event);
    }
  }
}
</script>
