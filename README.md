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
  Show a product viewer like https://www.thegamecrafter.com/parts
    Show each result as a product card with badge, price, 2 lines of description
    Needs to display games AND parts (and what else?)
      Look at "object_type"
    Handle resizing appropriately.
    Add item to cart by clicking price in TGCProductCard
  Design a resizeable header

Plan other views
  Shopping cart, account settings, help / support, etc.

Create config file that specifies a logo, site name, departments & categories, CSS styling
  Derive nav menu from departments and categories
    Look at Algolia search results to see what filters we can specify.

Display full cart contents in a popover from the cart icon.

Allow user to remove items from cart.

Allow a customer to complete a purchase.
  Assume we will redirect to The Game Crafter to complete the purchase.

Provide an option to pin the cart to the right side of the screen.

Enable various account operations: create account, view receipts, etc.
  Can I pull these features from tgc.vue.js?

Eliminate flashes of unstyled / unarranged content.

Update the page title and meta tags based from router changes. https://alligator.io/vuejs/vue-router-modify-head/

CONCERNS ---------------------------

Watch for issues related to this warning from installing bootstrap-vue:
  npm WARN bootstrap@4.1.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
