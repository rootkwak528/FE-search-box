<template>
  <div>
    <input 
      type="text" 
      @input="onInputText" 
      @keyup.enter="onResetText"
    >
  </div>
</template>

<script>
export default {
  name: 'TmdbSearchBox',
  methods: {
    onInputText (event) {
      this.$emit('tmdb-text-input', event.target.value)
    },
    onResetText (event) {
      event.target.value = ''
    }
  }
}
</script>

<style>

</style>