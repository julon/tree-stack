<template lang="pug">
v-app#app
  v-toolbar.indigo(dark fixed app)
    v-toolbar-title Tree-stack
  v-content
    v-list.tree-list
      template(v-for="(tree, index) in trees")
        v-list-tile
          v-list-tile-content {{ tree.name }}
        v-divider(v-if="index < trees.length - 1")
  .py-2.px-3.mx-auto
    v-pagination(:length="max" v-model="page" :total-visible="6")
</template>

<script>
import TreeService from './Tree'

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
  }
}
</script>
