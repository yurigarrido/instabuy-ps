interface Item {
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
  prices: {
    id: string
    internal_code: string
    title: string
    qtd_stock: number
    stock_control_enabled: boolean
    price: number
    bar_codes: string[]
  }[]
  available_stock: boolean
  min_price_valid: number
  slug: string
  brand: string
  unit_type: string
  increment_value: number
  shipping: {
    deliverable: boolean
  }
  copy_of: string
}

export interface ProductsData {
  count: number
  data: Item[]
  http_status: number
  status: string
}
