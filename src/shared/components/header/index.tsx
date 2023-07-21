import { ShoppingCart, UserCircle } from 'phosphor-react'
import * as S from './styles'
import { Button } from '../button'
import { Text } from '../text'

export const Header = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.FlexContainer>
          <div>
            <S.Logo
              src="https://ibassets.com.br/ib.store.image.medium/m-0cd410fa3a4844acb4294a0edfea3822.png"
              alt=""
            />
          </div>
          <Text size="5xl" bold>
            Instabuy
          </Text>
        </S.FlexContainer>

        <S.SearchBar>
          <input type="text" placeholder="O que você procura?" />
        </S.SearchBar>

        <S.FlexContainer>
          <Button color="white" leftIcon={<ShoppingCart size={20} />}>
            Carrinho
          </Button>
          <Button color="white" leftIcon={<UserCircle size={20} />}>
            {' '}
            Minha conta
          </Button>
        </S.FlexContainer>
      </S.Wrapper>
    </S.Container>
  )
}
