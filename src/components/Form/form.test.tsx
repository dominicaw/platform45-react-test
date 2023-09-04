import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/'
import Form from './index'

describe('Form Component', () => {
  let originalConsoleLog: any
  let consoleOutput: any[] = []

  beforeEach(() => {
    originalConsoleLog = console.log
    consoleOutput = []
    console.log = jest.fn((...args) => {
      consoleOutput.push(args)
      originalConsoleLog(...args)
    })
  })

  afterEach(() => {
    console.log = originalConsoleLog
  })

  test('it logs form data to the console when submitted', async () => {
    const { getByLabelText, getByText } = render(<Form />)

    const nameInput = getByLabelText('Name') as HTMLInputElement
    const genderInput = getByLabelText('Male') as HTMLInputElement
    const dobInput = getByLabelText('Date of Birth') as HTMLInputElement
    const emailInput = getByLabelText('Email') as HTMLInputElement
    const mobileInput = getByLabelText('Mobile') as HTMLInputElement
    const customerIdInput = getByLabelText('Customer ID') as HTMLInputElement
    const membershipInput = getByLabelText('Classic') as HTMLInputElement

    fireEvent.change(nameInput, { target: { value: 'Peter Parker' } })
    fireEvent.click(genderInput)
    fireEvent.change(dobInput, { target: { value: '1990-01-01' } })
    fireEvent.change(emailInput, { target: { value: 'name@domain.com' } })
    fireEvent.change(mobileInput, { target: { value: '+91 98765 43210' } })
    fireEvent.change(customerIdInput, {
      target: { value: '576802-ERD0348 45' },
    })
    fireEvent.click(membershipInput)

    fireEvent.click(getByText('Save'))

    await waitFor(() => {
      expect(consoleOutput).toEqual([
        [
          {
            name: 'Peter Parker',
            gender: 'male',
            date_of_birth: '1990-01-01',
            email: 'name@domain.com',
            mobile: '+91 98765 43210',
            customer_id: '576802-ERD0348 45',
            membership: 'classic',
          },
        ],
      ])
    })
  })
})
