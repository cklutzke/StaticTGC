
<!--
  This is the main view of the application.
-->

<template>
  <div class="home">
    <!-- TODO: Put a promotional banner / carousel here. -->

    <b-container fluid>
      <ais-index
        app-id="5V0BUFDX8J"
        api-key="a25692c12853aea7a77c5a7125498512"
        index-name="products"
        :query-parameters="algoliaParameters">
        <b-row>
          <b-col sm="3" lg="auto">
            <h1>Search</h1>
            <ais-price-range class="pb-2" attribute-name="price"
              currency="" from-placeholder="$min" to-placeholder="$max"
              :classNames="{
                'ais-price-range': 'form-group',
                'ais-price-range__input': 'form-control'
              }">
              <h3 slot="header">Price</h3>
            </ais-price-range>
            <template v-for="facet in facets">
              <ais-refinement-list class="pb-2" :attribute-name="facet.name" :classNames="{
                'ais-refinement-list': 'form-check',
                'ais-refinement-list__checkbox': 'form-check-input',
                'ais-refinement-list__label': 'form-check-label',
                'ais-refinement-list__count': 'badge badge-secondary'
                }">
                <h3 slot="header">{{facet.label}}</h3>
              </ais-refinement-list>
            </template>
          </b-col>
          <b-col sm="9">
            <ais-search-box>
              <div class="search-controls input-group">
                <ais-input
                  placeholder="Search product by name or description..."
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
            <form class="search-controls form-inline justify-content-between">
              <ais-stats />
              <!--
                Per the article below, I decided to give the user the option to either viewer
                one screen of results (8) or a whole bunch of them (50). There doesn't seem
                to be any reason to offer other options.
                https://www.nngroup.com/articles/item-list-view-all/
                TODO: This control should have a label.
              -->
              <ais-results-per-page-selector id="ais-rpps" :options="[8, 50]"
                class="form-control"/>
              <!-- <label for="ais-rpps" style="padding-left: 10px;">results per page</label> -->
            </form>

            <ais-results inline-template>
              <b-row>
                <b-col cols="6" lg="4" xl="3" v-for="result in results">
                  <div class="product is-gray">
                    <router-link :to="'/product/' + result.sku_id"
                      class="image d-flex align-items-center justify-content-center">
                        <div v-if="result.on_sale" class="ribbon ribbon-danger text-uppercase">
                          {{result.badge ? result.badge : 'On Sale!'}}
                        </div>
                        <div v-if="result.featured" class="ribbon ribbon-warning text-uppercase">Featured</div>
                        <div v-if="result.staff_pick" class="ribbon ribbon-success text-uppercase">Staff Pick</div>
                        <div v-if="result.vintage" class="ribbon ribbon-info text-uppercase">Vintage</div>
                        <!--
                          I added a ribbon with a count of accolades, which may or may not be useful
                          (I feel like social proof is important), but it was at least interesting as an exercise.
                        -->
                        <div v-if="result.accolade_count" class="ribbon ribbon-primary text-uppercase">{{ result.accolade_count }} Accolades</div>
                        <img :src="result.preview_uri" alt="product" class="img-fluid">
                    </router-link>
                    <div class="title">
                      <small class="text-muted">
                        <!--
                          I didn't like "Indie Games" as a category so there's special handling here to
                          display the department (card games, board games, dice games) instead.
                          TODO: The label here should link to a nav view.
                        -->
                        {{ result.category && result.category!="Indie Games" ? result.category : result.department_name }}
                      </small>
                      <router-link :to="'/product/' + result.sku_id">
                        <h3 class="h6 text-uppercase no-margin-bottom">{{result.name}}</h3>
                      </router-link>

                      <!--
                        I'm not sure why the original code I translated below showed a button normally but a link if the
                        product is on sale. I've preserved the if/else structure here to figure it out later.
                      -->
                      <button v-if="!result.on_sale"
                        class="btn btn-secondary btn-sm float-right">
                        <!-- TODO: onclick="tgc.add_to_cart('{{sku_id}}', this, {{over18}})" -->
                        <i class="fas fa-cart-plus"></i> Add to Cart
                      </button>
                      <a v-else href="#"
                        class="btn btn-secondary btn-sm float-right">
                        <!-- TODO: {{shop_uri}}[% IF dept_uri %]?dept_uri=[% dept_uri %]&dept_name=[% dept_name %][% END %] -->
                        <i class="fas fa-cart-plus"></i> Add to Cart
                      </a>

                      <span class="price text-muted">{{result.price|currency}}</span>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </ais-results>

            <ais-no-results/>
            <ais-pagination :classNames="{
              'ais-pagination': 'pagination',
              'ais-pagination__item': 'page-item',
              'ais-pagination__link': 'page-link',
              'ais-pagination__item--active': 'active',
              'ais-pagination__item--disabled': 'disabled'
            }" v-on:page-change="onPageChange" />
          </b-col>
        </b-row>
      </ais-index>
    </b-container>
  </div>
</template>

<script>

import StaticConfig from '../StaticConfig'

export default {
  name: "home",
  components: {
  },
  data: function () {
    return {
      algoliaParameters: {
        filters: StaticConfig.filters
      },
      facets: StaticConfig.facets
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

.search-controls {
  padding-bottom: 20px;
}

/* Clear Search */
.ais-clear--disabled {
  display: none;
}

</style>
