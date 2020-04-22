# 配置 npm 淘宝源

npm config set registry https://registry.npm.taobao.org/

想要撤销的话，可执行npm config delete registry

## 安装

npm install typescript@2.9.2 -g
npm install ts-node@7.0.0 -g
想尝试新版本可以去掉 @2.9.2 和 @7.0.0

**注意：**安装ts-node的时候，记下 ts-node 安装后的可执行文件路径，后面要用的

![https://blog-http.oss-cn-hangzhou.aliyuncs.com/TypeScriptNotes/ts-node-path.jpg?Expires=1587550763&OSSAccessKeyId=TMP.3KeVFhqYMFCRYbaGVevz3hDhKP9CY5GyU4bkVeHpdANGYdrpDMTetsgzk3mwqdjS1C4Ezx2fTbY83fo7F7Y8WJUsWvNR3P&Signature=Igjy9XKR%2Faz5Ya9a02fCAO%2FqmOE%3D](https://blog-http.oss-cn-hangzhou.aliyuncs.com/TypeScriptNotes/ts-node-path.jpg?Expires=1587550763&OSSAccessKeyId=TMP.3KeVFhqYMFCRYbaGVevz3hDhKP9CY5GyU4bkVeHpdANGYdrpDMTetsgzk3mwqdjS1C4Ezx2fTbY83fo7F7Y8WJUsWvNR3P&Signature=Igjy9XKR%2Faz5Ya9a02fCAO%2FqmOE%3D)

## 调试

1.创建文件夹 tsdemo

2。用 vscode 打开 tsdemo 目录

3.创建 tsdemo/1.ts 作为我们的第一个 TS 文件

4.在文件里写一句 console.log(1) 保存

5.Windows 用户注意：这里需要单独运行一些命令（Linux 用户和 macOS 用户不用执行）

    npm init -y
    npm i -D ts-node typescript

6.创建 tsdemo/.vscode/launch.json 文件，内容如下

    {
        "configurations": [
            {
            "name": "ts-node",
            "type": "node",
            "request": "launch",
            "program": "注意看这里，要写成ts-node对应的可执行文件，Windows 用户注意了，你应该写成 ${workspaceRoot}/node_modules/ts-node/dist/bin.js",
            "args": ["${relativeFile}"],
            "cwd": "${workspaceRoot}",
            "protocol": "inspector"
            }
        ]
    }

7.打开 tsdemo/1.js，找到调试选项，选择 ts-node，然后点击调试

8.然后你就可以看到 console.log(1) 的输入结果了（请确保你选中的是 tsdemo/1.ts）

## 参考资料

[https://segmentfault.com/a/1190000011935122](https://segmentfault.com/a/1190000011935122)

[TypeScript in 5 minutes](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)