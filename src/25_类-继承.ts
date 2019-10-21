class Animal {
  move(distance: number = 0) {
    console.log(`Animal move ${distance}m`)
  }
}

class Dog extends Animal {
  bark() {
    console.log('汪汪')
  }
}

const dog = new Dog()
dog.bark()
dog.move(10)
