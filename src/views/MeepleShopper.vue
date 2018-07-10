<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <MeepleSelector />
        </b-col>
        <b-col>
          <PartViewer :partId="partId" />
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
  props: [
    'partId'
  ],
  components: {
    MeepleSelector,
    PartViewer
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
