// 数组类型

// 常规定义数组
// let arr1:number[] = [1,12,3,]  //数字类型的数组
// let arr2:string[] = ['1','2','3'] //字符串类型的数组
// let arr3:any[] = ['1',2,true]  //任意类型的数组
// let arr4:boolean[] = [false,true]  //boolean类型的数组

// 通过泛型来定义数组

// let arr:Array<number> = [1,2,3,4]

// 
// function Arr(...args:any):void{
//   console.log(arguments);
//   let arr:IArguments = arguments
  
// }
// Arr(2,3,4)

//通过接口来定义数组
// interface ArrNumber{
//   [index:number]:number
// }
// let arr:ArrNumber = [1,2,2,3,3]
// console.log(arr);
