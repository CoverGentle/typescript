export{}
// ts函数

// 常规函数
// function fn(a:number,b:number):number{
//   return a+b
// }
// let sum = fn(1,2)
// console.log(sum);

// 接口定义函数

// interface FnItf{
//   (name:string,age:string)
// }

// let fn:FnItf = (name:string,age:string)=>{
//   return '111'
// }
// fn('','')

// 类型别名定义函数类型

// type FnType = (p:number)=>void  //无返回值
// let fn:FnType = (p:number)=>{

// }
// fn(1)

// 当函数作为对象的时候,用接口去定义的方法

// interface StrItf{
//   (name:string):string
// }
// interface ObjItf{
//   fn:StrItf
// }

// let obj:ObjItf = {
//   fn: (str:string) => {
//     return str
//   }
// }
// console.log(obj.fn('小明'));

// 类型别名定义对象

// type FnType = {fun:(str:string)=>string}
// let objType:FnType = {
//   fun:(str)=>{
//     return str
//   }
// }
// objType.fun('小红')
// console.log(objType.fun('小红'));


