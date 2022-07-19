// 类的继承

export{}
class Person{
  name:string
  constructor(name:string){
    this.name = name
  }
  getName(){
    return this.name
  }
}

class Man extends Person{
  age:number
  constructor(name:string,age:number){
    super(name)  //调用回父类，并把参数chuan进去
    this.age = age
  }
  getName(){ //与父类的方法名相同，既重写
    return "我叫："+this.name+","+"今年"+this.age+'岁'
  }
}

let m = new Man('张三',12)
console.log(m.name+"-----"+m.age);
console.log(m.getName());
