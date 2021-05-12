<template>
  <div>
    <TmdbSearchBox
      @tmdb-text-input="onTmdbTextInput"
    />
  </div>
</template>

<script>
import TmdbSearchBox from '@/components/TmdbSearchBox'

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
    onTmdbTextInput (textInput) {
      console.log(textInput)
    },
  }
}
</script>

<style>

</style>