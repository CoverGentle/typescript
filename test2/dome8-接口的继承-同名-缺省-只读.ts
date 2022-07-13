export{}
// 继承

interface NameItf{
  name:string
}
interface AgeItf{
  age:number
}
// 接口继承的格式，特点是，具有父接口属性类型
interface Person extends NameItf,AgeItf{
  height:number
}
let man:Person={
  name:'xm',
  age:11,
  height:1.8
}

// 同名
// 接口可以同名，特点是合并了所有的属性类型
interface People{
  boy:string
}
interface People{
  girl:string
}

let obj:People = {
  boy:'man',
  girl:'woman'
}

// 缺省  ? 
interface Animal{
  aboy:string
}
interface Animal{
  agirl?:string  //加了?变量在赋值时可有可无
}
let aobj:Animal = {
  aboy:'man'
}

// 只读 readonly

interface Fruit{
 readonly apple:string
}
interface Animal{
  banana?:string 
}
let fobj:Fruit = {
  apple:'苹果'
}
// fobj.apple = '加苹果'  //报错  加了readonly(只读)表示这个属性只允许读取 修改就报错 