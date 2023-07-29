import { Text } from '@/shared/components/text'
import * as S from './styles'

export type Information = {
  label?: string
  type: 'text' | 'contact' | 'logo'
  icon?: React.ReactNode
  value?: string
  url?: string
  logos?: {
    logo: string
    url?: string
  }[]
}

interface InformationsProps {
  title: string
  informations: Information[]
}
const Informations = ({ informations, title }: InformationsProps) => {
  const formatInformations = (information: Information) => {
    if (information.type === 'contact') {
      return (
        <S.Contact>
          <div>{information.icon}</div>
          <div>
            <Text size="2xl">
              {information.label}: {information.value}
            </Text>
          </div>
        </S.Contact>
      )
    }

    if (information.type === 'text') {
      return (
        <S.Link target="_blank" href={information.url}>
          <Text size="2xl">{information.label}</Text>
        </S.Link>
      )
    }

    if (information.type === 'logo') {
      return (
        <S.Grid row={!!information}>
          {information.logos?.map((logo) => {
            return (
              <>
                {logo.url ? (
                  <S.Link href={logo.url} key={logo.url} target="_blank">
                    <S.Logo src={logo.logo} alt={information.label} />
                  </S.Link>
                ) : (
                  <img
                    style={{ objectFit: 'contain' }}
                    src={logo.logo}
                    alt=""
                  />
                )}
              </>
            )
          })}
        </S.Grid>
      )
    }
  }

  return (
    <S.Container>
      <Text size="4xl" bold>
        {title}
      </Text>
      {informations.map((info) => {
        return (
          <S.Grid row={!!info.logos} key={info.label}>
            {formatInformations(info)}
          </S.Grid>
        )
      })}
    </S.Container>
  )
}

export default Informations
