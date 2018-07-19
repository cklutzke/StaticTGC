# StaticTGC
This is a project-in-progress to develop a single-page web application so customers can purchase targeted categories of Game Crafter products.

GETTING STARTED ---------------------

1. Make sure you have current versions of git and npm on your local machine.

2. Globally install vue-cli 3 (currently in beta) by running "npm install -g @vue/cli". Confirm that you installed version 3 by running "vue -V".

3. Clone this repo to your local machine. Checkout the latest branch: currently this is [session].

4. Install all dependencies automatically by running "npm install" in the project root directory.

5. Run "vue ui" to start the vue-cli console. Import the project. Run the Serve task. This will serve the project on localhost:8080 with hot reloading.

TODO List --------------------------

Create an appropriate landing page.
  To start with, mock up something like https://www.thegamecrafter.com/parts
  Create config file that specifies a logo, site name, departments & categories, CSS styling
  Derive nav menu from departments and categories
  Add a placeholder footer area that just says "©2018 The Game Crafter, LLC. All rights reserved."

Product selector needs to display games too!
  Look at "object_type"

Allow user to remove items from cart.

Display a cart icon with count of contents in a card, with full cart contents displayed as a popover.

Allow a customer to complete a purchase.
  Assume we will redirect to The Game Crafter to complete the purchase.

Resize and rearrange components sensibly for different screen sizes.

Enable various account operations: create account, view receipts, etc.
  Can I pull these features from tgc.vue.js?

Eliminate flashes of unstyled / unarranged content.

Update the page title and meta tags based from router changes. https://alligator.io/vuejs/vue-router-modify-head/

CONCERNS ---------------------------

Watch for issues related to this warning from installing bootstrap-vue:
  npm WARN bootstrap@4.1.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
