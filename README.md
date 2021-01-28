

## 写在前面

此loader完全是用于玩具demo，更多请使用官方的`less-loader`。

## 安装

```shell
npm install zh-less-loader --save-dev
```

## 使用

```js
// webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [ "zh-less-loader" ]
            },
        ]
    }
}
```

