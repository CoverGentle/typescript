// 函数扩展

//接口约束

interface User{
  name:string,
  age:number
}
let fun = function (user:User):User{
  return user
}

// const person = fun({
//   name:'张三',
//   age:12
// })

// console.log(person);

// 函数重载
// function fun(params:number):void
// function fun(params:string,params2:number):void
// function fun(params:any,params2?:any):void{
//   console.log(params);
//   console.log(params2);
// }
// let a = fun(1)

