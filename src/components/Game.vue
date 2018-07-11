<template>
  <div class="game-wrap">
    <div v-if="isGameRunning" class="game-board">
      <div class="row" v-for="row in BOARD_SIZE" :key="row">
        <div class="cell" v-for="cell in BOARD_SIZE" :key="cell">
          {{ getCellValue(row, cell) }}
        </div>
      </div>
    </div>
    <div v-if="hasWon">
      <div>You have won!</div>
      <div @click="resetGame">[reset]</div>
    </div>
    <div v-if="hasLost">
      <div>You have lost :(</div>
      <div @click="resetGame">[reset]</div>
    </div>
  </div>

</template>
<script>
  import {BOARD_SIZE} from '../const'
  import Board from '../classes/Board'

  export default {
    name: 'game',
    computed: {
      hasWon() {
        return this.board.hasWon
      },
      hasLost() {
        return this.board.hasLost
      },
      isGameRunning() {
        return !this.hasWon && !this.hasLost
      }
    },
    data() {
      return {
        board: new Board(),
        BOARD_SIZE: BOARD_SIZE
      }
    },
    methods: {
      onKeyUp(e) {
        console.log(e.keyCode)
        if (e.keyCode >= 37 && e.keyCode <= 40) {
          e.preventDefault()
          this.board.move(e.keyCode)
        }
      },
      getCellValue(row, cell) {
        row = row - 1
        cell = cell - 1
        let val = this.board.cells[(row * BOARD_SIZE) + cell]
        return val === 0 ? '' : val
      },
      resetGame() {
        this.board = new Board()
      }
    },
    created() {
    },
    mounted() {
      window.addEventListener('keyup', this.onKeyUp.bind(this))
    },
    destroyed() {
      window.removeEventListener('keyup', this.onKeyUp.bind(this))
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .game-wrap {
    display: flex;
    justify-content: center;
  }

  .game-board {
    border-radius: 4px;
    width: 360px;
    height: 360px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    background-color: #80CBC4;
  }

  .row {
    display: flex;
    flex: 1;
  }

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
