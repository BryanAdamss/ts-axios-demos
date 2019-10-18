// object类型代表对象类型

// 声明create方法签名
declare function create(o: object | null): void

create(null)
create({ name: 3 })

create(3)
create('str')
create(false)
