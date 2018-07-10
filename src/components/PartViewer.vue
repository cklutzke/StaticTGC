<template>
  <div>
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
      part: wing.object ({
        with_credentials: false
      })
    }
  },
  watch: {
    partId: function (val) {
      this.part.fetch_api = "/api/part/" + this.partId;
      console.log(this.part.fetch_api);
      this.part.fetch();
    }
  }
}
</script>
