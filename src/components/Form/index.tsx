'use client'
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
        <legend>Gender</legend>
        <div className={styles.radioGroup}>
          <div className={styles.customRadio}>
            <input
              {...register('gender')}
              type='radio'
              id='male'
              value='male'
            />
            <label className={styles.male} htmlFor='male'>
              Male
            </label>
          </div>
          <div className={styles.customRadio}>
            <input
              {...register('gender')}
              type='radio'
              id='female'
              value='female'
            />
            <label className={styles.female} htmlFor='female'>
              Female
            </label>
          </div>
        </div>
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
      <div className={styles.formRow}>
        <legend>Membership</legend>
        <div className={styles.radioGroup}>
          <div className={styles.customRadio}>
            <input
              {...register('membership')}
              type='radio'
              id='classic'
              value='classic'
            />
            <label className={styles.membership} htmlFor='classic'>
              Classic
            </label>
          </div>
          <div className={styles.customRadio}>
            <input
              {...register('membership')}
              type='radio'
              id='silver'
              value='silver'
            />
            <label className={styles.membership} htmlFor='silver'>
              Silver
            </label>
          </div>
          <div className={styles.customRadio}>
            <input
              {...register('membership')}
              type='radio'
              id='gold'
              value='gold'
            />
            <label className={styles.membership} htmlFor='gold'>
              Gold
            </label>
          </div>
        </div>
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
