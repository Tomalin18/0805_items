import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'KanaKana - 電競風格日文打字遊戲官網',
  description: 'KanaKana 是一款結合電競元素的日文打字手機遊戲，讓語言學習變得刺激又有趣。立即下載體驗！',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* 導航 */}
      <nav className="border-b border-cyan-500/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="text-2xl font-bold text-cyan-400 glow-text">
              KanaKana
            </div>
            <div className="flex space-x-6">
              <Link href="/" className="text-cyan-300 hover:text-cyan-100 transition-colors">
                首頁
              </Link>
              <Link href="/team" className="text-cyan-300 hover:text-cyan-100 transition-colors">
                團隊介紹
              </Link>
              <Link href="/updates" className="text-cyan-300 hover:text-cyan-100 transition-colors">
                遊戲更新
              </Link>
              <Link href="/game" className="text-cyan-300 hover:text-cyan-100 transition-colors">
                遊戲介紹
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* 主打區域 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold text-white mb-6 glow-text">
          KanaKana
        </h1>
        <p className="text-xl text-cyan-300 mb-8 max-w-2xl mx-auto">
          電競風格日文打字遊戲，讓語言學習變得刺激又有趣！
          體驗前所未有的學習快感，在遊戲中掌握日文打字技巧。
        </p>
        <div className="space-x-4">
          <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-3 text-lg neon-button">
            立即下載
          </Button>
          <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 px-8 py-3 text-lg">
            觀看預告
          </Button>
        </div>
      </section>

      {/* 關鍵數據 */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-cyan-400">
                100K+
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-cyan-300">活躍玩家</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-cyan-400">
                500+
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-cyan-300">日文詞彙</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-cyan-400">
                4.8★
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-cyan-300">用戶評分</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 行動呼籲 */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          準備好挑戰了嗎？
        </h2>
        <p className="text-lg text-cyan-300 mb-8 max-w-xl mx-auto">
          加入 KanaKana 的電競世界，與全球玩家一起在刺激的對戰中學習日文！
        </p>
        <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-12 py-4 text-xl neon-button">
          開始遊戲
        </Button>
      </section>
    </div>
  )
}
