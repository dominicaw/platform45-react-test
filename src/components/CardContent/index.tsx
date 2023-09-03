import CardContentProps from '@/interfaces/CardContent'
import Image from 'next/image'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import styles from './styles.module.scss'

export default function CardContent({ onClick, isOpen }: CardContentProps) {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.imageContainer}>
        <Image fill priority src='/images/face.svg' alt='Picture of a person' />
      </div>
      <div className={styles.textContainer}>
        <h1>Front-end challenge!</h1>
        <p>This is a design that you will need to code up to impress us.</p>
      </div>
      <div
        className={clsx(styles.arrowButton, isOpen ? styles.rotate : '')}
        onClick={onClick}
      >
        <Image width='18' height='18' src='/images/arrow.svg' alt='Arrow' />
      </div>
    </div>
  )
}

CardContent.propTypes = {
  onClick: PropTypes.func,
}
