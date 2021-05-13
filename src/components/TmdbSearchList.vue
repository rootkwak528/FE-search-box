<template>
  <div>
    <TmdbSearchListItem
      v-for="(movie, idx) in movieList"
      :movie=movie
      :key=idx
    />
  </div>
</template>

<script>
import TmdbSearchListItem from '@/components/TmdbSearchListItem'
export default {
  name: 'TmdbSearchList',
  components: {
    TmdbSearchListItem
  },
  props: {
    movieList: [String, Array]
  },
}
</script>

<style>

</style>