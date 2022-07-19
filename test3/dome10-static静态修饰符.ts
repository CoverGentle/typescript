export{}

// static修饰符

class Person{
  name:string
  static title = "静态修饰符"  //静态属性/成员  是给类来使用的
  constructor(name:string){
    this.name = name
  }
  getName(){
    return this.name
  }
}

let p = new Person('name')
// p.title  //报错 属性“title”在类型“Person”上不存在。你的意思是改为访问静态成员“Person.title”吗?
console.log(Person.title);
