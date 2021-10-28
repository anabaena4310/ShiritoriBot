# ShiritoriBot
GASとMessagingAPIを利用したしりとりBot

LINEでしりとり遊びができるボットです。 GASとMessagingAPIで実装されています

１. 画像のようなしりとり単語表をGoogleスプレッドシートで作成してください。各単語の表情の列などの位置は画像に合わせてください。 

２. スクリプトエディタを開いて「ShiritoriBot.gs」をコピー＆ペーストします。 

３. LINE DevelopersにログインしてMessagingAPIのクライアントとチャネルを作成し、アクセストークンを取得してShiritoriBot.gsの所定の箇所にコピー＆ペーストします。 

４. スクリプトエディタのメニューから「公開」→「ウェブアプリケーションとして導入」を選択。「プロジェクトバージョン」を「new」に。「次のユーザーとしてアプリケーションを実行」を「自分」に。「アプリケーションにアクセスできるユーザー」を「全員」にして「導入」。

５. 「現在のウェブアプリケーションのURL」のURLをコピーして、LINE Developersの「チャネル基本設定」ページの「Webhook URL」に貼り付ける。「Webhook送信」を「利用する」に変更。

６. 「チャネル基本設定」ページのQRコードをLINEアプリで読み込んで友達登録し、メッセージを送ってテストする。

不明な点はぜひTwitterでお気軽にお尋ねください。 ＠benao_python

![Uploading スクリーンショット 2019-08-20 18.33.54.png…](https://user-images.githubusercontent.com/51358770/63336178-aa789880-c379-11e9-8a04-16d69d95b3f3.png)
