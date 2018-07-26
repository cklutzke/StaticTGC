<template>
  <div class="home">
    <!-- TODO: Put a promotional banner / carousel here. -->

    <div class="container-fluid">
      <ais-index
        app-id="5V0BUFDX8J"
        api-key="a25692c12853aea7a77c5a7125498512"
        index-name="products">
        <div class="row">
          <div class="col-md-2 col-sm-3">
            <h1>Search</h1>
          </div>
          <div class="col-md-10 col-sm-9">
            <ais-search-box>
              <div class="input-group">
                <ais-input
                  placeholder="Search product by name or reference..."
                  :classNames="{
                    'ais-input': 'form-control'
                  }"/>

                <span class="btn-group" role="group">
                  <ais-clear :classNames="{'ais-clear': 'btn btn-secondary'}">
                    <i class="fas fa-times" aria-hidden="true"/>
                  </ais-clear>
                  <button class="btn btn-secondary" type="submit">
                    <i class="fas fa-search" aria-hidden="true"/>
                  </button>
                </span>
              </div><!-- /input-group -->
            </ais-search-box>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2 col-sm-3">
            <!-- <div v-for="facet in facets">
              <h4>{{ facet.label }}</h4>
              <ais-refinement-list :attribute-name="facet.name" />
            </div> -->

            <ais-price-range attribute-name="price" :classNames="{
              'ais-price-range__input': 'form-control'
              }">
              <h3 slot="header">Price</h3>
            </ais-price-range>

            <ais-refinement-list attribute-name="material" :classNames="{
              'ais-refinement-list__count': 'badge',
              'ais-refinement-list__item': 'checkbox'
              }">
              <h3 slot="header">Material</h3>
            </ais-refinement-list>

            <ais-refinement-list attribute-name="color" :classNames="{
              'ais-refinement-list__count': 'badge',
              'ais-refinement-list__item': 'checkbox'
              }">
              <h3 slot="header">Color</h3>
            </ais-refinement-list>
          </div>
          <div class="col-md-10 col-sm-9">
            <form class="search-controls form-inline">
              <ais-stats class="mr-sm-5"/>
              <ais-results-per-page-selector id="ais-rpps" :options="[8, 48]"
                class="form-control mr-sm-1"/>
              <label for="ais-rpps">results per page</label>
              <!-- <ais-sort-by-selector :indices="[
                  {name: 'ikea', label: 'Relevance'},
                  {name: 'ikea_price_asc', label: 'Lowest price'},
                  {name: 'ikea_price_desc', label: 'Highest price'}
                  ]"
                  :classNames="{'ais-sort-by-selector': 'form-control' }"
              /> -->
            </form>

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

            <ais-no-results/>

            <ais-pagination :classNames="{
              'ais-pagination': 'pagination',
              'ais-pagination__item': 'page-item',
              'ais-pagination__link': 'page-link',
              'ais-pagination__item--active': 'active',
              'ais-pagination__item--disabled': 'disabled'
            }" v-on:page-change="onPageChange" />

          </div>
        </div>
      </ais-index>
    </div>
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
        { name: "category", label: "Categories"},
        { name: "color", label: "Colors"}
      ]
    }
  },
  methods: {
    onPageChange() {
      window.scrollTo(0, 0);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">

// TEMP: A lot of this was copied from an Algolia Bootstrap example: remove what isn't relevant.

.search-controls {
  padding-bottom: 20px;
}

.ais-stats {
  line-height: 36px;
}

.ais-results:after {
  content: ' ';
  display: block;
  clear: both;
}

/* Sort by selector */
.search-controls {
  .form-control {
    float: right;
    margin-left: 10px;
  }
}
.ais-sort-by-selector {
  float: right;
}

.ais-results-per-page-selector {
  float: right;
  margin-right: 10px;
}

/* Clear Search */
.ais-clear--disabled {
  display: none;
}

/* Price Range */
.ais-price-range__input--from,
.ais-price-range__input--to {
  width: 65px;
  display: inline-block;
}
</style>
