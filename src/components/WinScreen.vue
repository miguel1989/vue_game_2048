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
  .final-screen {
    width: 360px;
    height: 360px;
    position: absolute;
    background-color: white;
    opacity: 0.5;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
