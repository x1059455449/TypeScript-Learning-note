#!/usr/bin/env ts-node
console.log(process.argv)
let a:number  = parseInt(process.argv[2])
let b:number  = parseInt(process.argv[3])
// let a = process.argv[2]
// let b = process.argv[3]
if(Number.isNaN(a) || Number.isNaN(b)){
    console.log('只接受整数')
    process.exit()//强制退出
    //约定：process.exit(prams) prams只要非0，都视为非正常退出
}
console.log(a+b)