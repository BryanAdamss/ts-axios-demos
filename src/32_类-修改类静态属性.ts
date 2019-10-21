class Person {
  static MaxAge = 100
}

// const person:Person=new Person() // 此处person:Person中是指明person的类型是Person

const personMaker: typeof Person = Person // personMaker:typeof Person是指明personMaker的类型是Person类的类型
// 拿到Person，我们就可以修改其静态属性
personMaker.MaxAge = 200

// 编译后的代码如下
// var Person = /** @class */ (function () {
//   function Person() {
//   }
//   Person.MaxAge = 100;
//   return Person;
// }());
// // const person:Person=new Person() // 此处person:Person中是指明person的类型是Person
// var personMaker = Person; // personMaker:typeof Person是指明personMaker的类型是Person类的类型
// // 拿到Person，我们就可以修改其静态属性
// personMaker.MaxAge = 200;
