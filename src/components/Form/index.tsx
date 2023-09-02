import Image from 'next/image'
import styles from './styles.module.scss'

export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor='name'>Name</label>
        <input name='name' type='text' placeholder='Peter Parker'></input>
      </div>
      <div>
        <label htmlFor='date_of_birth'>Date of birth</label>
        <input
          name='date_of_birth'
          type='date'
          placeholder='Peter Parker'
        ></input>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input name='email' type='email' placeholder='Peter Parker'></input>
      </div>
      <div>
        <label htmlFor='mobile'>Mobile</label>
        <input name='mobile' type='tel' placeholder='Peter Parker'></input>
      </div>
      <div>
        <label htmlFor='customer_id'>Customer ID</label>
        <input
          name='customer_id'
          type='text'
          placeholder='Peter Parker'
        ></input>
      </div>
      <button type='submit'>Submit</button>
    </form>
  )
}
