export {}
// 联合交叉类型
// & |
// &优先于|

let obj:{name:number} & {age:number} | {name:string} & {age:string}
obj = {
  name:11,
  age:12
}

obj = {
  name:'12',
  age:'13'
}