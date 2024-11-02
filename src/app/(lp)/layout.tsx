import { PropsWithChildren } from 'react'

export default function LpLayout({ children }: PropsWithChildren) {
  return <div className="min-w-screen min-h-screen">{children}</div>
}
