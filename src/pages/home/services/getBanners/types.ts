interface Banner {
  id: string
  image: string
  title: string
  is_mobile: boolean
  is_desktop: boolean
  link: {
    subcategory_id: string
  }
  href: string
}

interface Data {
  banners: Banner[]
}

export interface BannersData {
  count: number
  data: Data
  http_status: number
  status: string
}
