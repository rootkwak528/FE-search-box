<template>
  <div>
    <TmdbSearchBox
      @tmdb-text-input="onTmdbTextInput"
    />
  </div>
</template>

<script>
import axios from 'axios'

import TmdbSearchBox from '@/components/TmdbSearchBox'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: 'Tmdb',
  data () {
    return {
      searchText: ''
    }
  },
  components: {
    TmdbSearchBox
  },
  methods: {
    getUrl (category='movie', feature='', kwargs) {
      let url = `${API_URL}/${category}/${feature}?api_key=${API_KEY}`
      for (const key in kwargs) {
        url += `&${key}=${kwargs[key]}`
      }

      return url
    },
    onTmdbTextInput (textInput) {
      this.searchTmdb(textInput)
    },
    searchTmdb (searchKeyword) {
      const params = {
        region: 'KR',
        language: 'ko',
        query: searchKeyword
      }
      const url = this.getUrl('search', 'movie', params)

      axios({
        method: 'get',
        url
      })
      .then((res) => {
        console.log(res)
      })
    }
  }
}
</script>

<style>

</style>