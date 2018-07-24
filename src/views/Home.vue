<template>
  <div class="home">
    <!-- TODO: Put a promotional banner / carousel here. -->

    <ais-index
      app-id="5V0BUFDX8J"
      api-key="a25692c12853aea7a77c5a7125498512"
      index-name="products"
    >
      <ais-search-box></ais-search-box>
      <ais-results-per-page-selector :options="[20, 50, 100]"></ais-results-per-page-selector>
      <ais-pagination></ais-pagination>
      <ais-no-results></ais-no-results>

      <b-container>
        <b-row>
          <b-col cols="2" style="padding-top: 30px">
            <div v-for="facet in facets">
              <h4>{{ facet.label }}</h4>
              <ais-refinement-list :attribute-name="facet.name" />
            </div>
          </b-col>
          <b-col >
            <ais-results inline-template>
              <div class="row">
                <div class="col-6 col-xl-3 col-lg-4" v-for="result in results">
                  <div class="product is-gray">
                    <router-link :to="'/product/' + result.sku_id"
                      class="image d-flex align-items-center justify-content-center">
                        <div v-if="result.on_sale" class="ribbon ribbon-danger text-uppercase">
                          {{result.badge ? result.badge : 'On Sale!'}}
                        </div>
                        <div v-if="result.featured" class="ribbon ribbon-warning text-uppercase">Featured</div>
                        <div v-if="result.staff_pick" class="ribbon ribbon-success text-uppercase">Staff Pick</div>
                        <div v-if="result.vintage" class="ribbon ribbon-info text-uppercase">Vintage</div>
                        <div v-if="result.accolade_count" class="ribbon ribbon-primary text-uppercase">{{ result.accolade_count }} Accolades</div>
                        <img :src="result.preview_uri" alt="product" class="img-fluid">
                    </router-link>
                    <div class="title">
                      <small class="text-muted">
                        <!-- <a href="[% IF dept_uri %][% dept_uri %][% ELSE %]{{department_uri_part}}[% END %]"> -->
                        {{ result.category && result.category!="Indie Games" ? result.category : result.department_name }}
                        <!-- </a> -->
                      </small>
                      <router-link :to="'/product/' + result.sku_id">
                        <h3 class="h6 text-uppercase no-margin-bottom">{{result.name}}</h3>
                      </router-link>
                      <button v-if="!result.on_sale"
                        class="btn btn-secondary btn-sm float-right">
                        <!-- onclick="tgc.add_to_cart('{{sku_id}}', this, {{over18}})" -->
                        <i class="fas fa-cart-plus"></i> Add to Cart
                      </button>
                      <a v-else href="#"
                        class="btn btn-secondary btn-sm float-right">
                        <!-- {{shop_uri}}[% IF dept_uri %]?dept_uri=[% dept_uri %]&dept_name=[% dept_name %][% END %] -->
                        <i class="fas fa-cart-plus"></i> Add to Cart
                      </a>
                      <span class="price text-muted">{{result.price|currency}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ais-results>
          </b-col>
        </b-row>
      </b-container>
    </ais-index>
  </div>
</template>

<script>

export default {
  name: "home",
  components: {
  },
  data: function () {
    return {
      facets: [
        { name: "department", label: "Departments"},
        { name: "category", label: "Categories"},
        { name: "color", label: "Colors"}
      ]
    }
  },
  methods: {
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ais-refinement-list {
}

</style>
