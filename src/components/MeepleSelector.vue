<template>
  <div>
    <h1>Meeple Selector</h1>
    <ul>
        <li v-for="meeple in meeples">
            <router-link :to="'/part/' + meeple.id">{{ meeple.name }}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
  },
  data: function () {
    return {
      meeples: [
        {id: "DE9CE08C-9A04-11E0-AACC-432941C43697", name: "Meeple, Black"},
        {id: "DEA70F80-9A04-11E0-AACC-432941C43697", name: "Meeple, Blue"},
        {id: "DEAD113C-9A04-11E0-AACC-432941C43697", name: "Meeple, Green"},
        {id: "DEC8FFC8-9A04-11E0-AACC-432941C43697", name: "Meeple, Orange"},
        {id: "DED6AFBA-9A04-11E0-AACC-432941C43697", name: "Meeple, Purple"},
        {id: "DF0FDE0C-9A04-11E0-AACC-432941C43697", name: "Meeple, Red"},
        {id: "DF164EEA-9A04-11E0-AACC-432941C43697", name: "Meeple, White"},
        {id: "DF1C194C-9A04-11E0-AACC-432941C43697", name: "Meeple, Yellow"}
      ]
    }
  }
}
</script>
