<template>
  <div class="game-wrap">
    <div class="game-board">
      <div class="row" v-for="row in BOARD_SIZE" :key="row">
        <Cell v-for="cell in BOARD_SIZE" :key="cell" :value="getCellValue(row, cell)"/>
      </div>
    </div>
    <WinScreen v-if="hasWon" @reset-game="resetGame"/>
    <LostScreen v-if="hasLost" @reset-game="resetGame"/>
  </div>

</template>
<script>
  import {BOARD_SIZE} from '../const'
  import Board from '../classes/Board'
  import Cell from './Cell'
  import WinScreen from './WinScreen'
  import LostScreen from './LostScreen'

  export default {
    name: 'Game',
    components: {
      Cell,
      WinScreen,
      LostScreen
    },
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
        if (e.keyCode >= 37 && e.keyCode <= 40) {
          e.preventDefault()
          this.board.move(e.keyCode)
        }
      },
      getCellValue(row, cell) {
        row = row - 1
        cell = cell - 1
        let val = this.board.cells[(row * BOARD_SIZE) + cell]
        return val === 0 ? '' : val.toString()
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
