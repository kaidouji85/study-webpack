# Webpack勉強用パッケージ
自作ゲームGブレイバーでWebpackを使ってみたいと思ったので、練習用のリポジトリを作りました。

## 初期設定
```
npm install webpack -g
npm install webpack-dev-server -g
npm install
```    


## プロダクトのビルド
```
webpack
```


## デバッグコードのビルド
```
webpack --config webpack.debug.config.js
```


## ビルドしたjsを確認する
1. webpack-dev-serverを起動する  
```
npm start
```


2. ブラウザで以下にアクセスする  
プロダクト  
http://localhost:8080/  

デバッグ  
http://localhost:8080/module-doFnDebug.html