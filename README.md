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
    QUESTIONS
      It seems like Algolia is fucking up the Bootstrap Vue b-cards.
        Cards are supposed to be the same height, but they're not.
        When I try to make the cards into components inside Algolia results, it says they're not registered correctly.
        I can't invoke a computed value to massage / truncate product description text.
          Or handle the hyperlink in the sticker pawn description text.
        I can't invoke a method for the price button.
      How do I make it so clicking anywhere on the card takes you to the product?
        If I wrap it in a b-link, it turns all the text blue.
      Why does the Department refinement list show kebab tags instead of human-readable text?
    IDEAS
      Can I show something about sales levels to provide social proof?
  Design a resizeable header

Create config file that specifies a logo, site name, search facets, CSS styling
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
