<template>
  <div>
    <h1>Selected part is....</h1>
    <p>{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  props: {
  },
  data: function () {
    return {
    }
  }
}
</script>
