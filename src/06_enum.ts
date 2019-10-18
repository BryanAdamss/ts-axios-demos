// 枚举类型Enum
// 枚举内部索引从0开始，下面其实Color.Red===0 Color[0]==='Red'
enum Color {
  Red,
  Green,
  Blue
}

const c: Color = Color.Green
const c1: string = Color[1]
console.log(c, c1) // 1 Green

// 枚举内部索引可自定义
enum Color2 {
  Red = 2,
  Green = 4,
  Blue = 5
}

const c3: Color2 = Color2.Green
console.log(c3) // 4

// Color枚举其实被编译成下面形式
// var Color;
// (function (Color) {
//     Color[Color["Red"] = 0] = "Red";
//     Color[Color["Green"] = 1] = "Green";
//     Color[Color["Blue"] = 2] = "Blue";
// })(Color || (Color = {}));
