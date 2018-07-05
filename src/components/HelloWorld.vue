<template>
  <div class="hello">
    <h1>Hello, {{ helloName }}!</h1>
    <p>
      We'll put useful content here soon.
    </p>
    <b-form @submit="onTest">
      <b-button type="submit" variant="primary">Test</b-button>
    </b-form>
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
    onTest (evt) {
      evt.preventDefault();
      alert("Test successful!");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
