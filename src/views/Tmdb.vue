<template>
  <div>
    <TmdbDetail/>
    <TmdbSearchBox
      @tmdb-text-input="onTmdbTextInput"
    />
    <TmdbSearchList
      :movieList="movieList"
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
      this.searchTmdb(textInput)
    },
    getUrl (category='movie', feature='', kwargs) {
      // TMDB API에 요청할 url를 반환하는 메서드
      let url = `${API_URL}/${category}/${feature}?api_key=${API_KEY}`
      for (const key in kwargs) {
        url += `&${key}=${kwargs[key]}`
      }

      return url
    },
    searchTmdb (searchKeyword) {
      const params = {
        region: 'KR',
        language: 'ko',
        query: searchKeyword
      }
      const url = this.getUrl('search', 'movie', params)

      // TMDB API 요청
      axios({
        method: 'get',
        url
      })
      .then((res) => {
        this.movieList = res.data.results
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>

</style>