interface IOnClick {
  (this: void, e: Event): void
}

interface UIElement {
  addClickListener(onclick: IOnClick): void
}

class Handler {
  type: string
  onClickBad(this: Handler, e: Event) {
    this.type = e.type
  }
}

let h = new Handler()
let uiElement: UIElement = {
  addClickListener() {}
}
uiElement.addClickListener(h.onClickBad) // h.onClickBad在被调用时，this指向的是h，并非接口中定义的void，所以报错

// 改进方法，就是将onClickBad改造成箭头函数
class Handler2 {
  type: string
  onClickGood = (e: Event) => {
    this.type = e.type
  }
}

let h2 = new Handler2()
let uiElement2: UIElement = {
  addClickListener() {}
}
uiElement2.addClickListener(h2.onClickGood)
