import Form from '../Form'
import CardContent from '../CardContent'
import styles from './styles.module.scss'

export default function Card() {
  return (
    <section className={styles.container}>
      <div className={styles.leftContainer}>
        <CardContent />
      </div>
      <div className={styles.rightContainer}>
        <Form />
      </div>
    </section>
  )
}
