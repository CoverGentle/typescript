export{}
interface PITF{
  name:string;
  age:number;
  height?:number
}

// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
/*
    解析


    keyof T      name | age
    name?:string|undefined
    age?:number|undefined
*/ 


// Partial 部分的
// 作用：把<>里面的接口类型的属性设置为可缺省的属性
let obj:Partial<PITF> = {
  name:'张三',
}
/**
 * type Required<T> = { [P in keyof T]-?: T[P]; }
 * -?  抵消 去掉这个?
 * 
 * */ 
let obj2:Required<PITF> = {
  name:'李四',
  age:11,
  height:11
}



