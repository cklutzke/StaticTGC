<template>
  <div class="hello">
    <h1>Hello, {{ helloName }}!</h1>
    <p>
      We'll put useful content here soon.
    </p>

    <ais-index
      app-id="5V0BUFDX8J"
      api-key="a25692c12853aea7a77c5a7125498512"
      index-name="parts"
    >
      <ais-search-box></ais-search-box>
      <ais-results>
        <template slot-scope="{ result }">
          <h3>
            <ais-highlight :result="result" attribute-name="name"></ais-highlight>
          </h3>
        </template>
      </ais-results>
    </ais-index>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    helloName: String
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  text-align: left;
}
</style>
