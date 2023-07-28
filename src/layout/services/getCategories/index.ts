import { api } from '@/shared/api'
import { CategoriesData } from './types'
import { endpoints } from '@/shared/api/endpoints'
import { Category } from '@/layout/models/category'

export const getBanners = async (): Promise<Category[]> => {
  const {
    data: { data },
  } = await api.get<CategoriesData>(endpoints.banners, {
    params: { subdomain: 'supermercado' },
  })

  const banners = data.collection_items.map((banner) => {
    return {
      id: banner.id,
      name: banner.title,
      slug: banner.slug,
    }
  })

  return banners
}
