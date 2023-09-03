'use client'
import Image from 'next/image'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormData from '@/interfaces/FormData'
import styles from './styles.module.scss'

export default function Form() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>()

  const formSubmitHandler: SubmitHandler<FormData> = (data) => {
    // put an API call here but we'll just console.log the data for the test
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(formSubmitHandler)}
      className={styles.formContainer}
    >
      <div className={styles.formRow}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          placeholder='Peter Parker'
          {...register('name', { required: true })}
        ></input>
      </div>
      <div className={styles.formRow}>
        <label htmlFor='date_of_birth'>Date of Birth</label>
        <input
          {...register('date_of_birth', { required: true })}
          id='date_of_birth'
          type='date'
        ></input>
      </div>
      <div className={styles.formRow}>
        <label htmlFor='email'>Email</label>
        <input
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          id='email'
          type='email'
          placeholder='name@domain.com'
        ></input>
      </div>
      <div className={styles.formRow}>
        <label htmlFor='mobile'>Mobile</label>
        <input
          {...register('mobile', { required: true })}
          id='mobile'
          type='tel'
          placeholder='+91 98765 43210'
        ></input>
      </div>
      <div className={styles.formRow}>
        <label htmlFor='customer_id'>Customer ID</label>
        <input
          {...register('customer_id', { required: true })}
          id='customer_id'
          type='text'
          placeholder='576802-ERD0348 45'
          required
        ></input>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.cancelButton} type='reset'>
          Cancel
        </button>
        <button className={styles.submitButton} type='submit'>
          Save
        </button>
      </div>
    </form>
  )
}
