import { Product } from '@/pages/home/models/product'

export interface CartProduct extends Product {
  quantity: number
  id: string
}
