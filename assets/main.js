const store = require('./store.js')

// Create Empty Board
const board = {
  game: {
    id: 3,
    cells: ['', '', '', '', '', '', '', '', ''],
    over: false,
    player_x: {
      id: 1,
      email: 'and@and.com'
    },
    player_o: null
  }
}
// Create Current player
const currentPlayer = `${store.user.email}`
// Add currentPlayer to Board
// currentPlayer is player_x
// player_x play to the Board
// if player_x plays to the board player_o's return
// player_o play a move if move is not an a occupied space next players turn else still current users return
// if 3 in row player wins
// if all cells filled without 3 in a row its a tie
// display who has won
