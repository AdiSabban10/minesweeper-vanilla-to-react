function Cell({ row, col }) {
  return <td className={`cell cell-${row}-${col}`} />
}

export default Cell
