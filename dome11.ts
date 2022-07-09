// 枚举类型

// 使用枚举 通过enum关键字定义我们的枚举

// 数字枚举
// 举例：需求 red => 0 green =>1 blue=>2
// javascript的常规写法

// const fn = (type)=>{
//   if(type == 'red'){
//     return 0
//   }
//   if(type == 'green'){
//     return 1
//   }
//   if(type == 'blue'){
//     return 2
//   }
// }

// 或

// let obj = {
//   red:0,
//   green:1,
//   blue:2
// }
 
// 枚举类型写法

// enum Color{
//   red,
//   green,
//   blue
// }

// console.log(Color.red,Color.green,Color.blue,);



// 增长枚举
// 当red赋值为1时，green和blue都会加1
// enum Color{
//   red = 1, 
//   green,
//   blue
// }

// console.log(Color.red,Color.green,Color.blue,);



// 字符串枚举

// enum Color{
//   red = 'red', 
//   green = 'green',
//   blue = 'blue'
// }
// console.log(Color.red,Color.green,Color.blue,);


// 接口枚举

// enum Person{
//   name='小明',
//   age=11
// }
// console.log(Person);

// interface Man{
//   name:Person.name
//   age:Person.age
// }
// let obj:Man = {
//   name:Person.name,
//   age:Person.age
// }

// console.log(obj);

// const枚举
// 使用了const 定义enum（枚举）
// 编译成js如下
// var code = 0;
// if (code === 0 /* Types.success */) {
// }

// 不适用cons定义，编译成js如下
// var Types;
// (function (Types) {
//     Types[Types["success"] = 0] = "success";
//     Types[Types["fail"] = 1] = "fail";
// })(Types || (Types = {}));
// var code = 0;
// if (code === Types.success) {
// }
// const enum Types{
//   success,
//   fail
// }
// let code:number = 0
// if (code === Types.success) {

// }

// 反向映射

// 它包含了正向映射（name==>value） 和反向映射（value==>name）
// 要注意的是 不会为字符串枚举成员生成反向映射

// enum Types{
//   success
// }

// let success:number = Types.success
// console.log(success);
// let key = Types[success]
// console.log(key);


