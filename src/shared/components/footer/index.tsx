import { Text } from '../text'
import Informations, { Information } from './components/informations'
import * as S from './styles'
import { PhoneCall, Envelope } from 'phosphor-react'

import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp.svg'

export const Footer = () => {
  const institutional: Information[] = [
    {
      type: 'text',
      label: 'Início',
      url: 'https://supermercado.instabuy.com.br/',
    },
    {
      type: 'text',
      label: 'Sobre Nós',
      url: 'https://supermercado.instabuy.com.br/sobre',
    },
    {
      type: 'text',
      label: 'Blog',
      url: 'https://supermercado.instabuy.com.br/blog',
    },
  ]

  const support: Information[] = [
    {
      type: 'text',
      label: 'Fale Conosco',
      url: 'https://supermercado.instabuy.com.br/contato',
    },
    {
      type: 'text',
      label: 'Primeira Compra?',
      url: 'https://central-de-ajuda.instabuy.com.br/',
    },
    {
      type: 'contact',
      label: 'Telefone',
      icon: <PhoneCall />,
      value: '(61) 99121-7188',
    },
    {
      type: 'contact',
      label: 'E-mail',
      icon: <Envelope />,
      value: 'y.garrido.yuri@gmail.com',
    },
  ]

  const terms: Information[] = [
    {
      type: 'text',
      label: 'Termos de Uso',
      url: 'https://www.instabuy.com.br/termos/',
    },
    {
      type: 'text',
      label: 'Política de Privacidade',
      url: 'https://www.instabuy.com.br/politica-de-privacidade/',
    },
  ]

  const channels: Information[] = [
    {
      type: 'logo',
      logos: [
        { logo: instagram, url: 'https://www.instagram.com/instabuy_brasil' },
        { logo: facebook, url: 'https://facebook.com/InstaBuy/' },
        { logo: whatsapp, url: 'https://wa.me/5561992973439' },
      ],
    },
  ]

  const paymmnet: Information[] = [
    {
      label: 'Pagamento Online',
      type: 'logo',
      logos: [
        { logo: 'https://www.mercadopago.com/org-img/MP3/API/logos/pix.gif' },
        { logo: 'https://www.mercadopago.com/org-img/MP3/API/logos/elo.gif' },
        { logo: 'https://www.mercadopago.com/org-img/MP3/API/logos/visa.gif' },
        {
          logo: 'https://www.mercadopago.com/org-img/MP3/API/logos/master.gif',
        },
        {
          logo: 'https://www.mercadopago.com/org-img/MP3/API/logos/hipercard.gif',
        },
        { logo: 'https://www.mercadopago.com/org-img/MP3/API/logos/amex.gif' },
      ],
    },
  ]

  return (
    <S.Container>
      <S.Wrapper>
        <S.AboutContainer>
          <Informations title="Institucional" informations={institutional} />
          <Informations title="Suporte" informations={support} />
          <Informations title="Termos" informations={terms} />
          <Informations title="Nossos Canais" informations={channels} />
          <Informations title="Pagamento" informations={paymmnet} />
        </S.AboutContainer>

        <S.DescriptionContainer>
          <Text size="2xl">Supermercado Modelo - CNPJ: 00.038.174/0001-43</Text>
          <Text size="2xl">
            Asa Norte, Campus Universitário Darcy Ribeiro Bloco A PMU I Sala AT
            08/03 - AC UNB, Edificio CDT, Brasília - DF
          </Text>
          <Text size="2xl">© 2023 Todos os Direitos Reservados</Text>
          <Text size="2xl">
            Fotos ilustrativas. Compras podem ser canceladas em caso de suspeita
            de fraude. O valor total de sua compra poderá ser alterado para mais
            ou para menos por conta dos produtos de peso variável. Preços,
            ofertas e condições exclusivos para internet e válidos durante o dia
            de hoje, podendo sofrer alterações sem prévia notificação. Em caso
            de divergência de valores no site, o valor válido é o do carrinho de
            compras. Venda sujeita à disponibilidade de estoque no dia da
            entrega. No caso de faltar algum produto, este não será entregue e o
            valor correspondente não será cobrado. Proibida a venda de bebidas
            alcoólicas para menores de 18 anos. Beba com moderação.
          </Text>
        </S.DescriptionContainer>

        <div>
          Desenvolvido por
          <Text size="6xl">Yuri Garrido</Text>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}
