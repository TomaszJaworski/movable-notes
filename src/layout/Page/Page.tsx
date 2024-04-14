import { ReactNode } from 'react'
import { Header } from '../Header'

interface PageProps {
  children: ReactNode
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex-1">{children}</div>
    </div>
  )
}
