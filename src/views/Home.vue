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
      <b-container>
        <b-row>
          <b-col cols="2">
            <div v-for="facet in facets">
              <h3>{{ facet.label }}</h3>
              <ais-refinement-list :attribute-name="facet.name" />
            </div>
          </b-col>
          <b-col>

            <ais-results inline-template>
              <b-card-group deck>
                <div v-for="result in results" >
                  <b-card :title="result.name"
                    :img-src="'https:' + result.preview_uri"
                    style="max-width: 10rem;"
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
      testProduct: {
        name: "test product"
      },
      facets: [
        { name: "department", label: "Departments"},
        { name: "category", label: "Categories"},
        { name: "color", label: "Colors"}
      ]
    }
  }
}
</script>
