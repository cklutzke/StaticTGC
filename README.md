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
    FUNCTION
      Link cards to product detail pages. TEMP: On TGC.
      Add item directly to cart by clicking price in TGCProductCard
    APPEARANCE
      Why aren't the cards the same height and spaced vertically?
      How do I make the title smaller?
      Can I highlight the card based on the current badge?
      Can I show something about sales levels to provide social proof?
      Can I show if the product is featured or on sale?
    DEFECTS?
      Why can't I put the result cards in a TGCProductCard component?
  Design a resizeable header

Create config file that specifies a logo, site name, departments & categories, CSS styling
  Config what items to show in search results: e.g. Category vs Department
  Derive nav menu from departments and categories
    Look at Algolia search results to see what filters we can specify.

Complete shopping process.
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
