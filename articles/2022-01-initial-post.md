---
title: "Zenn のように書けるブログを作った"
published: true
publishedAt: "2022/01/23 09:00:00"
tags: ["react", "next.js", "markdown"]
description: "Zenn の執筆体験がとても好きなので、Zenn が OSS で公開している zenn-editor を使って同じ記法で書けるようにしてみた。"
---

手を動かしたかったが特に作りたいものがなかったのでこのサイトにブログ機能を実装した。

# zenn-editor

Zenn の執筆体験がとても好きなので、Zenn が OSS で公開している `zenn-editor` を使って同じ記法で書けるようにしてみた。

https://github.com/zenn-dev/zenn-editor

URL のプレビューも追加の設定なしで Zenn と同じように表示してくれる。
ただ、自分のサイトがダークモードの時にマウスホバー時の配色に少し違和感がある気がする。これは Zenn がダークモード対応する時に解決される気がする。

URL プレビューは iframe で表示されるが、このサイトではオリジナルのマウスポインターを実装していて、 iframe のプレビュー上ではマウスカーソルが通常のものに戻ってしまう。せめて iframe に乗った時はオリジナルのポインターの残像を消すように対応したいが、それを検知するのが難しそう。

# markdown-yaml-metadata-parser

`zenn-editor` では Markdown ファイル上部の yaml メタデータまではパースしてくれなったので、 `markdown-yaml-metadata-parser` というので別途パースしている。TypeScript サポートがなかったけどシンプルな関数なので適当に補完するようにした。

https://github.com/ilterra/markdown-yaml-metadata-parser

# 複数の RSS をマージ

Zenn など他のサービスに書いた記事も[トップページ](https://akutagawa.dev) に表示したいので、自分のサイトの記事一覧と他の RSS から取得した記事一覧をマージするようにした。
それを [`/api/articles.rss`](https://akutagawa.dev/api/articles.rss) として再度 RSS にエクスポートして配信するようにした。
