# StaticTGC
This is a project-in-progress to develop a single-page web application so customers can purchase targeted categories of Game Crafter products.

GETTING STARTED ---------------------

1. Make sure you have current versions of git and npm on your local machine.

2. Globally install vue-cli 3 (currently in beta) by running "npm install -g @vue/cli". Confirm that you installed version 3 by running "vue -V".

3. Clone this repo to your local machine. Checkout the latest branch: currently this is [homepage].

4. Install all dependencies automatically by running "npm install" in the project root directory.

5. Run "vue ui" to start the vue-cli console. Import the project. Run the Serve task. This will serve the project on localhost:8080 with hot reloading.

TODO List --------------------------

Alter the site configuration and appearance based on a single StaticConfig.js file.
  Nav items should list departments (only for games), categories, deals, help / support, account stuff, about
  Configure CSS styling.

Plan an appropriate landing page.
  Clean up the header
    Redesign the Log In controls.
    Hide the Motto at size MD.
  Move common code from Category.vue and Home.vue to a component.
  DEFECTS I DON'T KNOW HOW TO FIX
    Results are moved below the facets if size is in LG range (992px to 1199px)
    Does stupid restructuring crap if search displays 1 or 0 results. Test with "dindaelus".
    Allow the user to enter a Price search refinement value less than $1.
    Show the Price search refinement controls on a single line.
    Exclude "None" checkboxes from the facet refinement lists.
    Results-per-page control should have a label.
    Paging through search results isn't managed by the router.

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

Update the title and SEO / Open Graph meta tags based upon Vue Router changes. https://alligator.io/vuejs/vue-router-modify-head/

ALGOLIA PRODUCT SEARCH RESULT ATTRIBUTES ----------------------------

attributesToIndex       => ['name', 'department_name', 'category', 'keywords', 'description', 'short_description', 'designer_name', 'if_you_like', 'cool_factor_1','cool_factor_2','cool_factor_3','genre','theme','setting','audience','primary_mechanic', 'color', 'material', 'department_uri_part'],

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
