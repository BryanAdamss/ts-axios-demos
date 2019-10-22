// ts提供一种方法指定this的类型，即this参数

interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  // b:同步制定Deck类型的createPicker 的this参数为Deck
  createPicker(this: Deck, x: number): () => Card
}

const deck: Deck = {
  suits: ['a', 'b', 'c', 'd'],
  cards: Array(52),
  // a:指定this的类型为Deck，即createPicker期望在某个Deck类型对象上被调用；
  // !this参数在编译后将不存在，this参数后可继续添加其他正常参数
  createPicker(this: Deck, x: number) {
    // 利用箭头函数固化this指向
    return () => {
      let c = Math.floor(Math.random() * 52)
      let s = Math.floor(c / 13)
      return {
        // 光用箭头函数，虽可以解决this指向问题，但是this的type仍然时any(鼠标悬停到下方的this上)
        // 此时需要显示指定createPicker的this类型；按a->b步骤重写
        suit: this.suits[s],
        card: c % 13
      }
    }
  }
}

const p = deck.createPicker(3)
const c = p()
console.log(c)
