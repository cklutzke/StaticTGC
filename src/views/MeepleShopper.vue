<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <MeepleSelector />
        </b-col>
        <b-col>
          <TGCPartViewer :partId="partId" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MeepleSelector from '@/components/MeepleSelector.vue'
import TGCPartViewer from '@/components/TGCPartViewer.vue'

export default {
  name: 'MeepleShopper',
  props: [
    'partId'
  ],
  components: {
    MeepleSelector,
    TGCPartViewer
  },
  data: function () {
    return {
    }
  },
  methods: {
  }
}
</script>
