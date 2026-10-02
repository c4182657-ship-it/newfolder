import type { ReactNode } from 'react'

import { Link, routes } from '@redwoodjs/router'

type Props = {
  children?: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link
            to={routes.home()}
            className="text-xl font-extrabold text-gray-900"
          >
            Jobs<span className="text-blue-600">Ireland</span>
            <span className="ml-2 hidden text-xs font-normal text-gray-500 sm:inline">
              simple construction jobs
            </span>
          </Link>
          <nav className="flex items-center gap-2 text-sm">
            <Link
              to={routes.home()}
              className="rounded-md px-3 py-2 font-medium text-gray-700 hover:bg-gray-100"
            >
              Jobs
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>

      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-center text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:text-left">
          <span>Built for Dublin construction hiring • Simple job platform</span>
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
