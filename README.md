# DevNet Helper
Webページ上のDevNet IDをクリックでコピーするためのchrome拡張。

## 導入方法
- manifest.jsonのcontent_scripts.matchesに有効にしたいWebページのURLを追加する。
- Chromeで拡張機能のページを開く。
- 右上の「デベロッパーモード」にチェックを入れる。
- 「パッケージ化されていない拡張機能を読み込む」をクリックする。
- `.\devnet-helper`のフォルダ(直下にmanifest.jsonがあるフォルダ)を選択する。

## 使い方
- DevNetIdが下線付きで表示されるようになるので、クリックするとクリップボードにIDがコピーされている。
