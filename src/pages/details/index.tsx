import { useQuery } from 'react-query'
import { getProductDetails } from './services/getProductDetails'
import { useParams } from 'react-router'
import { useState } from 'react'

export const Details = () => {
  const { slug } = useParams()

  const [product, setProduct] = useState<Product>()

  const { isLoading } = useQuery('slug', () => getProductDetails(slug), {
    onSuccess(data) {
      setProduct(data)
    },
  })

  if (isLoading) return 'Carregando..'

  return <div>{product.name}</div>
}
