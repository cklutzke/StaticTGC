<template>
  <div>
    <h1>Part Selector</h1>

    <ais-index
      app-id="5V0BUFDX8J"
      api-key="a25692c12853aea7a77c5a7125498512"
      index-name="parts"
    >
      <ais-search-box></ais-search-box>
      <ais-results>
        <template slot-scope="{ result }">
          <h3>
            <router-link :to="'/part/' + result.objectID">
              <ais-highlight :result="result" attribute-name="name"></ais-highlight>
            </router-link>
          </h3>
        </template>
      </ais-results>
    </ais-index>

    <!-- <ul>
        <li v-for="meeple in meeples">
            <router-link :to="'/part/' + meeple.id">{{ meeple.name }}</router-link>
        </li>
    </ul> -->

  </div>
</template>

<script>
export default {
  props: {
  },
  data: function () {
    return {
      // meeples: [
      //   {id: "DE9CE08C-9A04-11E0-AACC-432941C43697", name: "Meeple, Black"},
      //   {id: "DEA70F80-9A04-11E0-AACC-432941C43697", name: "Meeple, Blue"},
      //   {id: "DEAD113C-9A04-11E0-AACC-432941C43697", name: "Meeple, Green"},
      //   {id: "DEC8FFC8-9A04-11E0-AACC-432941C43697", name: "Meeple, Orange"},
      //   {id: "DED6AFBA-9A04-11E0-AACC-432941C43697", name: "Meeple, Purple"},
      //   {id: "DF0FDE0C-9A04-11E0-AACC-432941C43697", name: "Meeple, Red"},
      //   {id: "DF164EEA-9A04-11E0-AACC-432941C43697", name: "Meeple, White"},
      //   {id: "DF1C194C-9A04-11E0-AACC-432941C43697", name: "Meeple, Yellow"}
      // ]
    }
  }
}
</script>
