<template>
  <div class="final-screen">
    <div>You have lost :(</div>
    <div @click="resetGame">[reset]</div>
  </div>
</template>
<script>
  export default {
    name: 'LostScreen',
    methods: {
      resetGame() {
        this.$emit('reset-game')
      }
    }
  }
</script>
<style>
</style>
