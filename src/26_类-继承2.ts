class Animal {
  name: string

  constructor(name: string) {
    this.name = name
  }

  move(distance: number) {
    console.log(`Animal : ${this.name} move ${distance}m`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance: number = 5) {
    console.log('嘶嘶')
    super.move(distance)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name)
  }

  move(distance: number = 10) {
    console.log('哒哒哒')
    super.move(distance)
  }
}

const s = new Snake('Sam')
const h = new Horse('Hor')

s.move()
h.move()
