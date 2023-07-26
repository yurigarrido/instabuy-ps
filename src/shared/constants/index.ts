export const generateBannerUrl = (url: string): string => {
  return `https://assets.instabuy.com.br/ib.store.banner/bnr-${url}`
}

type Size = 'medium' | 'big' | 'small'

export const generateImageUrl = (url: string, size: Size): string => {
  const urlsSizes = {
    small: 'https://assets.instabuy.com.br/ib.item.image.samll/s-',
    medium: 'https://assets.instabuy.com.br/ib.item.image.medium/m-',
    big: 'https://assets.instabuy.com.br/ib.item.image.big/b-',
  }
  return `${urlsSizes[size]}${url}`
}
