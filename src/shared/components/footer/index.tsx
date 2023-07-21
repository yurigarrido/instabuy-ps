import Informations from './components/informations'
import * as S  from './styles'
import {PhoneCall, Envelope} from 'phosphor-react'

export const Footer = () => {

  const institutional = [
    {
      label: 'Início',
      url: 'https://supermercado.instabuy.com.br/'
    },
    {
      label: 'Sobre Nós',
      url: 'https://supermercado.instabuy.com.br/sobre'
    },
    {
      label: 'Blog',
      url: 'https://supermercado.instabuy.com.br/blog'
    },
  ]

  const support = [
    {
      label: 'Fale Conosco',
      url: 'https://supermercado.instabuy.com.br/contato'
    },
    {
      label: 'Primeira Compra?',
      url: 'https://central-de-ajuda.instabuy.com.br/'
    },
    {
      label: 'Telefone',
      icon: <PhoneCall />,
      value: '(61) 99999-9999'
    },
    {
      label: 'E-mail',
      icon: <Envelope />,
      value: '(61) 99999-9999'
    },
  ]

  const terms = [
    {
      label: 'Termos de Uso',
      link: 'https://www.instabuy.com.br/termos/'
    },
    {
      label: 'Política de Privacidade',
      link: 'https://www.instabuy.com.br/politica-de-privacidade/'
    },
  ]

  return (
    <S.Container>
      <S.Wrapper>
        <S.AboutContainer>
          <Informations informationsList={institutional} />
          <Informations informationsList={support} />
          <Informations informationsList={terms} />
        </S.AboutContainer>
      </S.Wrapper>
    </S.Container>
  )
}

