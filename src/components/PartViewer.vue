<template>
  <div>
    <h1>Selected part is....</h1>
    <p>{{ partId }}</p>
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
        fetch_api: "/api/part/" + this.partId,
        with_credentials: false
      })
    }
  }
}
</script>
