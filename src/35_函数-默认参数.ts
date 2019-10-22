// 类似es6，可以给函数参数添加默认值

// y === undefined 时，默认为10
function add(x: number, y: number = 10): number {
  return x + y
}

add(1) // 11
add(1, 2) // 3
