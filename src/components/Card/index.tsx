import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <Image
          fill
          priority
          src='/images/face.svg'
          sizes='(max-width: 768px) 300px, (max-width: 1200px) 30px, 40px'
          alt='Picture of a person'
        />
      </div>
      <div className={styles.rightContainer}>
        <form>stuff</form>
      </div>
    </div>
  )
}
