import Board from './Board.jsx'
import ScoreBoard from './ScoreBoard.jsx'

function App() {
  return (
    <>
      <h1>Minesweeper game</h1>
      <ScoreBoard />
      <div className="game-over hide">
        <h3>
          <span className="msg">VICTORY</span>
        </h3>
      </div>
      <Board />
      <footer>Adi Sabban</footer>
    </>
  )
}

export default App
