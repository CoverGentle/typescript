// Class类

// 定义一个类

// class Person{
//   name:string
//   age:number
//   sub:boolean
//   constructor(name:string,age:number,sub:boolean){
//     this.name = name
//     this.age = age
//     this.sub = sub
//   }
// }
// new Person('小钱',18,true)

// 类的修饰符
// 总共有三个 public private protected

// class Person{
//   public name:string="小明"
//   private age:number
//   protected sub:boolean
//   static hobby:string = '篮球'
//   constructor(name:string,age:number,sub:boolean){
//     this.name = name
//     this.age = age
//     this.sub = sub
//   }
//   // 静态类中不能通过this访问上面的变量 能访问static修饰的
//   static run(){
//     // console.log(this.name);  //不能访问其他变量 返回Person类名
//     console.log(this.hobby);  //能访问static修饰的
//     return '羽毛球'
//   }
// }

// class man extends Person{
//   constructor(){
//     super('小钱',18,true)
//     this.sub     //protected修饰的变量 子类可以访问的到
//   }
// }

// let person =  new Person('小钱',18,true)
// console.log(person.name);  //public修饰的变量 外部内部都可以访问
// // console.log(person.age); //private修饰的变量 只有内部可以访问的到
// // console.log(person.sub); //protected修饰的变量 子类可以访问的到 外部不可以访问

// console.log(Person.hobby);
// console.log(Person.run());

// 通过interface（接口）约束class类
// interface animal{
//   run(type:boolean):boolean
// }
// interface Botany{
//   set():void
// }

// class monkey implements animal,Botany {
//   run(type: boolean): boolean {
//     return type
//   }
//   set(): void {
    
//   }
// }





