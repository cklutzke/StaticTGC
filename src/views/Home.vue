<template>
  <div class="home">
    <!-- TODO: Put a promotional banner / carousel here. -->

    <!-- TODO: WTF can't I use tgc-product-card in the results display? -->
    <tgc-product-card :product="testProduct" />

    <ais-index
      app-id="5V0BUFDX8J"
      api-key="a25692c12853aea7a77c5a7125498512"
      index-name="products"
    >
      <ais-search-box></ais-search-box>
      <ais-results inline-template>
        <b-card-group deck>
          <div v-for="result in results" >
            <b-card :title="result.name"
              :img-src="'https:' + result.preview_uri"
              style="max-width: 15rem;"
            >
              <div slot="footer">
                <p>${{ result.price }}</p>
              </div>
            </b-card>
          </div>
        </b-card-group>
          <!-- <p>
            <router-link :to="'/part/' + result.objectID">
              <ais-highlight :result="result" attribute-name="name"></ais-highlight>
            </router-link>
          </p> -->
      </ais-results>
    </ais-index>
  </div>
</template>

<script>
import TGCProductCard from "@/components/TGCProductCard.vue"

export default {
  name: "home",
  components: {
    "tgc-product-card": TGCProductCard
  },
  data: function () {
    return {
      testProduct: {
        name: "test product"
      }
    }
  }
}
</script>
