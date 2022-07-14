// 泛型

export{}

function fun(a:number|string):number|string{
  return a
}
fun(100)

function fun1<T,G>(a:T,b:G):T{
  return a
}

fun1<number|string,string>('100','1')

