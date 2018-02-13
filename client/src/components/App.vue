<template lang="pug">
#app
  h2 Tree-stack
  tree-list(:trees="trees")
</template>

<script>
import TreeList from './TreeList'
import TreeService from '../services/Tree'

export default {
  name: 'App',
  data () {
    return {
      trees: []
    }
  },
  created () {
    TreeService.get()
      .then(({data}) => {
        this.trees = data
      })
  },
  components: {
    TreeList
  }
}
</script>
