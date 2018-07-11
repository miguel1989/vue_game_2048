<template>
  <div class="cell">
    {{ value }}
  </div>
</template>
<script>
  export default {
    name: 'Cell',
    props: {
      value: {
        type: String,
        required: true
      }
    }
  }
</script>
<style>
  .cell {
    margin: 4px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E0F2F1;
    border-radius: 4px;
    font-size: 42px;
  }
</style>
