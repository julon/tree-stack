<template lang="pug">
.tree
  .name {{ name }}
</template>

<script>
export default {
  name: 'Tree',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
