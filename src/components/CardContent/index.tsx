import Image from 'next/image'
import styles from './styles.module.scss'

export default function CardContent() {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.imageContainer}>
        <Image fill priority src='/images/face.svg' alt='Picture of a person' />
      </div>
      <div>
        <h1>Front-end challenge!</h1>
        <p>This is a design that you will need to code up to impress us.</p>
      </div>
      <div className={styles.arrowButton}>
        <Image width='18' height='18' src='/images/arrow.svg' alt='Arrow' />
      </div>
    </div>
  )
}
