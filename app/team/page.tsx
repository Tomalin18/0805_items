import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { supabase, generateRefLink, Product } from '@/lib/supabase'

export const metadata: Metadata = {
  title: '團隊介紹 - KanaKana',
  description: '認識 KanaKana 開發團隊的專業成員，了解我們的技能與精選作品。',
}

async function getProducts() {
  if (!supabase) {
    return []
  }
  
  const { data: products } = await supabase
    .from('products')
    .select('*, merchant:merchants(*)')
    .in('id', ['PROD_001', 'PROD_002', 'PROD_003'])

  return products || []
}

export default async function TeamPage() {
  const products = await getProducts()
  const refCode = process.env.REF_CODE || 'DEFAULT'

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

      {/* 個人介紹 */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6 glow-text">
            開發團隊
          </h1>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto">
            由一群熱愛遊戲和日本文化的專業開發者組成，致力於創造最優質的學習遊戲體驗
          </p>
        </div>
      </section>

      {/* 專業技能 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          專業技能
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-center">遊戲開發</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="secondary" className="mr-2">Unity</Badge>
              <Badge variant="secondary" className="mr-2">C#</Badge>
              <Badge variant="secondary" className="mr-2">遊戲引擎</Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-center">UI/UX 設計</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="secondary" className="mr-2">Figma</Badge>
              <Badge variant="secondary" className="mr-2">電競風格</Badge>
              <Badge variant="secondary" className="mr-2">使用者體驗</Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-center">後端開發</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="secondary" className="mr-2">Node.js</Badge>
              <Badge variant="secondary" className="mr-2">資料庫</Badge>
              <Badge variant="secondary" className="mr-2">API 設計</Badge>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-cyan-400 text-center">日文語言學</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Badge variant="secondary" className="mr-2">五十音</Badge>
              <Badge variant="secondary" className="mr-2">語音學</Badge>
              <Badge variant="secondary" className="mr-2">教學設計</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 精選作品 (商品展示) */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          精選作品
        </h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product: Product) => (
              <Card key={product.id} className="bg-black/40 border-cyan-500/30 backdrop-blur-sm overflow-hidden">
                {product.image_url && (
                  <div className="aspect-video bg-gray-800">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={product.image_url} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-cyan-400">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-2xl font-bold text-white">
                    NT$ {Math.floor(product.price_in_cents / 100)}
                  </p>
                  <Button 
                    asChild 
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold neon-button"
                  >
                    <a 
                      href={generateRefLink(product, refCode)} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      立即購買
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center text-cyan-300">
            <p>商品資料載入中...</p>
          </div>
        )}
      </section>

      {/* 客戶推薦 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          玩家好評
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <p className="text-cyan-300 mb-4">
                &quot;KanaKana 讓我在短時間內掌握了平假名和片假名！電競風格超酷的！&quot;
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
                <span className="text-white font-semibold">玩家小明</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <p className="text-cyan-300 mb-4">
                &quot;從來沒想過學日文可以這麼刺激！多人對戰模式太好玩了！&quot;
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
                <span className="text-white font-semibold">玩家小美</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <p className="text-cyan-300 mb-4">
                &quot;遊戲性和學習效果兼具，強烈推薦給所有想學日文的朋友！&quot;
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-cyan-500 rounded-full"></div>
                <span className="text-white font-semibold">玩家阿宏</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 服務方案 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          遊戲方案
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-cyan-400">基礎方案</CardTitle>
              <p className="text-3xl font-bold text-white">免費</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-cyan-300">✓ 基礎五十音練習</p>
              <p className="text-cyan-300">✓ 單人模式</p>
              <p className="text-cyan-300">✓ 基礎關卡</p>
              <Button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-black">
                開始遊戲
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm border-cyan-400">
            <CardHeader className="text-center">
              <CardTitle className="text-cyan-400">進階方案</CardTitle>
              <p className="text-3xl font-bold text-white">NT$ 99/月</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-cyan-300">✓ 所有基礎功能</p>
              <p className="text-cyan-300">✓ 多人對戰模式</p>
              <p className="text-cyan-300">✓ 進階詞彙練習</p>
              <p className="text-cyan-300">✓ 排行榜競賽</p>
              <Button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black">
                立即升級
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-black/40 border-cyan-500/30 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-cyan-400">專業方案</CardTitle>
              <p className="text-3xl font-bold text-white">NT$ 199/月</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-cyan-300">✓ 所有進階功能</p>
              <p className="text-cyan-300">✓ 個人化學習計畫</p>
              <p className="text-cyan-300">✓ 專屬皮膚</p>
              <p className="text-cyan-300">✓ 專業教練指導</p>
              <Button className="w-full mt-4 bg-cyan-500 hover:bg-cyan-400 text-black">
                聯絡我們
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 專案諮詢 */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            準備開始你的日文學習之旅？
          </h2>
          <p className="text-lg text-cyan-300 mb-8 max-w-2xl mx-auto">
            立即下載 KanaKana，加入超過 10 萬名玩家的學習社群！
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold px-12 py-4 text-xl neon-button">
            立即下載遊戲
          </Button>
        </div>
      </section>
    </div>
  )
}