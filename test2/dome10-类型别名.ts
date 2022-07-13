export{}
// 类型别名

type StrAndNum = string | number

let str:StrAndNum = '1'
str = 1

// 给对象别名类型
type ObjType = {a:string,b:number&2}  //不支持同名
let obj:ObjType = {
  a:'11',
  b: 2
}

// interface和type的区别
// 1.都可以用来自定义类型
// 2.类型别名支持联合和交叉类型定义
// 3.类型别名不支持重复定义，接口可以

interface A{
  name:string
  age:number
}

type InterType = A['name'|'age']
let sum:InterType = 12