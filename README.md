# すみかみらい 公式ホームページ

「すみかみらい 一級建築士事務所」の公式サイトです。現在、一級建築士事務所の登録手続中であることを明記しています。HTML、CSS、JavaScriptだけで動くため、特別なビルド作業はありません。

## ローカルで確認する方法

一番簡単な方法は `index.html` をダブルクリックしてブラウザで開くことです。より本番に近い確認をする場合は、このフォルダで簡単なローカルサーバーを起動し、表示されたURLをブラウザで開いてください。

- Pythonがある場合：`python -m http.server 8000`
- 確認URL：`http://localhost:8000/`

## 主な編集場所

- サイト名、キャッチコピー、各サービス：`index.html`
- 個人向けの相談内容：`individual.html`
- 不動産・住宅事業者向けの業務：`business.html`
- 代表者、資格、事務所概要：`office.html`
- 対応市町村と出張費：`area.html`
- 色、文字サイズ、余白、スマートフォン表示：`assets/css/style.css` 冒頭のCSS変数と各セクション
- メニュー、FAQ、問い合わせフォームの動作：`assets/js/main.js`
- 個人情報保護方針：`privacy.html`
- 検索エンジン向けURL：`robots.txt` と `sitemap.xml`

ファイル内で `TODO` または「登録完了後」を検索すると、今後の更新箇所を見つけられます。

## 公開前に差し替える情報

- 一級建築士事務所の登録完了後の登録番号
- 問い合わせフォームの送信先・送信方法
- Googleビジネスプロフィール公開後のリンク
- 必要に応じてSNSリンク

料金を変更した場合は、`index.html` の料金表と実際の案内資料を同時に更新してください。登録番号は登録完了後にのみ掲載します。

## 画像を差し替える方法

1. 新しい画像を `assets/images/` に入れます。正式ロゴは `logo-sumikamirai.png` です。
2. `index.html` の対象箇所にあるファイル名を書き換えます。
3. 画像の縦横比を保ち、HTMLの `width` と `height` を実寸に合わせます。
4. 内容が分かる日本語の `alt` を設定します。

ロゴは変形、切り抜き、文字変更をせず、そのままの縦横比で使ってください。写真はWebPまたはAVIFに変換すると軽くできます。元画像を保管したうえで、画像変換サービス等で同じ縦横比のWebP/AVIFを作り、HTMLのファイル名を差し替えてください。代表者写真は掲載しない方針です。施工写真に架空の画像を使わないでください。

### 現在のイメージ写真

以下は施工事例ではなく、サイトの雰囲気を伝えるイメージ写真です。いずれもUnsplash Licenseで公開されている写真を使用しています。

- `house-atmosphere.jpg`：[Sense Atelier（Unsplash）](https://unsplash.com/photos/brown-wooden-house-during-daytime-X3tOKWTQ6ew)
- `planning-atmosphere.jpg`：[Pedro Miranda（Unsplash）](https://unsplash.com/photos/people-reviewing-architectural-blueprints-on-desk-3QzMBrvCeyQ)
- `future-home-concept.png`：画像生成による、明るい住まいの将来像を表すイメージ（施工事例ではありません）
- `future-home-sunset.webp`：画像生成による、夕暮れの住まいの将来像を表すイメージ（施工事例ではありません）
- `planning-review-concept.webp`：画像生成による、長袖の担当者が図面を確認するイメージ（実際の相談風景ではありません）
- `inspection-report-concept.webp`：画像生成による、住宅調査報告書のイメージ（実物の報告書ではありません）

表示には軽量なWebP版を使い、同名のPNGは元画像として残しています。

実際の建物調査や相談風景の写真が用意できたら、同じファイル名で差し替えるか、`index.html` の画像パスを変更してください。

## お問い合わせ

現在は、公開メールアドレスと電話番号への直接連絡を表示しています。サイト内の入力フォームは公開していません。フォームを追加する場合は、送信先、保存方法、迷惑メール対策、個人情報保護方針を決めてから実装してください。

## SEOの主な設定

- 各ページに内容が分かる固有のタイトルと説明文を設定しています。
- 「群馬県」「ホームインスペクション」「住宅診断」「既存住宅状況調査」「空き家・相続住宅」などを、ページの内容に合わせて使い分けています。
- トップページに事務所情報とよくある質問の構造化データを設定しています。
- `area.html` に対応市町村と出張費をまとめています。
- 公開後はGoogle Search Consoleで `sitemap.xml` を送信し、表示回数と検索語を確認してください。

## GitHub Pagesで公開する方法

1. GitHubで新しいリポジトリを作成します。
2. HTML、`assets` フォルダ、`robots.txt`、`sitemap.xml`、`.nojekyll` をリポジトリ直下へアップロードします。`tmp`、`outputs`、`work`、`.agents`、`.codex` は制作中の作業用フォルダなのでアップロードしません。
3. リポジトリの「Settings」を開きます。
4. 左側の「Pages」を開きます。
5. 公開元で「Deploy from a branch」を選び、`main` ブランチと `/ (root)` を指定します。
6. 保存後、表示された公開URLを確認します。
7. 公開URL `https://infosumikamirai-bot.github.io/co.jp/` で表示を確認します。

## GitHub Pages公開前チェックリスト

- [ ] 正式ロゴと代表者名を確認した
- [ ] 所在地、連絡先、営業時間の公開可否を確認した
- [ ] 問い合わせフォームの送信テストをした
- [ ] `TODO` をすべて確認した（意図して残すもの以外は差し替えた）
- [ ] canonical、OGP、robots.txt、sitemap.xmlが公開URLと一致している
- [ ] スマートフォンとパソコンで表示した
- [ ] メニュー、全リンク、FAQ、フォームを操作した
- [ ] 誤字、事実関係、資格表記を本人が確認した
- [ ] 個人情報保護方針を実際の運用に合わせた

## ファイル一覧

- `index.html`：トップページ
- `home-inspection.html`：ホームインスペクション・建物調査の詳細、料金、依頼の流れ
- `individual.html`：個人のお客様向けの相談内容
- `business.html`：不動産・住宅事業者向けの対応内容
- `office.html`：代表者、資格、事務所概要
- `area.html`：対応エリアと出張費
- `privacy.html`：個人情報保護方針
- `404.html`：ページが見つからない場合
- `assets/css/style.css`：デザイン
- `assets/js/main.js`：メニューとフォームの動作
- `assets/images/`：差し替え用画像
- `AGENTS.md`：今後も守る制作ルール
- `PROJECT_BRIEF.md`：事業とサイトの要約
- `robots.txt` / `sitemap.xml`：検索エンジン向け
- `.nojekyll`：GitHub Pages向け設定
