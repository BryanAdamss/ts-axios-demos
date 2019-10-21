class Gretter {
  greeting: string

  constructor(msg: string) {
    this.greeting = msg
  }

  greet() {
    return `Hello ${this.greeting}`
  }
}

const greeter: Gretter = new Gretter('Ts')
greeter.greet()
