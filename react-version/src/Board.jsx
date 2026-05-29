import Cell from './Cell.jsx'

const GRID_SIZE = 4

function Board() {
  return (
    <div className="board-container">
      <table>
        <tbody>
          {Array.from({ length: GRID_SIZE }, (_, row) => (
            <tr key={row}>
              {Array.from({ length: GRID_SIZE }, (_, col) => (
                <Cell key={`${row}-${col}`} row={row} col={col} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Board
