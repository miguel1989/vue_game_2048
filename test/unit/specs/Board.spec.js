import Board from '@/classes/Board'

// http://www.chaijs.com/api/bdd/
describe('Board main logic', () => {
  let board
  beforeEach(() => {
    board = new Board()
  })
  it('should moveAllLeft', () => {
    let row1 = [8, 2, 4, 2]
    let row2 = [4, 2, 2, 0]
    let row3 = [16, 16, 16, 16]
    let row4 = [4, 0, 4, 0]
    board.cells = row1.concat(row2, row3, row4)
    let expectedRow1 = [8, 2, 4, 2]
    let expectedRow2 = [4, 4, 0, 0]
    let expectedRow3 = [32, 32, 0, 0]
    let expectedRow4 = [8, 0, 0, 0]
    let expectedCells = expectedRow1.concat(expectedRow2, expectedRow3, expectedRow4)
    board.moveAllLeft()
    expect(board.cells).to.deep.equal(expectedCells)
  })
  it('should moveAllRight', () => {
    let row1 = [8, 2, 4, 2]
    let row2 = [4, 2, 2, 0]
    let row3 = [16, 16, 16, 16]
    let row4 = [4, 0, 4, 0]
    board.cells = row1.concat(row2, row3, row4)
    let expectedRow1 = [8, 2, 4, 2]
    let expectedRow2 = [0, 0, 4, 4]
    let expectedRow3 = [0, 0, 32, 32]
    let expectedRow4 = [0, 0, 0, 8]
    let expectedCells = expectedRow1.concat(expectedRow2, expectedRow3, expectedRow4)
    board.moveAllRight()
    expect(board.cells).to.deep.equal(expectedCells)
  })
  it('should moveAllUp', () => {
    let row1 = [8, 4, 16, 4]
    let row2 = [2, 2, 16, 0]
    let row3 = [4, 2, 16, 4]
    let row4 = [2, 0, 16, 0]
    board.cells = row1.concat(row2, row3, row4)
    let expectedRow1 = [8, 4, 32, 8]
    let expectedRow2 = [2, 4, 32, 0]
    let expectedRow3 = [4, 0, 0, 0]
    let expectedRow4 = [2, 0, 0, 0]
    let expectedCells = expectedRow1.concat(expectedRow2, expectedRow3, expectedRow4)
    board.moveAllUp()
    expect(board.cells).to.deep.equal(expectedCells)
  })
  it('should moveAllDown', () => {
    let row1 = [8, 4, 16, 4]
    let row2 = [2, 2, 16, 0]
    let row3 = [4, 2, 16, 4]
    let row4 = [2, 0, 16, 0]
    board.cells = row1.concat(row2, row3, row4)
    let expectedRow1 = [8, 0, 0, 0]
    let expectedRow2 = [2, 0, 0, 0]
    let expectedRow3 = [4, 4, 32, 0]
    let expectedRow4 = [2, 4, 32, 8]
    let expectedCells = expectedRow1.concat(expectedRow2, expectedRow3, expectedRow4)
    board.moveAllDown()
    expect(board.cells).to.deep.equal(expectedCells)
  })
  it('should not findEmptyCellIndex when there is no place', () => {
    let row1 = [8, 2, 4, 2]
    let row2 = [4, 2, 2, 2]
    let row3 = [16, 16, 16, 16]
    let row4 = [4, 2, 4, 2]
    board.cells = row1.concat(row2, row3, row4)
    expect(board.findEmptyCellIndex()).to.equal(-1)
  })
  it('should findEmptyCellIndex when there is 1 place', () => {
    let row1 = [8, 2, 2, 0]
    let row2 = [4, 2, 2, 2]
    let row3 = [16, 16, 16, 16]
    let row4 = [4, 2, 4, 2]
    board.cells = row1.concat(row2, row3, row4)
    expect(board.findEmptyCellIndex()).to.equal(3)
  })
  it('should findEmptyCellIndex when there is many places', () => {
    let row1 = [8, 2, 2, 0]
    let row2 = [4, 0, 2, 2]
    let row3 = [16, 16, 0, 16]
    let row4 = [4, 2, 0, 2]
    board.cells = row1.concat(row2, row3, row4)
    expect(board.findEmptyCellIndex()).to.be.oneOf([3, 5, 10, 14])
  })
})
