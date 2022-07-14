export{}

interface DataItf{
  name:string,
  age:number,
  hobby:string
}

interface ProItf{
  code:number,
  data:DataItf[]   //{name:string,age:number,hobby:string}[]
  message:string
}
// promise的对象：p(对象名)：Promise<res的类型>
let p:Promise<ProItf> = new Promise((resolve,reject)=>{
  resolve({
    code:0,
    data:[{name:'小明',age:12,hobby:'篮球'}],
    message:'成功'
  })
})

p.then(res=>{
  console.log(res.data)
})