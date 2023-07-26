import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { ReactNode, useState } from 'react'
import * as S from './styles'
import { CaretLeft, CaretRight, Lightning } from 'phosphor-react'

interface CarrouselItems {
  children: ReactNode
  showPoints?: boolean
  showControls?: boolean
  itemsPerView?: number
}

export const Carrousel = ({
  children,
  showPoints,
  showControls,
  itemsPerView,
}: CarrouselItems) => {
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
      perView: itemsPerView || 1,
      spacing: 48,
    },
  })

  if (!children) return

  return (
    <S.Container className="navigation-wrapper">
      <div ref={sliderRef} className="keen-slider">
        {showControls && loaded && instanceRef.current && (
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
        {showControls && loaded && instanceRef.current && (
          <S.CarrouselButtonRight
            color="orange"
            circle
            onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
            disabled={
              currentSlide ===
              instanceRef.current.track.details?.slides?.length - 1
            }
          >
            <CaretRight size={24} />
          </S.CarrouselButtonRight>
        )}
      </div>
      {showPoints && loaded && instanceRef.current && (
        <S.Points>
          {[
            ...Array(instanceRef.current.track?.details?.slides.length).keys(),
          ].map((idx) => {
            return (
              <S.Point
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                active={currentSlide === idx}
              />
            )
          })}
        </S.Points>
      )}
    </S.Container>
  )
}
