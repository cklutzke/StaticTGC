<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <meeple-selector />
        </b-col>
        <b-col>
          <tgc-part-viewer :part-id="partId"
            v-on:part-buy="onPartBuy($event)"
          />
        </b-col>
        <b-col>
          <tgc-cart />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MeepleSelector from '@/components/MeepleSelector.vue'
import TGCPartViewer from '@/components/TGCPartViewer.vue'
import TGCCart from '@/components/TGCCart.vue'

export default {
  name: 'MeepleShopper',
  props: [
    'partId'
  ],
  components: {
    'meeple-selector': MeepleSelector,
    'tgc-part-viewer': TGCPartViewer,
    'tgc-cart': TGCCart
  },
  data: function () {
    return {
    }
  },
  methods: {
    onPartBuy: function (event) {
      console.log(event.sku_id);
    }
  }
}
</script>
