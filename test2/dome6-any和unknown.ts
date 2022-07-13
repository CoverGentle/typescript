export{}

// 不推荐使用any,any绕过了类型校验

// let a:any = 1
// a = '1'
// a = [10]
// a = true
// a = {a:1}
// a.toFixed(2)  //绕过了类型校验

// unknown

let b:unknown
b = 1
b = '10'
b = [10]
// b.toFixed(2)  //报错 有做类型校验，除非上面写了number