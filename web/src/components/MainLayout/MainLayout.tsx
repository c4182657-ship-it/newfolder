import type { ReactNode } from 'react'

import { Link, routes } from '@redwoodjs/router'

type Props = {
  children?: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-3 sm:px-6 sm:py-4">
          <Link
            to={routes.home()}
            className="truncate text-lg font-extrabold text-gray-900 sm:text-xl"
          >
            Jobs<span className="text-blue-600">Ireland</span>
            <span className="ml-2 hidden text-xs font-normal text-gray-500 sm:inline">
              simple construction jobs
            </span>
          </Link>
          <nav className="flex shrink-0 items-center gap-1 text-sm sm:gap-2">
            <Link
              to={routes.home()}
              className="rounded-md px-3 py-2 font-medium text-gray-700 transition hover:bg-gray-100 active:scale-95"
            >
              Jobs
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-3 py-5 sm:px-6 sm:py-8">
        {children}
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-3 py-5 text-center text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6 sm:text-left sm:text-sm">
          <span className="leading-snug">
            Built for Dublin construction hiring • Simple job platform
          </span>
          <span className="flex justify-center gap-4">
            <Link to={routes.privacy()} className="hover:underline">
              Privacy
            </Link>
          </span>
        </div>
      </footer>
    </div>
  )
}

export default MainLayout
