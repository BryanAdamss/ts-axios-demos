// 元祖Tuple(已知类型和数量的数组，其内部元素类型不要求一致)
const tuple: [string, number] = ['str', 3] // 定义一个元祖，其首个元素是string类型，第二个是number类型

// 当添加越界的元素时，它的类型会被限制为元组中每个类型的联合类型
let tom: [string, number]
tom = ['Tom', 25]
tom.push('male')
tom.push(true)

// ! ts v3.1版本过后，在编译时访问元祖的越界元素会报错
