function ScoreBoard() {
  return (
    <div>
      Game Level:
      <button type="button" className="btn level">
        Beginner
      </button>
      <button type="button" className="btn level">
        Medium
      </button>
      <button type="button" className="btn level">
        Expert
      </button>
      <br />
      Mines: <span className="mines">0</span>
      | Time: <span className="time">0</span>
      <br />
      Lives: <span className="lives"></span>
      | Hints: <span className="hints"></span>
      <br />
      <button type="button" className="btn">
        Mega Hint
      </button>
      <button type="button" className="btn">
        Safe Click- <span className="safe-click">3</span>
      </button>
      <button type="button" className="btn">
        UNDO
      </button>
      <button type="button" className="btn">
        Dark-Mode
      </button>
      <br />
      <button type="button" className="smiley">
        😀
      </button>
    </div>
  )
}

export default ScoreBoard
