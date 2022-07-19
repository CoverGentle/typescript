export{}

// 抽象类

// 抽象类是普通类的描述，指定一个类的范围，给普通的类去继承
// 继承之后，普通类里面就必须定义抽象属性和抽象方法，抽象类里面的普通方法直接继承，在普通类里面可以不用实现
// 抽象类不能被实例化

// abstract class People{
//   abstract sex:string
//   abstract getSex():string
//   getHieght(){
//     return 11
//   }
// }

// class Person extends People{
//   sex: string = '男'
//   getSex(){
//     return 'Person'
//   }
// }
// let p = new Person()
// console.log(p.sex);
// console.log(p.getSex());


// 接口
// 书写接口给类使用
// 
interface Person{
  name:string
  age:number
  getName:()=>void
}

class Male implements Person{
  name: string
  age:number
  getName(){
    
  }
}
