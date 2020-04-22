# 最简单的命令行程序

1.ts

    #!/usr/bin/env ts-node
    console.log('hello world')

然后给该文件添加执行权限：`chmod +x ./1.ts （Windows 用户不需要做这个，直接在 Git Bash 输入 ./1.ts 即可运行）

执行 ./1.ts，就会看到 hello world

## 接受命令行参数

add.ts

    #!/usr/bin/env ts-node
    console.log(process.argv)

如果没有配置好 TS，那么运行 ./2.ts 上面代码会出现如下报错：

    /usr/local/lib/node_modules/ts-node/src/index.ts:261
        return new TSError(diagnosticText, diagnosticCodes)      ^
    TSError: ⨯ Unable to compile TypeScript:
    add.ts(2,13): error TS2304: Cannot find name 'process'.

        at createTSError (/usr/local/lib/node_modules/ts-node/src/index.ts:261:12)
        at getOutput (/usr/local/lib/node_modules/ts-node/src/index.ts:367:40)
        at Object.compile (/usr/local/lib/node_modules/ts-node/src/index.ts:557:11)
        at Module.m._compile (/usr/local/lib/node_modules/ts-node/src/index.ts:439:43)
        at Module._extensions..js (module.js:663:10)
        at Object.require.extensions.(anonymous function) [as .ts] (/usr/local/lib/node_modules/ts-node/src/index.ts:442:12)
        at Module.load (module.js:565:32)
        at tryModuleLoad (module.js:505:12)
        at Function.Module._load (module.js:497:3)
        at Function.Module.runMain (module.js:693:10)

## 解决方法

    # 初始化项目的 package.json
    > npm init -y
    # 安装 node 相关的类型定义
    > npm install @types/node
    # 再次运行 ./add.ts

## @types/node 到底定义了什么呢

打开 ./node_modules/@types/node/index.d.ts 搜索 Process 就能看到 process 的定义：

    export interface Process extends EventEmitter {
            stdout: WriteStream;
            stderr: WriteStream;
            stdin: ReadStream;
            openStdin(): Socket;
            argv: string[];
            argv0: string;
            execArgv: string[];
            execPath: string;
            ...

## 整个过程

![https://blog-http.oss-cn-hangzhou.aliyuncs.com/TypeScriptNotes/commoamd.jpg?Expires=1587550826&OSSAccessKeyId=TMP.3KeVFhqYMFCRYbaGVevz3hDhKP9CY5GyU4bkVeHpdANGYdrpDMTetsgzk3mwqdjS1C4Ezx2fTbY83fo7F7Y8WJUsWvNR3P&Signature=VEYucDo4tUcawIRwdA70BIpaLPE%3D](https://blog-http.oss-cn-hangzhou.aliyuncs.com/TypeScriptNotes/commoamd.jpg?Expires=1587550826&OSSAccessKeyId=TMP.3KeVFhqYMFCRYbaGVevz3hDhKP9CY5GyU4bkVeHpdANGYdrpDMTetsgzk3mwqdjS1C4Ezx2fTbY83fo7F7Y8WJUsWvNR3P&Signature=VEYucDo4tUcawIRwdA70BIpaLPE%3D)

![https://blog-http.oss-cn-hangzhou.aliyuncs.com/TypeScriptNotes/command2.jpg?Expires=1587550840&OSSAccessKeyId=TMP.3KeVFhqYMFCRYbaGVevz3hDhKP9CY5GyU4bkVeHpdANGYdrpDMTetsgzk3mwqdjS1C4Ezx2fTbY83fo7F7Y8WJUsWvNR3P&Signature=U10XfTivS5T5IQcq4R%2FT3C0ppR4%3D](https://blog-http.oss-cn-hangzhou.aliyuncs.com/TypeScriptNotes/command2.jpg?Expires=1587550840&OSSAccessKeyId=TMP.3KeVFhqYMFCRYbaGVevz3hDhKP9CY5GyU4bkVeHpdANGYdrpDMTetsgzk3mwqdjS1C4Ezx2fTbY83fo7F7Y8WJUsWvNR3P&Signature=U10XfTivS5T5IQcq4R%2FT3C0ppR4%3D)

![https://blog-http.oss-cn-hangzhou.aliyuncs.com/TypeScriptNotes/commamd3.jpg?Expires=1587550858&OSSAccessKeyId=TMP.3KeVFhqYMFCRYbaGVevz3hDhKP9CY5GyU4bkVeHpdANGYdrpDMTetsgzk3mwqdjS1C4Ezx2fTbY83fo7F7Y8WJUsWvNR3P&Signature=Dx7kv8%2By8jjbTuO9YrPnUvwuObw%3D](https://blog-http.oss-cn-hangzhou.aliyuncs.com/TypeScriptNotes/commamd3.jpg?Expires=1587550858&OSSAccessKeyId=TMP.3KeVFhqYMFCRYbaGVevz3hDhKP9CY5GyU4bkVeHpdANGYdrpDMTetsgzk3mwqdjS1C4Ezx2fTbY83fo7F7Y8WJUsWvNR3P&Signature=Dx7kv8%2By8jjbTuO9YrPnUvwuObw%3D)

## 树

请查看tree.ts文件
