import { ReactNode } from 'react'

interface InteractiveBoxWrapperProps {
  children: ReactNode
}

export const InteractiveBoxWrapper = ({
  children,
}: InteractiveBoxWrapperProps) => {
  return <div>{children}</div>
}
