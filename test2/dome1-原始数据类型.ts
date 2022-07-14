// 原始数据

// let str = '123'  //根据初始赋值来推到数据类型
// const num = 1  //1就是num的数据类型，常量不能改变指向（不能被修改），所以他的值就是他的类型

// ts原始数据类型？  js基础数据类型：number string boolean undefined null symbol
// ts原始数据就是js基础数据类型
// let text:string = '123'
// let bool:boolean = false
// let sum:number = 123
// let und:undefined = undefined
// let nu:null = null
// let sy:symbol = Symbol('123')
// let vo:void = undefined

// void大多数用于函数方法里
// 无返回值函数
// function A():void{}
// function B():undefined{}  //报错
// function C():undefined{  //在ts函数没有写返回值，函数类型就是void
//   return undefined
// }


// Symbol的特点
// 1.Symbol时一个特殊类型
// let a = Symbol() //通过Symbol来创建一个Symbol实例
let b = Symbol('symbol')  //调用Symbol()函数时传入一个可选的字符串参数，相当于给你创建的Symbol实例一个描述信息

// 2.创建的每一个Symbol实例时唯一的，具有唯一性。
let n = Symbol()
let m = Symbol()
console.log(n === m); //false

// 3.



export {}
