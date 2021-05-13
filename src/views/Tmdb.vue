<template>
  <div>
    <TmdbDetail
      :selectedMovie="selectedMovie"
    />
    <TmdbSearchBox
      @tmdb-text-input="onTmdbTextInput"
    />
    <TmdbSearchList
      :movieList="movieList"
      @on-click-item="onClickItem"
    />
  </div>
</template>

<script>
import axios from 'axios'

import TmdbDetail from '@/components/TmdbDetail'
import TmdbSearchBox from '@/components/TmdbSearchBox'
import TmdbSearchList from '@/components/TmdbSearchList'

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
  name: 'Tmdb',
  data () {
    return {
      selectedMovie: '',
      searchText: '',
      movieList: ''
    }
  },
  components: {
    TmdbDetail,
    TmdbSearchBox,
    TmdbSearchList
  },
  methods: {
    onTmdbTextInput (textInput) {
      const params = {
        region: 'KR',
        language: 'ko',
        query: textInput
      }
      
      this.searchTMDB('search', 'movie', params)
      .then( res => {
        this.movieList = res.data.results
      })
      .catch( err => {
        console.log(err)
      })
    },
    onClickItem (movie) {
      this.selectedMovie = movie
    },
    async searchTMDB (category, feature, params) {
      // url 확인
      let url = `${API_URL}/${category}/${feature}?api_key=${API_KEY}`
      for (const key in params) {
        url += `&${key}=${params[key]}`
      }

      // TMDB API request
      const res = await axios({
        method: 'get',
        url
      })
      return res
    }
  }
}
</script>

<style>

</style>