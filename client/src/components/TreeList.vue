<template lang="pug">
  .tree-list
    tree(v-for="tree in trees" :name="tree.name" :key="tree._id")
</template>

<script>
import Tree from './Tree'

export default {
  name: 'TreeList',
  props: {
    trees: {
      type: Array,
      required: true
    }
  },
  components: {
    Tree
  }
}
</script>
