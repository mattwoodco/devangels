import React, { ForwardedRef, forwardRef, MutableRefObject } from 'react'
import AppHeader from './AppHeader'

const AppLayout = forwardRef(
  (
    { children }: { children: React.ReactNode },
    ref: ForwardedRef<HTMLDivElement | null>
  ) => {
    return (
      <div className="overflow-x-hidden" ref={ref}>
        <AppHeader />
        <main className="relative mx-auto max-w-screen-xl">{children}</main>
      </div>
    )
  }
)

AppLayout.displayName = 'AppLayout'

export { AppLayout }
