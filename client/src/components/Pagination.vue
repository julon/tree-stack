<template lang="pug">
  .pagination
    button(@click="previous" :disabled="isFirstPage") Previous
    button(@click="next" :disabled="isLastPage") Next
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    value: {
      type: Number
    },
    maxPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    isFirstPage () {
      return this.value === 1
    },
    isLastPage () {
      return this.value === this.maxPage
    }
  },
  methods: {
    previous () {
      this.updateValue(this.value - 1)
    },
    next () {
      this.updateValue(this.value + 1)
    },
    updateValue (value) {
      this.$emit('input', value)
    }
  }
}
</script>
