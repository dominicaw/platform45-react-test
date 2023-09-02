import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import Form from '../Form'

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <div className={styles.imageContainer}>
          <Image
            fill
            priority
            src='/images/face.svg'
            alt='Picture of a person'
          />
        </div>
      </div>
      <div className={styles.rightContainer}>
        <Form />
      </div>
    </div>
  )
}
