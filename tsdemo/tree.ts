#!/usr/bin/env ts-node
function creatRepeat(n: number): string {
    return "--".repeat(n)
}

class PaPa {
    public children: PaPa[] = []//类型声明PaPa[]，初始值为[]
    constructor(public name: string) { }
    addChild(child: PaPa): void {
        this.children.push(child)
    }
    introduceFamily(n?: number): void {//n不确定是否存在
        n = n || 0;//n存在则n的值为n,否则为0
        console.log(`${creatRepeat(n)}${this.name}`);
        this.children.forEach(person => {
            person.introduceFamily(n + 1);//递归
        });
    }
}

const grandPa = new PaPa('G');
const person1 = new PaPa('G-1');
const person2 = new PaPa('G-2');
const child11 = new PaPa('G-1-1');
const child12 = new PaPa('G-1-2');
const child21 = new PaPa('G-2-1');
const child22 = new PaPa('G-2-2');

grandPa.addChild(person1);
grandPa.addChild(person2);

person1.addChild(child11);
person1.addChild(child12);
person2.addChild(child21);
person2.addChild(child22);

grandPa.introduceFamily();