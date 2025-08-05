import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: '遊戲更新資訊 - KanaKana',
  description: '獲取 KanaKana 最新更新消息、版本資訊和遊戲新功能介紹。',
}

export default function UpdatesPage() {
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

      {/* 頭條新聞 */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 glow-text">
            遊戲更新資訊
          </h1>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
            第一時間獲取 KanaKana 最新版本更新、新功能介紹和遊戲資訊
          </p>
        </div>

        {/* 重要公告 */}
        <Card className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-cyan-400 mb-12">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <Badge className="bg-cyan-500 text-black">🔥 熱門</Badge>
              <CardTitle className="text-2xl text-white">
                v2.5.0 重大更新即將推出！
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-cyan-100 text-lg mb-4">
              全新電競模式、AI 對戰系統、以及更多精彩內容即將在下個月與玩家見面！
              預計將帶來前所未有的競技體驗。
            </p>
            <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold">
              了解更多
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* 最新報導 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12">
          最新報導
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 主要新聞 */}
          <div className="space-y-6">
            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">版本更新</Badge>
                  <span className="text-cyan-300 text-sm">2024.01.15</span>
                </div>
                <CardTitle className="text-cyan-400">
                  v2.4.2 熱修復更新現已推出
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-300 mb-4">
                  修復了多人模式中的連線問題，優化了打字反應速度，並新增了 3 個限時挑戰關卡。
                </p>
                <Button variant="outline" className="border-cyan-500 text-cyan-300">
                  查看詳情
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">活動公告</Badge>
                  <span className="text-cyan-300 text-sm">2024.01.10</span>
                </div>
                <CardTitle className="text-cyan-400">
                  新年特別活動：雙倍經驗值週末
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-300 mb-4">
                  1月20-21日週末期間，所有玩家可獲得雙倍學習經驗值，還有機會獲得限定皮膚獎勵！
                </p>
                <Button variant="outline" className="border-cyan-500 text-cyan-300">
                  參加活動
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">功能介紹</Badge>
                  <span className="text-cyan-300 text-sm">2024.01.05</span>
                </div>
                <CardTitle className="text-cyan-400">
                  新功能：個人化學習路徑
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-300 mb-4">
                  AI 系統將根據你的學習進度和弱點，自動規劃最適合的練習內容。
                </p>
                <Button variant="outline" className="border-cyan-500 text-cyan-300">
                  立即體驗
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* 側邊欄新聞 */}
          <div className="space-y-6">
            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-lg">
                  社群統計
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-cyan-300">本月新增玩家</span>
                  <span className="text-white font-bold">12,450</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-300">累計學習時數</span>
                  <span className="text-white font-bold">2.1M 小時</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-300">完成詞彙數</span>
                  <span className="text-white font-bold">850K 個</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-lg">
                  即將推出
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-cyan-300">語音識別功能</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-cyan-300">跨平台同步</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-cyan-300">團隊協作模式</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-cyan-300">直播整合功能</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-cyan-400 text-lg">
                  開發者日記
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-300 mb-4">
                  &quot;我們正在努力為玩家打造更沉浸式的學習體驗...&quot;
                </p>
                <Button variant="outline" size="sm" className="border-cyan-500 text-cyan-300">
                  閱讀全文
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 新聞分類 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white mb-12">
          更多消息分類
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm hover:bg-cyan-500/10 transition-all cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl mb-2">🎮</div>
              <h3 className="text-cyan-400 font-bold mb-2">遊戲更新</h3>
              <p className="text-cyan-300 text-sm">版本更新與新功能</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm hover:bg-cyan-500/10 transition-all cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl mb-2">🏆</div>
              <h3 className="text-cyan-400 font-bold mb-2">競賽活動</h3>
              <p className="text-cyan-300 text-sm">電競賽事與活動</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm hover:bg-cyan-500/10 transition-all cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="text-cyan-400 font-bold mb-2">社群動態</h3>
              <p className="text-cyan-300 text-sm">玩家社群與交流</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm hover:bg-cyan-500/10 transition-all cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="text-3xl mb-2">🔧</div>
              <h3 className="text-cyan-400 font-bold mb-2">技術支援</h3>
              <p className="text-cyan-300 text-sm">問題解答與協助</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 新聞頁尾 */}
      <footer className="border-t border-cyan-500/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              不想錯過任何更新？
            </h3>
            <p className="text-cyan-300 mb-6">
              訂閱我們的電子報，第一時間獲得最新消息
            </p>
            <div className="flex max-w-md mx-auto space-x-2">
              <input 
                type="email" 
                placeholder="輸入您的電子郵件" 
                className="flex-1 px-4 py-2 bg-black/40 border border-cyan-500/30 rounded text-white placeholder-cyan-300/70"
              />
              <Button className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold">
                訂閱
              </Button>
            </div>
          </div>
          
          <div className="text-center text-cyan-300 text-sm">
            <p>&copy; 2024 KanaKana. 保留所有權利。</p>
          </div>
        </div>
      </footer>
    </div>
  )
}