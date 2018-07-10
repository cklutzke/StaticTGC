<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <MeepleSelector />
        </b-col>
        <b-col>
          <PartViewer />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MeepleSelector from '@/components/MeepleSelector.vue'
import PartViewer from '@/components/PartViewer.vue'

export default {
  name: 'MeepleShopper',
  components: {
    MeepleSelector,
    PartViewer
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
