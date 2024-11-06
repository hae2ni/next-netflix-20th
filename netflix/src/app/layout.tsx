import type { Metadata } from 'next'
import '../styles/reset.css'

export const metadat: Metadata = {
  title: 'netflix',
  description: '헤헤',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
