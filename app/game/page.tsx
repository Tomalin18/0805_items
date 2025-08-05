import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: '遊戲介紹 - KanaKana',
  description: '深入了解 KanaKana 電競風格日文打字遊戲的玩法、特色功能和遊戲模式。',
}

export default function GamePage() {
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

      {/* 活動主視覺 */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6 glow-text">
            遊戲介紹
          </h1>
          <p className="text-2xl text-cyan-300 max-w-4xl mx-auto mb-8">
            體驗前所未有的電競風格日文學習遊戲
          </p>
          <div className="relative max-w-4xl mx-auto h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 backdrop-blur-sm">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">🎮</div>
                <p className="text-cyan-300 text-lg">遊戲預告片即將推出</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 遊戲統計數據 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          遊戲數據
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-cyan-400">
                10萬+
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-cyan-300">註冊玩家</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-cyan-400">
                500+
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-cyan-300">學習關卡</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-cyan-400">
                95%
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-cyan-300">學習成效</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-4xl font-bold text-cyan-400">
                24/7
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-cyan-300">線上對戰</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 遊戲亮點功能 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          遊戲特色
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="text-4xl text-center mb-2">⚡</div>
              <CardTitle className="text-cyan-400 text-center">電競風格界面</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-300 text-center">
                炫酷的霓虹特效、動態背景和專業電競UI設計，讓學習過程充滿視覺衝擊力
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="text-4xl text-center mb-2">🎯</div>
              <CardTitle className="text-cyan-400 text-center">即時打字對戰</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-300 text-center">
                與全球玩家即時對戰，在緊張刺激的比賽中提升日文打字速度和準確度
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="text-4xl text-center mb-2">🤖</div>
              <CardTitle className="text-cyan-400 text-center">AI智能學習</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-300 text-center">
                AI系統分析學習進度，自動調整難度並推薦個人化練習內容
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="text-4xl text-center mb-2">🏆</div>
              <CardTitle className="text-cyan-400 text-center">排行榜系統</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-300 text-center">
                全球排行榜、朋友排行榜，還有每週挑戰賽事，激發競爭學習動力
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="text-4xl text-center mb-2">🎨</div>
              <CardTitle className="text-cyan-400 text-center">角色自訂</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-300 text-center">
                豐富的角色皮膚、特效和頭像，打造專屬的遊戲角色
              </p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <div className="text-4xl text-center mb-2">📚</div>
              <CardTitle className="text-cyan-400 text-center">完整學習路徑</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-cyan-300 text-center">
                從基礎五十音到進階詞彙，系統化的學習課程設計
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 開發團隊介紹 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          開發團隊
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-cyan-400 font-bold mb-2">Alex Chen</h3>
              <p className="text-cyan-300 text-sm mb-2">遊戲總監</p>
              <p className="text-cyan-300/70 text-xs">10年遊戲開發經驗</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-cyan-400 font-bold mb-2">Yuki Tanaka</h3>
              <p className="text-cyan-300 text-sm mb-2">教學設計師</p>
              <p className="text-cyan-300/70 text-xs">日語教學專家</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-cyan-400 font-bold mb-2">Sarah Kim</h3>
              <p className="text-cyan-300 text-sm mb-2">UI/UX 設計師</p>
              <p className="text-cyan-300/70 text-xs">電競界面設計專家</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="pt-6 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto mb-4"></div>
              <h3 className="text-cyan-400 font-bold mb-2">Mike Johnson</h3>
              <p className="text-cyan-300 text-sm mb-2">技術總監</p>
              <p className="text-cyan-300/70 text-xs">即時對戰系統架構師</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 定價方案 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          選擇你的方案
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-cyan-400">新手訓練營</CardTitle>
              <p className="text-4xl font-bold text-white mb-2">免費</p>
              <p className="text-cyan-300">永久免費</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">基礎五十音練習</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">單人模式</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">基礎統計數據</span>
              </div>
              <Button className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-black font-bold">
                開始遊戲
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-400 backdrop-blur-sm relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold">
                🔥 最受歡迎
              </Badge>
            </div>
            <CardHeader className="text-center">
              <CardTitle className="text-cyan-400">競技玩家</CardTitle>
              <p className="text-4xl font-bold text-white mb-2">NT$ 99</p>
              <p className="text-cyan-300">每月</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">所有免費功能</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">多人即時對戰</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">排行榜競賽</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">進階詞彙包</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">專屬皮膚</span>
              </div>
              <Button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold">
                立即升級
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-cyan-400">專業選手</CardTitle>
              <p className="text-4xl font-bold text-white mb-2">NT$ 199</p>
              <p className="text-cyan-300">每月</p>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">所有競技功能</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">AI個人教練</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">進階數據分析</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">專屬賽事通道</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                <span className="text-cyan-300">優先客服支援</span>
              </div>
              <Button className="w-full mt-6 bg-cyan-500 hover:bg-cyan-400 text-black font-bold">
                聯絡我們
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 聯絡我們 */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            準備加入戰場？
          </h2>
          <p className="text-lg text-cyan-300 mb-8">
            立即下載 KanaKana，開始你的電競日文學習之旅！與全球玩家一起在刺激的對戰中掌握日文。
          </p>
          <div className="space-x-4">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-12 py-4 text-xl neon-button">
              立即下載
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-300 hover:bg-cyan-500/20 px-8 py-4 text-lg">
              觀看預告
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-cyan-500/30">
            <p className="text-cyan-300 mb-4">
              有任何問題或建議？歡迎聯絡我們的團隊
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <a href="mailto:support@kanakana.game" className="text-cyan-400 hover:text-cyan-300">
                support@kanakana.game
              </a>
              <span className="text-cyan-500">|</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300">
                Discord 社群
              </a>
              <span className="text-cyan-500">|</span>
              <a href="#" className="text-cyan-400 hover:text-cyan-300">
                Facebook 粉絲頁
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}