# 变量和接口

## 变量

[变量文档](https://www.tslang.cn/docs/handbook/basic-types.html)

> 数据类型

JS 七种类型(Boolean,Null,Undefined,Number,String,Symbol,Object) + 枚举 + any + void + never

[枚举https://www.tslang.cn/docs/handbook/enums.html](https://www.tslang.cn/docs/handbook/enums.html)

**主要注意枚举的默认值的使用**

默认情况下null和undefined是所有类型的子类型。 换言之，你可以把 null和undefined赋值给number类型的变量。

```js
enum Gender {
  Man = 'man',
  Woman = 'woman',
}

let gender: Gender = Gender.Man
console.log(gender);//man
gender = Gender.Woman;
console.log(gender);//woman
```

> 类型断言

```js
//断言someValue为string，以下两种写法等价
(<string>someValue).length;
(someValue as string).length;
```

> 类型转换

```js
let a: number = 123;
let b: string = a.toString();

let c: string = '123';
let d: number = parseFloat(c);

let s1: number = 2;
let b1: boolean = Boolean(s1);

let obj = { name: 'guang', age: 18 };
let string = JSON.stringify(obj);
console.log(typeof string);//String
console.log(string);

let string2 = `{"name": "guang", "age": 18}`;
let obj2 = JSON.parse(string2);
console.log(typeof obj2);//Object
console.log(obj2);
```

**注意：当在TypeScript里使用JSX时，只有as语法断言是被允许的。**

> 变量声明

```js
for (var i = 0; i < 10; i++) {
    setTimeout(function() { console.log(i); }, 100 * i);
}
//输出10个10
```

如果想要输出10，将var改成let 即可

**注意：const 常量只是值不可变，如果 const 常量的值是一个地址，那么地址对应的对象的内容是可变的。**

有以下代码：

```js
const G = {
    name:'guang'
}
b.name = 'GG'
console.log(b)//{name:"GG"}
```

原因是：const 常量存的是这个对象存放的地址，也就是说只想这个常量存的地址，而地址里面所对应的内容是可以修改的

> 解构与展开

```js
//对象解构
let obj = {
    name: 'frank',
    age: 18,
    nation: 'China',
  };

// let name = obj.name;
// let age = obj.age;
// let nation = obj.nation;

//解构
let { name, age, nation } = obj;

console.log(name, age, nation);
```

```js
//数组解构
let arr = ['apple', 'orange', 'pear'];
// let fruit1 = arr[0];
// let fruit2 = arr[1];
// let fruit3 = arr[2];
let [fruit1, fruit2, fruit3] = arr;
console.log(fruit1, fruit2, fruit3);
```

```js
function sayHi({ name, age }: any) {
    console.log(`Hi, ${name}, ${age}`);
}
sayHi({ name: 'guang', age: 18 });
```

## 接口

[接口文档](https://www.tslang.cn/docs/handbook/classes.html)

接口:用代码描述一个对象必须有什么属性（包括方法），但是有没有其他属性就不管了。

Interface:用代码描述一个对象只能有什么属性（包括方法）

```js
interface Human{
    name: string,
    age: number
}
```

## 参考资料

[英文文档](https://www.typescriptlang.org/docs/home.html)

[中文文档](https://www.tslang.cn/docs/handbook/basic-types.html)
