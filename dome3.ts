// 接口和对象类型

// 普通声明一个对象

// interface A{
//   name:string,
//   age:number
// }
// let obj:A = {
//   name:'小明',
//   age:12
// }
// console.log(obj);

// interface Person{
//   readonly name:string,  //   readonly 只读属性
//   age?:number    ///可选式操作符?(age可以声明也可以不声明)
//   cb():number   //在接口中添加函数
//   [propName:string]:any   //任意属性   //联合类型 |
// }
// let people:Person = {
//   name:'张三',
//   cb:():number=>{
//     return 123
//   }
// }
// console.log(people.cb());

// people.name = '123'  //   readonly 只读属性

//接口继承 extends

// interface A{
//   name:string
// }

// interface B extends A {
//   age:number
// }

// let obj:B = {
//   name:'李四',
//   age:11
// }
