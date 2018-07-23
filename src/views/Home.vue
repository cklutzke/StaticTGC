<template>
  <div class="home">
    <!-- TODO: Put a promotional banner / carousel here. -->

    <!-- TODO: WTF can't I use tgc-product-card in the results display but I can use it here? -->
    <!-- <tgc-product-card :product="testProduct" /> -->

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
                  <!-- BUG: If I try to put this b-card definition in a component, it won't load. -->
                  <b-card :title="result.name"
                    :sub-title="result.category"
                    :img-src="'https:' + result.preview_uri"
                    style="max-width: 10rem;"
                  >
                    <b-card-body>
                      <p class="card-text">{{ result.short_description ? result.short_description : result.description }}</p>
                    </b-card-body>
                    <div slot="footer">
                      <span>{{ result.badge }}</span>
                      <span>${{ result.price }}</span>
                    </div>
                  </b-card>
                </div>
              </b-card-group>
            </ais-results>

            <!-- <p>
            <router-link :to="'/part/' + result.objectID">
            <ais-highlight :result="result" attribute-name="name"></ais-highlight>
          </router-link>
        </p> -->

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
  }
}
</script>
