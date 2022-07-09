// 类型推论|类型别名

// 类型推论

let num = 123  //系统推断出num是一个number类型

// 类型别名

type s = string
// type s = string |number  //也可以联合类型
let text:s = '123'

// 函数类型别名

type cb = () =>string
const fn:cb = ()=>{
  return '123'
}

// 自变量类型别名

type T = 'off' | 'on'
let isNum:T = 'off'   //只能是 off和on