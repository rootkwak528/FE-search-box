<template>
  <li @click="onClickItem">
    <img :src="`https://www.themoviedb.org/t/p/w92${movie.poster_path}`" alt="movie_poster">
    {{ movie.title }}
  </li>
</template>

<script>
export default {
  name: 'TmdbSearchListItem',
  props: {
    movie: Object
  },
  methods: {
    onClickItem (event) {
      console.log(event.target)
    }
  }
}
</script>

<style>

</style>