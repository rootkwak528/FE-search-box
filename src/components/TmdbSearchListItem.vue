<template>
  <li>
    <img :src="`https://www.themoviedb.org/t/p/w92${movie.poster_path}`" alt="movie_poster">
    {{ movie.title }}
  </li>
</template>

<script>
export default {
  name: 'TmdbSearchListItem',
  props: {
    movie: Object
  }
}
</script>

<style>

</style>