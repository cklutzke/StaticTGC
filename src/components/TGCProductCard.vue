
<!--
TODO: I can make this work in the main part of the Home view, but not in the ais-results. WTF?
-->

<template>
  <b-card :title="product.name"
    :img-src="'https:' + product.preview_uri"
    style="max-width: 10rem;"
  >
    <div slot="footer">
      <p>${{ product.price }}</p>
    </div>
  </b-card>
</template>

<script>

export default {
  name: 'TGCProductCard',
  props: [
    'product'
  ]
}

</script>
