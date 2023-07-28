interface Price {
  id: string
  internal_code: string
  title: string
  qtd_stock: number
  stock_control_enabled: boolean
  price: number
  promo_price: number
  promo_end_at: string
  bar_codes: string[]
}

interface Shipping {
  deliverable: boolean
}

interface Product {
  id: string
  created_at: string
  item_type: string
  subcategory_ids: string[]
  main_subcategory: string
  store_id: string
  visible: boolean
  description: string
  images: string[]
  name: string
  prices: Price[]
  available_stock: boolean
  min_price_valid: number
  slug: string
  brand: string
  unit_type: string
  increment_value: number
  shipping: Shipping
  copy_of: string
}

export interface ProductsData {
  count: number
  data: {
    promo: Product[]
  }
  http_status: number
  status: string
}
