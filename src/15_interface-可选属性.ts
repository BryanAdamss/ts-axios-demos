interface Square {
  color: string
  area: number
}

interface SquareConfig {
  color?: string // 可选
  width?: number // 可选
}

function createSquare(config: SquareConfig): Square {
  let newSquare: Square = { color: 'red', area: 100 }

  if (config.color) newSquare.color = config.color
  if (config.width) newSquare.area = config.width * config.width

  return newSquare
}

const s: Square = createSquare({ color: 'blue' })
console.log(s)
