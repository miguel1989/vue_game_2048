import Board from '@/classes/Board'

// http://www.chaijs.com/api/bdd/
describe('Board row logic', () => {
  let board = new Board()
  // beforeEach(() => {
  //   board
  // })
  it('should moveRowToLeft0', () => {
    let row = [0, 0, 0, 0]
    expect(board.moveRowToLeft(row)).to.deep.equal([0, 0, 0, 0])
  })
  it('should moveRowToLeft1', () => {
    let row = [0, 0, 0, 2]
    expect(board.moveRowToLeft(row)).to.deep.equal([2, 0, 0, 0])
  })
  it('should moveRowToLeft2', () => {
    let row = [0, 0, 2, 0]
    expect(board.moveRowToLeft(row)).to.deep.equal([2, 0, 0, 0])
  })
  it('should moveRowToLeft3', () => {
    let row = [0, 2, 0, 0]
    expect(board.moveRowToLeft(row)).to.deep.equal([2, 0, 0, 0])
  })
  it('should moveRowToLeft4', () => {
    let row = [2, 0, 0, 0]
    expect(board.moveRowToLeft(row)).to.deep.equal([2, 0, 0, 0])
  })
  it('should moveRowToLeft5', () => {
    let row = [2, 0, 0, 2]
    expect(board.moveRowToLeft(row)).to.deep.equal([4, 0, 0, 0])
  })
  it('should moveRowToLeft6', () => {
    let row = [2, 0, 2, 0]
    expect(board.moveRowToLeft(row)).to.deep.equal([4, 0, 0, 0])
  })
  it('should moveRowToLeft7', () => {
    let row = [2, 0, 2, 2]
    expect(board.moveRowToLeft(row)).to.deep.equal([4, 2, 0, 0])
  })
  it('should moveRowToLeft8', () => {
    let row = [8, 2, 4, 2]
    expect(board.moveRowToLeft(row)).to.deep.equal([8, 2, 4, 2]) // row stays the same
  })
  it('should moveRowToLeft9', () => {
    let row = [4, 2, 2, 0]
    expect(board.moveRowToLeft(row)).to.deep.equal([4, 4, 0, 0])
  })
  it('should moveRowToLeft10', () => {
    let row = [4, 4, 0, 0]
    expect(board.moveRowToLeft(row)).to.deep.equal([8, 0, 0, 0])
  })
  it('should moveRowToLeft11', () => {
    let row = [8, 2, 0, 2]
    expect(board.moveRowToLeft(row)).to.deep.equal([8, 4, 0, 0])
  })
  it('should moveRowToLeft12', () => {
    let row = [8, 4, 2, 2]
    expect(board.moveRowToLeft(row)).to.deep.equal([8, 4, 4, 0])
  })
  it('should moveRowToLeft13', () => {
    let row = [2, 2, 4, 2]
    expect(board.moveRowToLeft(row)).to.deep.equal([4, 4, 2, 0])
  })
  it('should moveRowToLeft14', () => {
    let row = [4, 2, 2, 4]
    expect(board.moveRowToLeft(row)).to.deep.equal([4, 4, 4, 0])
  })
  it('should moveRowToLeft15', () => {
    let row = [2, 2, 4, 4]
    expect(board.moveRowToLeft(row)).to.deep.equal([4, 8, 0, 0])
  })
  // ----------------------------------------------------------------------------------------------------
  it('should moveRowToRight0', () => {
    let row = [0, 0, 0, 0]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 0, 0, 0])
  })
  it('should moveRowToRight1', () => {
    let row = [0, 0, 0, 2]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 0, 0, 2])
  })
  it('should moveRowToRight2', () => {
    let row = [0, 0, 2, 0]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 0, 0, 2])
  })
  it('should moveRowToRight3', () => {
    let row = [0, 2, 0, 0]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 0, 0, 2])
  })
  it('should moveRowToRight4', () => {
    let row = [2, 0, 0, 0]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 0, 0, 2])
  })
  it('should moveRowToRight5', () => {
    let row = [2, 0, 0, 2]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 0, 0, 4])
  })
  it('should moveRowToRight6', () => {
    let row = [0, 0, 2, 2]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 0, 0, 4])
  })
  it('should moveRowToRight7', () => {
    let row = [0, 2, 0, 2]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 0, 0, 4])
  })
  it('should moveRowToRight8', () => {
    let row = [8, 2, 4, 2]
    expect(board.moveRowToRight(row)).to.deep.equal([8, 2, 4, 2]) // row stays the same
  })
  it('should moveRowToRight9', () => {
    let row = [0, 2, 2, 4]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 0, 4, 4])
  })
  it('should moveRowToRight10', () => {
    let row = [4, 2, 2, 4]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 4, 4, 4])
  })
  it('should moveRowToRight11', () => {
    let row = [2, 2, 2, 2]
    expect(board.moveRowToRight(row)).to.deep.equal([0, 0, 4, 4])
  })
})
