# StaticTGC
This is a project-in-progress to develop a single-page web application so customers can purchase targeted categories of Game Crafter products.

GETTING STARTED ---------------------

1. Make sure you have current versions of git and npm on your local machine.

2. Globally install vue-cli 3 (currently in beta) by running "npm install -g @vue/cli". Confirm that you installed version 3 by running "vue -V".

3. Clone this repo to your local machine. Checkout the latest branch: currently this is [homepage].

4. Install all dependencies automatically by running "npm install" in the project root directory.

5. Run "vue ui" to start the vue-cli console. Import the project. Run the Serve task. This will serve the project on localhost:8080 with hot reloading.

TODO List --------------------------

Plan an appropriate landing page.
  Look through the <style> section from the Algolia Bootstrap example
    Make use of what I can
    Remove that which is no longer relevant
  Fix formatting for single result - test with "dindaelus"
  Can we translate div-based rows and columns to bootstrap-vue layout tags? (b-container, b-row, b-col)
  Make the page look decent on a phone
  Make the page look decent on a tablet or laptop
  Create a category page view page
    It would be great if we could filter by department for items with no category, or category == "Indie Games"

Create config file that specifies a logo, site name, search facets, CSS styling
  Try setting up a config to limit all searches sitewide
  Config what items to show in search results: e.g. Category vs Department
  Derive nav menu from categories
    Can I differentiate games (and _only_ games) by Department?

Update product viewer to work with both parts and games.

Complete shopping process.
  Allow user to add to cart from price button on product card.
  Allow a customer to complete a purchase.
    Assume we will redirect to The Game Crafter to complete the purchase.
  Display full cart contents in a popover from the cart icon.
  Allow user to remove items from cart.
  Provide an option to pin the cart to the right side of the screen.

Create router-based product pages.

Enable various account operations: create account, view receipts, etc.
  Can I pull these features from tgc.vue.js?

Add help / support features.

Add gift certificate features.

Eliminate flashes of unstyled / unarranged content.

Update the page title and meta tags based from router changes. https://alligator.io/vuejs/vue-router-modify-head/

ALGOLIA PRODUCT SEARCH RESULT ATTRIBUTES ----------------------------

attributesToIndex       => ['name', 'department_name', 'category', 'keywords', 'description', 'short_description', 'designer_name', 'if_you_like', 'cool_factor_1','cool_factor_2','cool_factor_3','genre','theme','setting','audience','primary_mechanic', 'color', 'material', 'department_uri_part'],

attributesForFaceting   => ['asset_types','asset_set','license_type','digital_delivery','contains_nudity','contains_substance_abuse','contains_gore','contains_profanity','contains_sexuality','designer_id','related','components_used','id','vintage','discontinued','low_volume','staff_pick','featured','on_sale','price','department', 'min_age', 'min_players', 'max_players','play_time','genre','theme','setting','audience','primary_mechanic','if_you_like', 'color', 'material', 'category','family','object_type','size_in_mm','number_of_sides','usable_in_games'],

numericAttributesToIndex=> ['last_sale_date','date_published','accolade_count', 'bayesian_ranking', 'min_players', 'max_players', 'featured', 'showcase', 'sales', 'price', 'vintage', 'discontinued', 'on_sale', 'low_volume','size_in_mm','number_of_sides',],

customRanking           => ['desc(rank)', 'asc(name)', 'desc(sales)', ],

_highlightResult [object]
badge
category
color
contains_gore
contains_nudity
contains_profanity
contains_sexuality
contains_substance_abuse
date_published
department[array]
department_name
department_uri_part
description
discontinued
family
id
keywords
last_sale_date
low_volume
material
name
number_of_sides
objectID
object_type
on_sale
photo_uri
preview_uri
price
quantity
quantity_available_for_games
quantity_available_for_shop
rank
sales
shop_uri
size_in_mm
sku_id
staff_pick
usable_in_games
vintage
