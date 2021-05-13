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
    const movieId = this.selectedMovie.id
    console.log(movieId)
  }
}
</script>

<style>

</style>