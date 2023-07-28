interface Category {
  id: string
  title: string
  slug: string
}

interface Data {
  collection_items: Category[]
}

export interface CategoriesData {
  count: number
  data: Data
  http_status: number
  status: string
}
