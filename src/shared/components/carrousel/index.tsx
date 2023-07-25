import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ReactNode, useState } from 'react'
import * as S from './styles'
import { Button } from '../button'
import {
  ArrowArcLeft,
  ArrowArcRight,
  CaretLeft,
  CaretRight,
  Lightning,
} from 'phosphor-react'
import { Text } from '../text'

interface CarrouselItems {
  children: ReactNode
}

export const Carrousel = ({ children }: CarrouselItems) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 4.6,
      spacing: 48,
    },
  })

  if (!children) return

  return (
    <S.Container className="navigation-wrapper">
      <S.Heading>
        <Lightning size={36} />
        <Text size="5xl" bold>
          Ofertas
        </Text>
      </S.Heading>
      <div ref={sliderRef} className="keen-slider">
        {loaded && instanceRef.current && (
          <S.CarrouselButtonLeft
            color="orange"
            circle
            onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          >
            <CaretLeft size={24} />
          </S.CarrouselButtonLeft>
        )}
        {children}
        {loaded && instanceRef.current && (
          <S.CarrouselButtonRight
            color="orange"
            circle
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length - 1
            }
          >
            <CaretRight size={24} />
          </S.CarrouselButtonRight>
        )}
      </div>
      {false && loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <Button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></Button>
            )
          })}
        </div>
      )}
    </S.Container>
  )
}
