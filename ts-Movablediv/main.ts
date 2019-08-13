// var a:string = 'hi';
// console.log('hi')
// console.log(a)

var div = document.createElement('div')
div.style.border = '1px solid red';
div.style.height = '100px';
div.style.width = '100px';
div.style.top = 'auto';
div.id = 'demo'

document.body.appendChild(div)

var x = false
var position = [0,0]

div.onmousedown = (e) => {
    x = true
    position = [e.clientX,e.clientY]//记录开始位置坐标
}

document.onmousemove = (e) => {
    console.log(e.clientX,e.clientY)
    if(x = true){
        var detalX = e.clientX - position[0]//shuzi 
        var detalY = e.clientY - position[1]//shuzi
        var top = parseInt(div.style.top!) || 0//使用严格模式后此处报错，因为不确定top是否为空
        //解决方式有两种：第一种加感叹号，表示该值并不会为空parseInt(div.style.top!)
        //第二种 ||0 前面即使是NAN，我也把当0来处理，当然第一种方式也要写这个，用来邦正传进来的值是数字
        var left = parseInt(div.style.left!) || 0
        // div.style.top = e.clientY + 'px'//使用+=不会报错，这是JS本身的缺陷所致
        // div.style.left = e.clientX + 'px'
        div.style.top = top + detalY + 'px'
        div.style.left = left + detalX + 'px'
        console.log(top + detalX + 'px')
        //div.style.top的值有时会是'auto',parseInt(div.style.top)的值就会变成NAN
        //这是因为没有使用TS的严格模式，所以可以新建一个tsconfig.json文件，在里面进行配置
        //搜索tsconfig example 
        //https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
        position = [e.clientX,e.clientY] //当前位置，移动之后新的位置就成了旧的位置
    }
    
}

document.onmouseup = (e) => {
    x = false
}




