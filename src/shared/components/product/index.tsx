import { generateImageUrl } from '@/shared/constants'
import { Product as ProductType } from '../../../pages/home/models/product'
import * as S from './styles'
import { useNavigate } from 'react-router-dom'
import { formatCurrency } from '@/shared/utils/formatter'
import { Text } from '@/shared/components/text'
import { Plus } from 'phosphor-react'
import { useShoppingCartContext } from '../../../pages/home/context/cart/cart'
import { toast } from 'react-hot-toast'
import { useState } from 'react'

interface ProductProps {
  product: ProductType
  position?: number
  slider?: boolean
}

export const Product = ({
  product,
  position,
  slider = false,
}: ProductProps) => {
  const { addProduct } = useShoppingCartContext()
  const [imageLoaded, setImageLoaded] = useState(false)

  const navigate = useNavigate()

  const handleAddProductIntoCart = (product: ProductType) => {
    addProduct(product)
    toast.success(`${product.name} adicionado ao carrinho`)
  }

  const handleImageLoad = () => {
    setTimeout(() => setImageLoaded(true), 1000)
  }

  return (
    <S.Product
      className={slider ? `keen-slider__slide number-slide${position}` : ''}
      key={product.id}
      onClick={() => navigate(`/product/${product.slug}`)}
    >
      <div>
        <S.Image
          loading={!imageLoaded}
          src={generateImageUrl(product.imageUrl)}
          onLoad={handleImageLoad}
          alt=""
        />
        {!imageLoaded && <S.ImageSkeleton />}
      </div>

      <S.PriceContainer>
        <S.Price>
          <Text size="4xl" bold>
            {formatCurrency(product.price)}
          </Text>
        </S.Price>
        <S.Price red>
          <Text size="2xl" bold>
            {formatCurrency(product.price * 1.1)}
          </Text>
        </S.Price>
      </S.PriceContainer>
      <S.CartButton
        circle
        color="white"
        onClick={(e) => {
          e.stopPropagation()
          handleAddProductIntoCart(product)
        }}
      >
        <Plus size={24} />
      </S.CartButton>

      <Text size="2xl" bold>
        {product.name}
      </Text>
    </S.Product>
  )
}
