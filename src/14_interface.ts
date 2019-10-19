// ts中的interface和传统oop语言中的interface概念不同
// ts中的interface主要用来描述外形，并不像oop语言中，需要被实现

interface labelValue {
  label: string
}

function printLabel(obj: labelValue) {
  console.log(obj.label)
}

printLabel({ label: 'i am a label' })
