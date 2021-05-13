<template>
  <div v-if="selectedMovie">
    <iframe
      v-if="selectedMovie.trailerUrl"
      :src="selectedMovie.trailerUrl"
      style="height:540px; width:960px;"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <img
      v-else-if="poster_path"
      :src="poster_path"
    >
    
    <h2>{{ selectedMovie.title }} ({{ release_data }})</h2>
    <p v-if="selectedMovie.overview">{{ selectedMovie.overview }}</p>
    <p v-else>줄거리가 없습니다</p>
  </div>
</template>

<script>
export default {
  name: 'TmdbDetail',
  props: {
    selectedMovie: [String, Object]
  },
  computed: {
    poster_path () {
      if (this.selectedMovie.poster_path) {
        return `https://www.themoviedb.org/t/p/w300${this.selectedMovie.poster_path}`
      } else {
        return ''
      }
    },
    release_data () {
      return this.selectedMovie.release_date.slice(0, 4)
    }
  }
}
</script>

<style>

</style>