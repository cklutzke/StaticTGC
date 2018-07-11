# StaticTGC
This is a project-in-progress to develop a single-page web application so customers can purchase targeted categories of Game Crafter products.

GETTING STARTED ---------------------

1. Make sure you have current versions of git and npm on your local machine.

2. Globally install vue-cli 3 (currently in beta) by running "npm install -g @vue/cli". Confirm that you installed version 3 by running "vue -V".

3. Clone this repo to your local machine. Checkout the latest branch: currently this is [session].

4. Install all dependencies automatically by running "npm install" in the project root directory.

5. Run "vue ui" to start the vue-cli console. Import the project. Run the Serve task. This will serve the project on localhost:8080 with hot reloading.

TODO List --------------------------

Create a new branch for cart handling.

Put the cart in the App.vue object.

Put a part in the shopping cart.

Allow a customer to complete a purchase.

Browse parts via Algolia Vue controls.

Create an appropriate landing page.

Resize and rearrange components sensibly for different screen sizes.

Enable various account operations: create account, view receipts, etc.

Add page footer links.

Update the page title and meta tags based from router changes. https://alligator.io/vuejs/vue-router-modify-head/

CONCERNS ---------------------------

Watch for issues related to this warning from installing bootstrap-vue:
  npm WARN bootstrap@4.1.1 requires a peer of jquery@1.9.1 - 3 but none is installed. You must install peer dependencies yourself.
