<template lang="pug">
#app
  h2 Tree-stack
  tree-list(:trees="trees")
  pagination(v-model="page" :max-page="max")
</template>

<script>
import TreeList from './TreeList'
import TreeService from '../services/Tree'
import Pagination from './Pagination'

export default {
  name: 'App',
  data () {
    return {
      page: 1,
      max: 0,
      trees: []
    }
  },
  created () {
    this.getTrees()
  },
  methods: {
    getTrees () {
      TreeService.get(this.page)
        .then(({data}) => {
          this.trees = data.docs
          this.max = data.pages
        })
    }
  },
  watch: {
    page () {
      this.getTrees()
    }
  },
  components: {
    TreeList,
    Pagination
  }
}
</script>
