export{}
function fun1(a:number,b:number):number{
  return a+b
}
fun1(1,2)

function fun2(a:number,b?:number):number{
  return 1
}
fun2(1)

function fun3(a:number,b:number,...arr:number[]){
  console.log(a,b);
  console.log(arr);
  
}
fun3(1,2,3,4,5,3,2)


