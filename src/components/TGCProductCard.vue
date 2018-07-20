
<template>
  <span>
    <p>{{ product.name }}</p>
    <!-- <b-card :title="product.name"
      :img-src="'https:' + product.preview_uri"
      style="max-width: 15rem;"
    >
      <div slot="footer">
        <p>${{ product.price }}</p>
      </div>
    </b-card> -->
  </span>
</template>

<script>

export default {
  name: 'TGCProductCard',
  props: [
    'product'
  ]
}

</script>
