/* eslint-disable */
// Returns (column, row) format
const colRow = location => {
  const format = [
    [1, 1],
    [2, 1],
    [3, 1],
    [1, 2],
    [2, 2],
    [3, 2],
    [1, 3],
    [2, 3],
    [3, 3],
  ]

  return format[location]
}

export default colRow;
