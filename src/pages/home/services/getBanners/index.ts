import { api } from '@/shared/api'
import { Banner } from '../../models/banner'
import { BannersData } from './types'
import { endpoints } from '@/shared/api/endpoints'

export const getBanners = async (): Promise<Banner[]> => {
  const {
    data: { data },
  } = await api.get<BannersData>(endpoints.banners, {
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
