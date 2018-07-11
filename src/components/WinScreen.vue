<template>
  <div class="final-screen">
    <div>You have won!</div>
    <div @click="resetGame">[reset]</div>
  </div>
</template>
<script>
  export default {
    name: 'WinScreen',
    methods: {
      resetGame() {
        this.$emit('reset-game')
      }
    }
  }
</script>
<style>
</style>
