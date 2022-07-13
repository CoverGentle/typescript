export {}
// 交叉类型

// & 交叉类型
// 如果一个属性出现多次类型，需要都满足
let obj:{name:string,age:number}&{height:number} //& 都 必须有 name age height这三个属性

obj={
  name:'xiaom',
  age:11,
  height:1.8
}