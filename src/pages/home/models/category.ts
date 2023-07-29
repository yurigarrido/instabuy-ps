import { Product } from '../../../shared/models/product'

export interface Category {
  id: string
  name: string
  slug: string
  products: Product[]
}
