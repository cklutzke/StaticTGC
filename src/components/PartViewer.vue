<template>
  <div>
    // TODO: Show useful info about the part.
    // TODO: Ensure the part is displayed if the user pastes in the URL or refreshes the page.
    <p>Selected part ID is {{ partId }}</p>
    <p>Returned part ID is {{ part.properties.id }}</p>
    <p>Returned part name is {{ part.properties.name }}</p>
  </div>
</template>

<script>
import {wing} from "../wing.vue.js";
wing.base_uri = "https://www.thegamecrafter.com";
const StaticTGC_api_key_id = "034F04B4-7329-11E8-BA7A-8BFD93A6FE1D";

export default {
  name: 'PartViewer',
  props: [
    'partId'
  ],
  data: function () {
    return {
      // We can't reuse the same wing part object over and over. We have to
      // start with an empty part and replace it when the ID changes.
      part: wing.object({})
    }
  },
  watch: {
    partId: function (val) {
      this.onLoadPart();
    }
  },
  methods: {
    onLoadPart: function () {
      this.part = wing.object ({
        with_credentials: false,
        fetch_api: "/api/part/" + this.partId
      });

      this.part.fetch();
    }
  }
}
</script>
