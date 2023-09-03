'use client'
import { useState } from 'react'
import CardContent from '../CardContent'
import Form from '../Form'
import CardFlyout from '../CardFlyout'
import styles from './styles.module.scss'

export default function Card() {
  const [isOpen, setIsOpen] = useState(false)

  const handleCardContentClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        <CardContent onClick={handleCardContentClick} isOpen={isOpen} />
      </div>
      <div className={styles.rightContainer}>
        <Form />
        <CardFlyout isOpen={isOpen} />
      </div>
    </section>
  )
}
