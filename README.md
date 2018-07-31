
Send Pug (or any) gifs to your Yo buddies!

![](http://cl.ly/image/1C252V3M2037/yo-pugs.gif)
[http://docs.justyo.co/v2.0/docs/](http://docs.justyo.co/v2.0/docs/)

Specify the response on the notification from your code!

![](http://cl.ly/image/3S362I430J0d/Untitled.png)

## Getting Started(Herokuを用いた方法のみ)


* YoのAPIを使う準備

[https://dashboard.justyo.co/](https://dashboard.justyo.co/) にアクセス
![](https://i.imgur.com/G6Y7Hps.png)

Appsをクリック後Create Appタブから

![](https://i.imgur.com/TI93ztH.png)

※任意の名前には英数字とハイフンのみ使用できる
**ここでの任意の名前は後に使うので取っておく**

Createをクリックする (ここでは任意の名前を`yo-send-gifs`としている)
![](https://i.imgur.com/CK5xOpz.png)

* Heroku側での作業
 
 Herokuへのデプロイ

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy) <-をクリック 

![](https://i.imgur.com/GPB5irV.png)

GIPHY_KEYWORDには英語でgifの検索ワードを入力する
(`cats`, `pugs`, `dogs`など)

Deploy Appをクリックして全てにチェックが付けば終了！

Viewをクリックするかhttps://<任意の名前>.herokuapp.comにアクセスする


[GIPHY_KEYWORDを`cats`にした例](https://yo-cats.herokuapp.com)
