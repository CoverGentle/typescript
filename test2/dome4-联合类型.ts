export{}
//  |  联合类型
let numString:number | string = 12
numString = '12'

// 1|'2' 在这里的定义是类型 常量表示numString2的值只能是1或者'2'
let numString2: 1|'2' = 1
numString2 = '2'
// numString2 = 2 //报错：不能将类型“2”分配给类型“1 | "2"”

// | 或 表示要么有a属性，要么有b属性 不能有其他属性
let obj:{a:1}|{b:'2'}
obj = {a:1}
obj = {a:1,b:'2'}
obj = {b:'2'}
// obj = {a:1,b:'2',c:true} //不能有其他属性


