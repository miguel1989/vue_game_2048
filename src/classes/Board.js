import {BOARD_SIZE, CELL_COUNT} from '../const'
const WINNER_VALUE = 16
export default class Board {
  constructor() {
    this.cells = []
    this.hasWon = false
    this.isChangedAfterMove = false

    this.initCells()
  }

  // 38 - up. 39 - right. 40 down. 37 - left
  move(keyCode) {
    if (this.hasWon) {
      return
    }
    this.isChangedAfterMove = false
    // do move
    switch (keyCode) {
      case 37:
        this.moveAllLeft()
        break
      case 38:
        this.moveAllUp()
        break
      case 39:
        this.moveAllRight()
        break
      case 40:
        this.moveAllDown()
        break
    }
    if (this.isChangedAfterMove) {
      this.placeRandomNumber()
    }
  }

  moveAllRight() {
    this._moveHorizontally(false)
  }

  moveAllLeft() {
    this._moveHorizontally()
  }

  _moveHorizontally(toLeft = true) {
    console.time('_moveHorizontally')
    for (let row = 0; row < BOARD_SIZE; row++) {
      let start = row * BOARD_SIZE
      let moveFunc = this.moveRowToRight
      if (toLeft) {
        moveFunc = this.moveRowToLeft
      }
      let rowArr = moveFunc.call(this, this.cells.slice(start, start + BOARD_SIZE))
      this.cells.splice(start, BOARD_SIZE, ...rowArr)
    }
    console.timeEnd('_moveHorizontally')
  }

  moveAllUp() {
    this._moveVertically()
  }

  moveAllDown() {
    this._moveVertically(false)
  }

  _moveVertically(isUp = true) {
    console.time('_moveVertically')
    for (let cell = 0; cell < BOARD_SIZE; cell++) {
      let tmpArr = []
      for (let row = 0; row < BOARD_SIZE; row++) {
        tmpArr.push(this.cells[(row * BOARD_SIZE) + cell])
      }
      let moveFunc = this.moveRowToRight
      if (isUp) {
        moveFunc = this.moveRowToLeft
      }
      tmpArr = moveFunc.call(this, tmpArr)
      for (let row = 0; row < BOARD_SIZE; row++) {
        this.cells.splice((row * BOARD_SIZE) + cell, 1, tmpArr[row])
      }
    }
    console.timeEnd('_moveVertically')
  }

  moveRowToRight(row) {
    return this.moveRowToLeft(row.reverse()).reverse()
  }

  moveRowToLeft(row) {
    let originalRow = [...row]
    let filteredRow = row.filter(num => num > 0)
    let resultRow = []
    for (let i = 0; i < BOARD_SIZE; i++) {
      let newVal = filteredRow.length ? filteredRow.shift() : 0
      if (filteredRow.length > 0 && filteredRow[0] === newVal) {
        newVal = filteredRow[0] + newVal
        filteredRow.shift()
      }
      resultRow.push(newVal)
      this.hasWon = this.hasWon || newVal === WINNER_VALUE
    }
    this.isChangedAfterMove = this.isChangedAfterMove || this._isRowChanged(originalRow, resultRow)
    return resultRow
  }

  _isRowChanged(originalRow, resultRow) {
    return JSON.stringify(originalRow) !== JSON.stringify(resultRow)
  }

  isFinished() {
    // for each cell check if it can be moved in 4 directions, check presence for '0' or the same value
  }

  // search for cell where the value still is 0 and store their indexes
  findEmptyCellIndex() {
    let indexes = []
    this.cells.forEach((val, idx) => {
      if (val === 0) {
        indexes.push(idx)
      }
    })
    let len = indexes.length
    if (len === 0) {
      return -1
    }
    if (len === 1) {
      return indexes[0]
    }
    return indexes[Math.floor(Math.random() * indexes.length)]
  }

  // place 2 or 4 in the empty cell
  placeRandomNumber() {
    let idx = this.findEmptyCellIndex()
    if (idx >= 0) {
      this.cells.splice(idx, 1, this.generateRandomNumber())
    }
  }

  generateRandomNumber() {
    let r = Math.random()
    if (r <= 0.5) {
      return 2
    }
    return 4
  }

  initCells() {
    for (let i = 0; i < CELL_COUNT; i++) {
      this.cells[i] = 0
    }
    this.placeRandomNumber()
  }
}
