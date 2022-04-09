/* eslint-disable @next/next/no-img-element */
import { ReactNode, useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { CarouselThumb } from './CarouselThumb'
import styles from './embla.module.css'
import { NextButton, PrevButton } from './CarouselButtons'

type PropType = {
  slides: ReactNode[]
}
const Carousel = (props: PropType) => {
  const { slides } = props

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)

  const [selectedIndex, setSelectedIndex] = useState(0)

  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false })
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index)
    },
    [embla, emblaThumbs]
  )

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return

    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
    setSelectedIndex(embla.selectedScrollSnap())
    emblaThumbs.scrollTo(embla.selectedScrollSnap())
  }, [embla, emblaThumbs, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
  }, [embla, onSelect])

  return (
    <div className={styles.embla__wrapper}>
      <div className={styles.embla}>
        <div className={styles.embla__viewport} ref={mainViewportRef}>
          <div className={styles.embla__container}>
            {slides.map((_, index) => (
              <div className={styles.embla__slide} key={index}>
                <div className={styles.embla__slide__inner}>
                  <img
                    className={styles.embla__slide__img}
                    src="/1_gigabyte_amd_radeon_rx_6600.jpg"
                    alt="A cool cat."
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>

      <div className={`${styles.embla} ${styles['embla--thumb']}`}>
        <div className={styles.embla__viewport} ref={thumbViewportRef}>
          <div
            className={`${styles.embla__container} ${styles['embla__container--thumb']}`}
          >
            {slides.map((slide, index) => (
              <CarouselThumb
                onClick={() => onThumbClick(slide)}
                selected={slide === selectedIndex}
                imgSrc="/1_gigabyte_amd_radeon_rx_6600.jpg"
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Carousel
