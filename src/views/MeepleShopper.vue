<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <MeepleSelector />
        </b-col>
        <b-col>
          <h1>Selected meeple is....</h1>
          <p>{{ $route.params.id }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MeepleSelector from '@/components/MeepleSelector.vue'

export default {
  name: 'MeepleShopper',
  components: {
    MeepleSelector
  },
  data: function () {
    return {
      meepleName: "[name]",
      meepleId: "[id]"
    }
  },
  methods: {

  }
}
</script>
