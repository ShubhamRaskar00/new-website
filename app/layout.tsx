import CrispProvider from '@/components/crisp-provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ScrollArea } from "@/components/ui/scroll-area"
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <CrispProvider />
      <NextTopLoader color='#220f3c' showSpinner={true} />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
