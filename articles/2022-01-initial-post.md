---
title: "Zenn のように書けるブログを作った"
published: true
publishedAt: "2022-01-23 09:00:00"
tags: ["react", "next.js", "markdown"]
---

手を動かしたかったが特に作りたいものがなかったのでこのサイトにブログ機能を実装した。

# zenn-editor

Zenn の執筆体験がとても好きなので、Zenn が OSS で公開している `zenn-editor` を使って同じ記法で書けるようにしてみた。

https://github.com/zenn-dev/zenn-editor

URL のプレビューも追加の設定なしでいい感じに表示してくれる。
ただ、自分のサイトがダークモードの時にマウスホバー時の配色に少し違和感がある気がする。これは Zenn がダークモード対応するまで待とう。

URL プレビューは iframe での実装になっている。
このサイトではオリジナルのマウスポインターを実装していて、プレビューの iframe の上ではマウスカーソルが通常のものに戻ってしまう。せめて iframe に乗った時はオリジナルのポインターの残像を消すように対応したいが、それを検知するのが難しそう。

# markdown-yaml-metadata-parser

`zenn-editor` では Markdown ファイル上部の yaml メタデータまではパースしてくれなったので、 `markdown-yaml-metadata-parser` というので別途パースしている。TypeScript サポートがなかったけどシンプルな関数なので適当に補完するようにした。

https://github.com/ilterra/markdown-yaml-metadata-parser

# 終わり

Next.js への `zenn-editor` の導入方法を参考にしたい方は ↓ の PR 差分を見てみてください。

https://github.com/aku11i/akutagawa.dev/pull/163/files
