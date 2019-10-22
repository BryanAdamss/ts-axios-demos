function buildName(firstName: string, lastName: string): string {
  return firstName + lastName
}

buildName('Bob') // 参数过少
buildName('Bob', 'adam', 'h') // 参数过多
buildName('Bob', 'adam') // 正确

// ts中函数定义了几个入参就必须传入多少个；不能多，也不能少；除非使用可选参数
function buildName2(firstName: string, lastName?: string): string {
  return lastName ? firstName + lastName : lastName
}

buildName2('Bob') // 参数过少
buildName2('Bob', 'adam', 'h') // 其期待1至2个参数，超过2个，仍旧报错

// ts中可选参数必须排在必填参数后面
function buildName3(lastName?: string, firstName: string): string {
  return lastName ? firstName + lastName : lastName
}
