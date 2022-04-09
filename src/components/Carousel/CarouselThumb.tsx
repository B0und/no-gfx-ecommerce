/* eslint-disable @next/next/no-img-element */
import styles from './embla.module.css'

interface ThumbProps {
  selected: boolean
  onClick: () => void
  imgSrc?: string
}

export const CarouselThumb = ({ selected, onClick }: ThumbProps) => (
  <div
    className={`${styles.embla__slide} ${styles['embla__slide--thumb']} ${
      selected ? 'is-selected' : ''
    }`}
  >
    <button
      onClick={onClick}
      className={`${styles.embla__slide__inner} ${styles['embla__slide__inner--thumb']}`}
      type="button"
    >
      <img
        className={styles.embla__slide__thumbnail}
        src="/1_gigabyte_amd_radeon_rx_6600.jpg"
        alt="graphics card"
      />
    </button>
  </div>
)
