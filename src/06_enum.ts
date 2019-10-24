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

// 常量枚举
// 使用常量枚举能获得一定的性能提升

// 普通枚举
enum Tristate {
  False,
  True,
  Unknown
}

const lie = Tristate.False
// 其编译后为
// var Tristate;
// (function (Tristate) {
//     Tristate[Tristate["False"] = 0] = "False";
//     Tristate[Tristate["True"] = 1] = "True";
//     Tristate[Tristate["Unknown"] = 2] = "Unknown";
// })(Tristate || (Tristate = {}));
// var lie = Tristate.False;

// 而使用常量枚举后
const enum Tristate2 {
  False,
  True,
  Unknown
}

const lie2 = Tristate2.False

// 其编译后，不携带Tristate2
// 因为其知道Tristate2不会再改变，所以可以在编译时固话下来
// var lie2 = 0 /* False */;
