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
  Copy what JT is doing in the VUE branch of /plainblack/TGC
    Get links working: first to TGC pages, then to router views.
  Design a resizeable header

  QUESTIONS
    How can I find an example of a featured product, so I can test that ribbon?
    Why does the Department refinement list show kebab tags instead of human-readable text?
    Can we show something about sales levels to provide social proof?

Create config file that specifies a logo, site name, search facets, CSS styling
  Config what items to show in search results: e.g. Category vs Department
  Derive nav menu from departments and categories

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

PRODUCT SEARCH RESULT ATTRIBUTES ----------------------------
_highlightResult
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
