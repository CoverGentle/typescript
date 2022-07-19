// 泛型（类型别名和接口）


// 类型别名泛型
// type objType<T,G> = {name:T,getName:()=>G}
// type numAndStr = string|number
// let obj:objType<numAndStr,numAndStr> = {
//   name:1,
//   getName(){
//     return this.name
//   }
// }
// let fn = obj.getName()
// console.log(fn);


// 接口   接口泛型写法

// interface Person{
//   age:number,
//   getAge:()=>number
// }

// let objAge:Person = {
//   age:1,
//   getAge() {
//     return this.age
//   },
// }
// console.log(objAge.getAge());

//可以设置默认的参数类型
interface Person<T,G=number>{
  age:T,
  getAge:()=>G
}

let objPerson:Person<number> = {
  age:1,
  getAge() {
    return objPerson.age
  },
}
console.log(objPerson.getAge());

