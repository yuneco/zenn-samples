// PixiJSを読み込み
import * as PIXI from 'pixi.js'

// ステージを作る
const createApp = () => {
  // キャンバスサイズと背景色を指定してステージを作成
  const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0xcccccc // 背景色(= #cccccc)
  })
  document.body.appendChild(app.view)
  return app
}

// 初期化処理
const main = async () => {
  const app = createApp()
  const tx = await PIXI.Texture.fromURL('assets/tama.svg')
  const tama = new PIXI.Sprite(tx)
  app.stage.addChild(tama)
}

// 起動
main()
