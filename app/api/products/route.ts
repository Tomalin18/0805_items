import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

/**
 * 商品 API 端點
 * 
 * 使用方式：
 * - GET /api/products - 獲取所有商品
 * - GET /api/products?ids=PROD_001,PROD_002,PROD_003 - 獲取指定商品
 * 
 * 返回資料包含完整的商品資訊和商家資訊
 */
export async function GET(request: Request) {
  try {
    // 檢查 Supabase 是否可用
    if (!supabase) {
      console.warn('Supabase client is not initialized. Using fallback mock data.')
      
      // 提供符合 PRD.md 規格的模擬商品資料
      const mockProducts = [
        {
          id: 'PROD_001',
          merchant_id: 'MOCK_MERCHANT',
          name: 'KanaKana 基礎版',
          price_in_cents: 9900,
          image_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=400&auto=format&fit=crop',
          product_url: 'https://example.com/products/kanakana-basic',
          merchant: {
            id: 'MOCK_MERCHANT',
            name: 'KanaKana Team',
            base_product_url: 'https://example.com/products'
          }
        },
        {
          id: 'PROD_002',
          merchant_id: 'MOCK_MERCHANT',
          name: 'KanaKana 進階版',
          price_in_cents: 19900,
          image_url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=400&auto=format&fit=crop',
          product_url: 'https://example.com/products/kanakana-advanced',
          merchant: {
            id: 'MOCK_MERCHANT',
            name: 'KanaKana Team',
            base_product_url: 'https://example.com/products'
          }
        },
        {
          id: 'PROD_003',
          merchant_id: 'MOCK_MERCHANT',
          name: 'KanaKana 專業版',
          price_in_cents: 29900,
          image_url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=400&auto=format&fit=crop',
          product_url: 'https://example.com/products/kanakana-professional',
          merchant: {
            id: 'MOCK_MERCHANT',
            name: 'KanaKana Team',
            base_product_url: 'https://example.com/products'
          }
        }
      ]

      // 如果有指定 ids，則過濾模擬資料
      const { searchParams } = new URL(request.url)
      const idsParam = searchParams.get('ids')
      
      if (idsParam) {
        const ids = idsParam.split(',').map(id => id.trim())
        const filteredProducts = mockProducts.filter(product => ids.includes(product.id))
        return NextResponse.json(filteredProducts)
      }
      
      return NextResponse.json(mockProducts)
    }
    
    // 獲取查詢參數
    const { searchParams } = new URL(request.url)
    const idsParam = searchParams.get('ids')
    
    // 構建查詢
    let query = supabase
      .from('products')
      .select(`
        *,
        merchant:merchants(*)
      `)
    
    // 如果有指定 ids，則過濾
    // 這是從 PRD.md 中讀取商品 ID 後使用的主要方式
    if (idsParam) {
      const ids = idsParam.split(',').map(id => id.trim())
      query = query.in('id', ids)
    }
    
    // 執行查詢
    const { data: products, error } = await query
    
    if (error) {
      throw error
    }
    
    // 返回成功響應
    return NextResponse.json(products || [])
  } catch (error) {
    // 錯誤處理
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to load products from Supabase:', error)
    }
    return NextResponse.json(
      { error: 'Failed to load products' },
      { status: 500 }
    )
  }
}