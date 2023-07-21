import { Text } from '@/shared/components/text'

type information = {
  label: string
  icon?: React.ReactNode
  value?: string
  url?: string
}

interface InformationsProps {
  informationsList: information[]
}
const Informations = ({ informationsList }: InformationsProps) => {
  return (
    <div>
      {informationsList.map((info) => {
        return (
          <div key={info.label}>
            {info.url ? (
              <a href={info.url}>
                <Text size={'lg'}>{info.label}</Text>
              </a>
            ) : (
              <div>
                <div>{info.icon}</div>{' '}
                <div>
                  <Text size={'lg'}>
                    {info.label}: {info.value}
                  </Text>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Informations
