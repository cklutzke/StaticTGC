<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <MeepleSelector />
        </b-col>
        <b-col>
          <TGCPartViewer :partId="partId"
            v-on:part-buy="onPartBuy($event)"
          />
        </b-col>
        <b-col>
          <TGCCart />
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
    MeepleSelector,
    TGCPartViewer,
    TGCCart
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
