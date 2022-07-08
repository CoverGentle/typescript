// 任意类型
// any类型和unknown 顶级类型
// any修饰的可以变成任何类型
// let str:any = '123'
// str = 123
// str = []
// str = {}
// str = true

// 1.unknown 要比any类型更安全
// 2.unknown 类型不能去调用属性和方法

// let unknow:unknown = {a:123}
// unknow.a

// let unknow:unknown = {a:()=>{
//   console.log(123);
// }}
// unknow.a()

// 对unknown可赋值对象只有unknown和any类型

let str:unknown = '123' 
let str1:any = '234'
str1 = str