// 类型断言 | 联合类型 | 交叉类型

// 联合类型
// let phone:number = 12312121
// let phone:number | string = '12312121'   

// let fun = function(type:number | boolean):boolean{
//   return !!type
// }
// console.log(fun(false));
// console.log(fun(1));

// 交叉类型
// interface People{
//   name:string,
//   age:number
// }
// interface Man{
//   sex:number
// }

// function Person(person:Man & People){
//   console.log(person);
// }
// Person({
//   name:'小钱',
//   age:28,
//   sex:1
// })

//类型断言
// let fun = function(num:number | string):void{
//   console.log((num as string).length);
// }

// let fun = function(num:number | string):void{
//   console.log((<string>num).length);
// }

