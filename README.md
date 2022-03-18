# puppeteer scraping

## 環境構築

下記のコマンドを実行してコンテナを作成します

```sh
docker-compose build
```

### 楽天証券スクレイピングの利用方法

下記のコマンドを実行後、`.env`ファイルの中身を修正する

```sh
cp .env.example .env
```

```sh
RAKUTEN_SHOKEN_LOGIN_ID=${your_login_id}
RAKUTEN_SHOKEN_LOGIN_PW=${your_login_password}
SLACK_INCOMMING_WEBHOOK_URL=${your_slack_webhook_url}
```

## 使い方

```sh
docker-compose run --rm app yarn rakuten
```

```sh
# テスト用のサンプル
docker-compose run --rm app yarn start
```

## prettierの使い方

手動実行する場合、コンテナ内で下記のコマンドを実行する

```sh
docker-compose run --rm app yarn fmt
```

## 参考

[【puppeteerでスクレイピング】Alpine Dockerコンテナからpuppeteerで動的サイトのスクレイピングを試してみる](https://deep.tacoskingdom.com/blog/52)
