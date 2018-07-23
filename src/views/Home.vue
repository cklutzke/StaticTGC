<template>
  <div class="home">
    <!-- TODO: Put a promotional banner / carousel here. -->

    <!-- TODO: WTF can't I use tgc-product-card in the results display but I can use it here? -->
    <!-- <tgc-product-card :product="testProduct" /> -->

    <div id="cwk-css-id-test" class="cwk-css-class-test">
      This is just some sample text so I can test basic CSS commands.
    </div>

    <ais-index
      app-id="5V0BUFDX8J"
      api-key="a25692c12853aea7a77c5a7125498512"
      index-name="products"
    >
      <ais-search-box></ais-search-box>

      <b-container>
        <b-row>
          <b-col cols="2" style="padding-top: 30px">
            <div v-for="facet in facets">
              <h4>{{ facet.label }}</h4>
              <ais-refinement-list :attribute-name="facet.name" />
            </div>
          </b-col>
          <b-col>

            <ais-results inline-template>
              <b-card-group deck>
                <div v-for="result in results" >
                  <!-- TEMP: Link to router page for product. -->
                  <!-- <p>
                    <router-link :to="'/part/' + result.objectID">
                      <ais-highlight :result="result" attribute-name="name"></ais-highlight>
                    </router-link>
                  </p> -->
                  <!-- <b-link :href="'https://thegamecrafter.com' + result.shop_uri" target="_blank"> -->

                    <b-card
                      :title="result.name"
                      :sub-title="result.category"
                      :img-src="'https:' + result.preview_uri"
                      :img-alt="'Image of ' + result.name"
                      img-top
                      :border-variant="result.badge ? 'primary' : 'secondary'"
                      style="max-width: 10rem; padding-top: 30px"
                      title-tag="h5" sub-title-tag="h6">
                      <p class="card-text">
                        {{ String(result.short_description ? result.short_description : result.description).substr(0,100) }}
                      </p>
                      <div slot="footer">
                        <span>{{ result.badge }}</span>
                        <b-button disabled variant="primary" @click="buyClick(test)">
                          <span class="fas fa-cart-plus"></span>
                          {{ "$" + Number(result.price).toFixed(2) }}
                        </b-button>
                      </div>
                    </b-card>

                  <!-- </b-link> -->
                </div>
              </b-card-group>
            </ais-results>

          </b-col>
        </b-row>
      </b-container>
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
      // testProduct: {
      //   name: "test product",
      //   preview_uri: "//s3.amazonaws.com/preview.thegamecrafter.com/45C414B4-11D2-11E8-AADE-153194A6FE1D.png",
      //   price: 0.02
      // },
      facets: [
        { name: "department", label: "Departments"},
        { name: "category", label: "Categories"},
        { name: "color", label: "Colors"}
      ]
    }
  },
  methods: {
    // TEMP: HTML event IDs should be in kebab case.
    buyClick: function(sku_id) {
      this.$emit("tgc-product-buy", {
        sku_id: sku_id,
        quantity: 1
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*
  The card text is styled according to the following tags
    Title is h4 (set via title-tag)
    Subtitle is h6 (set via sub-title-tag)
    Body and footer are div (set via body-tag and footer-tag)
*/

.cwk-css-class-test {
  text-align: right;
  color: blue;
}

.ais-refinement-list {
  color: red;
}

.card-text {
  text-align: right;
  color: red;
}

</style>
