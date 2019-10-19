interface SquareConfig {
  width?: number
  color?: string

  [propName: string]: any // 声明除width、color等已经明确定义了类型的属性以外的属性，其key必须为string类型，值为任意类型；若不加这个，下面的size会报错
}

const conf: SquareConfig = {
  width: 3,
  color: 'red',
  size: 100
}
