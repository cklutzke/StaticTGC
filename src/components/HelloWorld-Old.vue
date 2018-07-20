<template>
  <div class="hello">
    <h1>Hello, {{ helloName }}!</h1>
    <p>
      We'll put useful content here soon.
    </p>

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
