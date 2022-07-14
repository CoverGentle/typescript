export{}  //加了export{}文件就不是全局

//在全局上，给window接口扩展属性
// 需要写道全局文件上
// interface Window{
//   fun:(str:string)=>void,  
//   myName:string
// }

// function fun(this:Window,name:string){
//   this.myName = name
//   console.log(this);
//   console.log(name);
// }
// window.fun = fun
// window.fun('')
