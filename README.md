# puppeteer scraping

## 環境構築

下記のコマンドを実行してコンテナを作成します

```sh
docker-compose build
```

## 使い方

コンテナ生成後、下記を実行してコンテナ内に入ります

```sh
docker-compose run --rm app bash
```

```sh
# テスト用のサンプル
yarn start
```

```sh
# 楽天証券の評価損益を取得してSlackに通知
yarn rakuten
```

## 楽天証券スクレイピングの利用方法

下記のコマンドを実行後、`.env`ファイルの中身を修正する

```sh
cp .env.example .env
```

```sh
RAKUTEN_SHOKEN_LOGIN_ID=${your_login_id}
RAKUTEN_SHOKEN_LOGIN_PW=${your_login_password}
SLACK_INCOMMING_WEBHOOK_URL=${your_slack_webhook_url}
```

## prettierの使い方

手動実行する場合、コンテナ内で下記のコマンドを実行する

```sh
yarn fmt
```

## 参考

[【puppeteerでスクレイピング】Alpine Dockerコンテナからpuppeteerで動的サイトのスクレイピングを試してみる](https://deep.tacoskingdom.com/blog/52)
