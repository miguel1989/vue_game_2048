<template>
  <div class="cell" :class="classObj">
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
    },
    computed: {
      classObj() {
        let classObj = {}
        classObj['val_' + this.value] = true
        return classObj
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
  .val_2 {
    background-color: #F9FBE7;
  }
  .val_4 {
    background-color: #F0F4C3;
  }
  .val_8 {
    background-color: #E6EE9C;
  }
  .val_16 {
    background-color: #DCE775;
  }
  .val_32 {
    background-color: #D4E157;
  }
  .val_64 {
    background-color: #FFE0B2;
  }
  .val_128 {
    background-color: #FFCC80;
  }
  .val_256 {
    background-color: #FFB74D;
  }
  .val_512 {
    background-color: #FFA726;
  }
  .val_1024 {
    background-color: #F4511E;
  }
  .val_2048 {
    background-color: #E64A19;
  }

  @keyframes new-tile {
    from {
      transform: scale(0);
    }

    to {
      transform: scale(1);
    }
  }

  .cell.new {
    animation-duration: 0.4s;
    animation-name: new-tile;
    animation-fill-mode: forwards;
    /*animation-delay: 0.15s;*/
    transform: scale(0);
  }
</style>
