// class 类
// 定义属性前，应该先声明这个属性的类型，也可以同时设置默认值
// 定义类的同时，相当于定义了相同名称的接口

class WorldPerson{
  man:string = "man"
  woman:string = "woman"
  constructor(man:string,woman:string){
    this.man = man
    this.woman = woman
  }
  getPerson(){
    return this.man + this.woman
  }
}

let worldperson = new WorldPerson('man','woman')
console.log(worldperson.getPerson());

let worldObjPerson:WorldPerson = {
  man:'',
  woman:'',
  getPerson() {
    return worldObjPerson.man+"-----"+worldObjPerson.woman
  },
}

worldObjPerson.man = '理想'
worldObjPerson.woman = '小品'
console.log(worldObjPerson.getPerson());



