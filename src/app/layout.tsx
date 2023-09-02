import './globals.scss'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Banana Republic',
  description: 'A React app by Dominica Wannenburg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
