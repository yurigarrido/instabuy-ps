import { api } from '@/shared/api'
// import { ProductsData } from './types'
import { Banner } from '../../models/banner'

export const getBanners = async (): Promise<Banner[]> => {
  const {
    data: { data },
  } = await api.get('/layout', {
    params: { subdomain: 'supermercado' },
  })

  const banners = data.banners.map((banner) => {
    return {
      id: banner.id,
      imageUrl: banner.image,
      isDesktop: banner.is_desktop,
    }
  })

  return banners
}
