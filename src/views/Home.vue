<template>
  <div class="home">
    <!-- TODO: Put a promotional banner / carousel here. -->

    <div class="conatainer-fluid">
      <ais-index
        app-id="5V0BUFDX8J"
        api-key="a25692c12853aea7a77c5a7125498512"
        index-name="products">
        <div class="row">
          <div class="col-md-2 col-sm-3">
            <h1 class="head-title">
              Product Search
            </h1>
          </div>
          <div class="col-md-10 col-sm-9">
            <ais-search-box/>
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
            <div class="search-controls form-inline">
              <!-- <ais-sort-by-selector :indices="[
                  {name: 'ikea', label: 'Relevance'},
                  {name: 'ikea_price_asc', label: 'Lowest price'},
                  {name: 'ikea_price_desc', label: 'Highest price'}
                  ]"
                  :classNames="{'ais-sort-by-selector': 'form-control' }"
              /> -->
              <ais-results-per-page-selector :options="[12, 24, 48]" :classNames="{'ais-results-per-page-selector': 'form-control' }"/>
              <ais-stats/>
            </div>

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

            <ais-pagination class="pagination" :classNames="{
              'ais-pagination': 'root',
              'ais-pagination__item': 'page-item',
              'ais-pagination__link': 'page-link',
              'ais-pagination__item--active': 'active',
              'ais-pagination__item--disabled': 'disabled'
            }"v-on:page-change="onPageChange" />

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
#app {
  -webkit-font-smoothing: antialiased;
  padding-top: 20px;
}

.head-title {
  margin-top: 0;
}

.ais-powered-by {
  float: right;

  line-height: 26px;
  svg {
    vertical-align: bottom;
  }
}

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

.search-result {
  padding: 10px 20px 20px;
  width: 24%;
  margin-bottom: 10px;
  border: solid 1px #eee;
  box-shadow: 0 0 3px #f6f6f6;
  margin-right: 1%;
  position: relative;
  border-radius: 3px;
  min-width: 220px;
  background: #fff;
  display: inline;
  float: left;
  transition: all 0.5s;
}

.result__info {
  position: absolute;
  width: 100%;
  padding: 0px 20px 20px;
  bottom: 0;
  left: 0;
}

.result__image {
  margin-bottom: 100px;
}

.result__name {
  font-size: 14px;
  font-weight: bold;
}

.result__name mark,
.result__type mark {
  font-style: normal;
  background: rgba(143, 187, 237, 0.1);
  box-shadow: inset 0 -1px 0 0 rgba(69, 142, 225, 0.8);
}

.result__type mark {
  background: rgba(143, 187, 237, 0.1);
  border-radius: 0;
  box-shadow: inset 0 -1px 0 0 rgba(69, 142, 225, 0.8);
}

.result__price {
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  right: 20px;
  bottom: 16px;
}

.result__type {
  color: #a2a2a2;
  font-size: 12px;
}

.result__rating {
  margin-top: 10px;
}

.result__star {
  width: 1em;
  height: 1em;
}

.result__star:before {
  content: '\2605';
  color: #fbae00;
}

.result__star--empty:before {
  content: '\2606';
  color: #fbae00;
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
