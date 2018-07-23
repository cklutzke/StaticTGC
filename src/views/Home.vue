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
          <b-col cols="2" style="padding-top: 30px">
            <div v-for="facet in facets">
              <h4>{{ facet.label }}</h4>
              <ais-refinement-list :attribute-name="facet.name" />
            </div>
          </b-col>
          <b-col>

            <!-- TODO: Link to router page for each product. -->
            <!-- <p>
              <router-link :to="'/part/' + result.objectID">
                <ais-highlight :result="result" attribute-name="name"></ais-highlight>
              </router-link>
            </p> -->
            <!-- <b-link :href="'https://thegamecrafter.com' + result.shop_uri" target="_blank"> -->

            <ais-results inline-template>

              <div class="row">
                <div class="col-6 col-xl-3 col-lg-4" v-for="result in results">
                  <div class="product is-gray">
                    <!-- <a href="{{shop_uri}}[% IF dept_uri %]?dept_uri=[% dept_uri %]&dept_name=[% dept_name %][% END %]" class="image d-flex align-items-center justify-content-center">
                     {{#on_sale}}<div class="ribbon ribbon-danger text-uppercase">{{^badge}}On Sale!{{/badge}}{{#badge}}{{badge}}{{/badge}}</div>{{/on_sale}}
                     {{#featured}}<div class="ribbon ribbon-warning text-uppercase">Featured</div>{{/featured}}
                     {{#staff_pick}}<div class="ribbon ribbon-success text-uppercase">Staff Pick</div>{{/staff_pick}}
                     {{#vintage}}<div class="ribbon ribbon-info text-uppercase">Vintage</div>{{/vintage}}
                         <img src="{{preview_uri}}" alt="product" class="img-fluid">
                     </a> -->
                    <div class="title">
                      <!-- <small class="text-muted"><a href="[% IF dept_uri %][% dept_uri %][% ELSE %]{{department_uri_part}}[% END %]">[% IF dept_name %][% dept_name %][% ELSE %]{{department_name}}[% END %]</a></small> -->
                      <!-- <a href="{{shop_uri}}[% IF dept_uri %]?dept_uri=[% dept_uri %]&dept_name=[% dept_name %][% END %]"><h3 class="h6 text-uppercase no-margin-bottom">{{name}}</h3></a> -->
                      <h3 class="h6 text-uppercase no-margin-bottom">{{result.name}}</h3>
                      <!-- {{^on_sale}}<button onclick="tgc.add_to_cart('{{sku_id}}', this, {{over18}})" class="btn btn-secondary btn-sm float-right"><i class="fas fa-cart-plus"></i> Add to Cart</button>{{/on_sale}}
                      {{#on_sale}}<a href="{{shop_uri}}[% IF dept_uri %]?dept_uri=[% dept_uri %]&dept_name=[% dept_name %][% END %]" class="btn btn-secondary btn-sm float-right"><i class="fas fa-cart-plus"></i> Add to Cart</a>{{/on_sale}} -->
                      <span class="price text-muted">{{result.price}}</span>
                    </div>
                  </div>
                </div>
              </div>


              <!-- <b-card-group deck>
                <template v-for="result in results" >
                  <b-card
                    :title="result.name"
                    :sub-title="result.category"
                    :img-src="'https:' + result.preview_uri"
                    :img-alt="'Image of ' + result.name"
                    img-top
                    :border-variant="result.badge ? 'primary' : 'secondary'"
                    style="width: 10rem; padding-top: 30px"
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
                </template>
              </b-card-group> -->

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
      ],
      homeResults: [
        { name: "The Captain is Dead",
          category: "Indie Games",
          preview_uri: "//s3.amazonaws.com/files.thegamecrafter.com/9eb5bf196bebafa33dbbed5e2aa33563772bfd10",
          badge: "Staff Pick",
          short_description: "The last 10 minutes of your favorite Sci-Fi show that has gone so badly that The Captain is Dead!",
          description: "This is really long and nobody wants to read it.",
          price: 49.99
        },
        { name: "Djin",
          category: "Minifigs",
          preview_uri: "//s3.amazonaws.com/preview.thegamecrafter.com/45C414B4-11D2-11E8-AADE-153194A6FE1D.png",
          badge: "",
          short_description: "It's cool.",
          description: "This is really long and nobody wants to read it.",
          price: 8.75
        }
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
}

.card-text {
}

</style>
