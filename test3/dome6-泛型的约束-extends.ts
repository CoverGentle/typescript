// export {}
type womanG = number | string
interface Woman<T extends string | number,G>{
  name:T, //需求：T只接受字符串和数字类型
  getName:()=>G
}

let Woman:Woman<number,womanG> = {
  name:2,
  getName:()=>{
    return Woman.name
  }
}