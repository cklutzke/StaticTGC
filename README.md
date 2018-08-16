# StaticTGC
This is a project-in-progress to develop a single-page web application so customers can purchase targeted categories of Game Crafter products.

GETTING STARTED ---------------------

1. Make sure you have current versions of git and npm on your local machine.

2. Globally install vue-cli 3 (currently in beta) by running "npm install -g @vue/cli". Confirm that you installed version 3 by running "vue -V".

3. Clone this repo to your local machine. Checkout the latest branch: currently this is [homepage].

4. Install all dependencies automatically by running "npm install" in the project root directory.

5. Run "vue ui" to start the vue-cli console. Import the project. Run the Serve task. This will serve the project on localhost:8080 with hot reloading.

NOTE:
The following files are automatically generated and maintained by the Vue CLI / UI tools. They probably shouldn't be edited directly.
  .gitignore
  babel.config.js
  package.json - Seems to do the work that people previously needed to do manually for Webpack.
  package-lock.json - Seems to provide additional support details for package.json.
  vue.config.js - The settings from Vue UI's project configuration tab.

TODO List --------------------------

DEFECTS I DON'T KNOW HOW TO FIX
  Switching directly from one nav / department option to another doesn't refresh the page.
  Results are moved below the facets if size is in LG range (992px to 1199px)
  Does stupid restructuring crap if search displays 1 or 0 results. Test with "dindaelus".
  The user cannot enter a Price search refinement value less than $1.
  The Price search refinement controls should display on a single line.
  Exclude "None" checkboxes from the game facet refinement lists (if_you_like, primary_mechanic, theme, setting, genre).
  Paging through search results isn't managed by the router.

Update product viewer to work with both parts and games.

Complete shopping process.
  Allow user to add to cart from price button on product card.
  Allow a customer to complete a purchase.
    Assume we will redirect to The Game Crafter to complete the purchase.
  Display full cart contents in a popover from the cart icon.
  Allow user to remove items from cart.
  Provide an option to pin the cart to the right side of the screen.

Enable various account operations: create account, view receipts, etc.
  Can I pull these features from tgc.vue.js?

Add help / support features.

Add gift certificate features.

Update the title and SEO / Open Graph meta tags based upon config and Vue Router changes. https://alligator.io/vuejs/vue-router-modify-head/
