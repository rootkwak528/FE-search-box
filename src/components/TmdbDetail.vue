<template>
  <div v-if="selectedMovie">
    {{ selectedMovie }}
  </div>
</template>

<script>
export default {
  name: 'TmdbDetail',
  props: {
    selectedMovie: [String, Object]
  },
  computed: {
    trailerUrl () {
      return ''
    }
  },
  updated () {
    console.log(this.selectedMovie)
  }
}
</script>

<style>

</style>